<template>
  <div class="main-content">
    <section>
      <div class="contain">
        <div class="wrapper">
          <div id="contact" class="form">
            <h3>Update a Question</h3>
            <form v-if="deleted != 1">
              <div class="full-width">
                <label for="title">Title</label>
                <input type="text" id="title" v-model.lazy="question.title" />
              </div>
              <div>
                <label for="optionType">Question Type</label>
                <select
                  name="optionType"
                  id="optionType"
                  v-model="question.optionType"
                >
                  <option>radio</option>
                  <option>checkbox</option>
                  <option>cloze</option>
                  <option>slider</option>
                  <option>write</option>
                  <option>match</option>
                  <option>sort</option>
                </select>
              </div>
              <div>
                <label for="numTries">Number of Tries</label>
                <input
                  type="text"
                  id="numTries"
                  min="0"
                  v-model.lazy="question.numTries"
                />
              </div>
              <div>
                <label for="whyRight">If Answers Right</label>
                <textarea
                  id="whyRight"
                  class="rightwrong-area"
                  v-model.lazy="question.whyRight"
                  cols="30"
                  rows="7"
                ></textarea>
              </div>
              <div>
                <label for="whyWrong">If Answers Wrong</label>
                <textarea
                  id="whyWrong"
                  class="rightwrong-area"
                  v-model.lazy="question.whyWrong"
                  cols="30"
                  rows="7"
                ></textarea>
              </div>
              <div class="full-width">
                <label for="question">Question</label>
                <textarea
                  class="question-area"
                  id="question"
                  v-model.lazy="question.text"
                  cols="30"
                  rows="7"
                ></textarea>
              </div>
              <div class="full-width">
                <vue-tags-input
                  v-model="tag"
                  :tags="tags"
                  @tags-changed="(newTags) => (tags = newTags)"
                />
              </div>
              <template v-for="(data, index) in question.options">
                <div :key="index">
                  <label :for="data">
                    <input
                      style="display: inline-block; width: auto"
                      type="checkbox"
                    />
                    Answer {{ index }}
                  </label>
                  <input
                    type="text"
                    id="data"
                    class="form-control"
                    v-model="question.options[index]"
                  />
                </div>
                <div :key="index">
                  <label :for="data">t</label>
                  <button @click="removeAnswer(index)" class="btn btn-fsred">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      class="bi bi-trash"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                      />
                    </svg>
                  </button>
                </div>
              </template>
              <div style="justify-self: center" class="full-width">
                <button class="btn-fsblue" @click.prevent="addAnswer">
                  addAnswer
                </button>
              </div>

              <div class="two-col-btn full-width">
                <button class="btn-fsblue" @click.prevent="updateData">
                  Update Question
                </button>
                <button class="btn-fsblue" @click.prevent="deleteData">
                  Delete Question
                </button>
                <button class="btn-fsblue" @click.prevent="previewData" v-if="preview == 0">
                  Preview Question
                </button>
                <button class="btn-fsblue" @click.prevent="hidePreviewData" v-if="preview == 1">
                  Hide Preview Question
                </button>
              </div>

          </form>
          <div class="form-message full-width" v-if="update != 0 || deleted != 0">
            <p v-if="update == 1" class="form-success">
              Question successfully updated
            </p>
            <p v-if="update == -1" class="form-error">
              Error occured while updating
            </p>
            <p v-if="deleted == 1" class="form-success">
              Question successfully deleted
            </p>
            <p v-if="deleted == -1" class="form-error">
              Error occured while deleting
            </p>

            <a href="/make-quiz/view-question" class="btn"
              >View questions</a
            >
          </div>

          <hr v-if="preview == 1">

          <div class="question-preview-container" v-if="preview == 1">
            <div>
              <div class="question-content">
                <div>
                  <h3>{{question.title}}</h3>
                  <vue-mathjax :formula="question.text"></vue-mathjax> <!-- vue-mathjax + :formula="variable" to display the mathjax.  -->

                  <div v-if="question.optionType == 'checkbox'">
                    <p v-for="(opt, index) in question.options" :key="index">
                      <label for="opt">
                        <input type="checkbox" name="opt" value="opt">

                      </label>
                    </p>
                  </div>

                  <div v-if="question.optionType == 'radio'">
                    <p v-for="(opt, index) in question.options" :key="index">
                      <label for="opt">
                        <input type="radio" name="choice" value="opt">
                         <vue-mathjax :formula="opt"></vue-mathjax>
                       <!-- {{opt}} -->
                      </label>
                    </p>
                  </div>

                  <div v-if="question.optionType == 'cloze'">
                    <p v-for="(opt, index) in question.options" :key="index">
                         <vue-mathjax :formula="opt"></vue-mathjax>
                       <!-- {{opt}} -->                    
                       </p>
                  </div>

                  <div class="two-col-btn">
                    <button class="btn">Ok</button>
                    <button class="btn">Skip</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      question: [],
      update: 0,
      deleted: 0,
      preview: 0
    };
  },
  methods: {
    updateData() {
      this.$http.put("data/" + this.id + ".json", this.question).then(
        (response) => {
          console.log(response);
          this.update = 1;
        },
        (error) => {
          console.log(error);
          this.update = -1;
        }
      );
    },
    deleteData() {
      this.$http.delete("data/" + this.id + ".json").then(
        (response) => {
          this.deleted = 1;
          return response.json();
        },
        (error) => {
          console.log(error);
          this.deleted = -1;
        }
      );
    },
    previewData() {
      this.preview = 1;
    },
    hidePreviewData() {
      this.preview = 0;
    }
  },
  created() {
    this.$http
      .get("data/" + this.id + ".json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.question = data;
        console.log(data);
      });
  },
};
</script>


<style lang="scss" scoped>
  hr {
    margin: 50px 0;
  }

  .question-preview-container {
    .question-content {
      width: 100%;
    }
  }

  form {
    button {
        cursor: pointer;
        width: 100%;
        border: none;
        background: #002c76;
        color: #fff;
        margin: 0 0 5px;
        padding: 10px;
        font-size: 15px;
        font-weight: medium;
    }

    .form-message {
      .form-success {
        margin-bottom: 20px;
      }
    }
  }
</style>