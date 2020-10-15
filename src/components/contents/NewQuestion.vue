<template>
  <div class="main-content">
    <section>
      <div class="contain">
        <div class="wrapper">
          <div id="contact" class="form" v-bind:class="{ 'form-with-preview': preview }">
            <div class="flex">
              <div class="form-container previewed">
                <h3>New Question</h3>
                <form>
                  <div class="full-width">
                    <label for="title">Title</label>
                    <input type="text" id="title" v-model.lazy="question.title" />
                  </div>
                  <div>
                    <label for="optionType">Question Type</label>
                    <select name="optionType" id="optionType" v-model="question.optionType">
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
                    <input type="text" id="numTries" min="0" v-model.lazy="question.numTries" />
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
                      :tags="question.tags"
                      @tags-changed="newTags => question.tags = newTags"
                    />
                  </div>
                  <template v-for="(data,index) in question.options">
                    <div :key="index">
                      <label :for="data">
                        <input style="display: inline-block; width: auto" type="checkbox" v-model="question.rightAnswer[index]" />
                        Answer {{index}}
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
                  <div style="justify-self: center;" class="full-width">
                    <button class="btn-fsblue" @click.prevent="addAnswer">addAnswer</button>
                  </div>

                  <div class="full-width">
                    <button @click.prevent="submit">Send</button>
                    <button class="btn-fsblue" @click.prevent="previewData" v-if="preview == false">
                      Preview Question
                    </button>
                    <button class="btn-fsblue" @click.prevent="hidePreviewData" v-if="preview == true">
                      Hide Preview Question
                    </button>
                  </div>
                </form>
              </div>

              <div class="preview-container previewed" v-if="preview == true">
                <div>
                  <h3>Preview of the question</h3>
                  <div class="question-content">
                    <div>
                      <h4>{{question.title}}</h4>
                      <mathjax :formula="question.text"></mathjax> <!-- mathjax + :formula="variable" to display the mathjax.  -->

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
                             <mathjax :formula="opt"></mathjax>
                           <!-- {{opt}} -->
                          </label>
                        </p>
                      </div>

                      <div v-if="question.optionType == 'cloze'">
                        <p v-for="(opt, index) in question.options" :key="index">
                             <mathjax :formula="opt"></mathjax>
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

            <a href="/make-quiz/view-question" class="btn opacity-hover">View questions</a>
            <div class="form-message" v-if="success != 0">
              <p v-if="success == 1" class="form-success">Question successfully added</p>
              <p v-if="success == -1" class="form-error">Error occured while adding</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import VueTagsInput from "@johmun/vue-tags-input"; //use http://www.vue-tags-input.com/ for easy tagging of questions.

export default {
  components: {
    VueTagsInput,
  },
  data() {
    return {
      tag: "", //read in the tag from the textbox
      preview: false,
      question: {
        done: 0,
        locked: 1,
        show: 0,
        title: "",
        skip: "",
        text: "",
        numTries: "",
        whyRight: "",
        whyWrong: "",
        optionType: "",
        options: [],
        rightAnswer: [],
        tags: [], //array where each individual tag gets stored
      },
		success: 0
    };
  },
  methods: {
    addAnswer() {
      this.question.options.push("DefaultText");
      this.question.rightAnswer.push(false);
    },
    removeAnswer(index) {
      this.question.options.splice(index, index);
    },
    addAsterisk() {
      /*
      * Take correct answers and add an Asterisk infront of them 
      * Needed to match SCALE schema.
      ? Should we be doing this differently to be more efficient? 
      */
      this.question.rightAnswer.forEach((element,index) => {
        if (element) {
          this.question.options[index] = "*" + this.question.options[index];
        }
        
      });
    },
    submit() {
      this.addAsterisk();
      this.$http.post("data.json", this.question).then(
        (response) => {
			this.success = 1;
          console.log(response);
        },
        (error) => {
			this.success = -1;
          console.log(error);
        }
      );
    },
    previewData() {
      this.preview = true;
    },
    hidePreviewData() {
      this.preview = false;
    }
  },
};
</script>

<style lang="scss">
.main-content {
  .form-with-preview {
    width: 90%;

    .previewed {
      width: 50%;
    }

    .form-container {
      padding-right: 15px;
      border-right: 1px solid #ccc;
    }

    .preview-container {
      padding-left: 15px;
      .question-content {
        width: 100%;
      }
    }
  }
}

.form {
  padding-top: 0;
  
  .flex {
    align-items: flex-start;
  }
}


.form-message {
	width: 100%;
	margin: 25px auto;

	.form-success, .form-error {
		padding: 10px;
		color: #fff;
		font-size: 18px;
		font-weight: bold;
	}

	.form-success {
		background-color: #36b712;
	}

	.form-error {
		background-color: #ac1a2f;
	}

}

.form {
  width: 40%;
  margin: 0 auto;

  .form-group {
    margin: 20px 0;

    label {
      width: 100%;
      display: block;
      margin-bottom: 10px;
      font-weight: bold;
    }

    input,
    select {
      width: 100%;
      display: block;
      padding: 8px 15px;
      border-radius: 15px;
    }

    input[type=checkbox] {
      width: auto;
    }
 
    .radio-group {
      input {
        width: auto;
        display: inline-block;
      }
    }
  }
}

.btn-fsred {
  background-color: #c41230;
  color: white;
}
.btn-fsred:hover {
  color: white;
  opacity: 0.8;
}
@import url(https://fonts.googleapis.com/css?family=Roboto:400,300,600,400italic);

.contain {
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 1em;
}
@media (min-width: 600px) {
  .contain {
    padding: 0;
  }
}

h3,
ul {
  margin: 0;
}

h3 {
  margin-bottom: 1rem;
}
h3 {
  display: block;
  font-size: 30px;
  font-weight: 300;
}
input:focus,
textarea:focus,
select:focus {
  outline: 3px solid gold;
}

input,
textarea,
button,
select:focus {
  width: 100%;
  border: 1px solid #000;
}

.wrapper > * {
  padding: 1em;
}
@media (min-width: 700px) {
  .wrapper > * {
    padding: 2em 2em;
  }
}

.form {
  background: #fff;
}

form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}
form label {
  display: block;
}
form p {
  margin: 0;
}

.full-width {
  grid-column: 1 / 3;
}

button,
input,
select,
textarea {
  padding: 1em;
}

button {
  background: lightgrey;
  width: 100%;
  border: 0;
}
input,
textarea,
select {
  width: 100%;
  border: 1px solid #ccc;
  background: #fff;
  margin: 0 0 5px;
  padding: 10px;
}

input:hover,
textarea:hover,
select:hover {
  -webkit-transition: border-color 0.3s ease-in-out;
  -moz-transition: border-color 0.3s ease-in-out;
  transition: border-color 0.3s ease-in-out;
  border: 1px solid #aaa;
}

.question-area {
  height: 100px;
  max-width: 100%;
  resize: vertical;
}
.rightwrong-area {
  height: 60px;
  max-width: 100%;
  resize: vertical;
}


input:focus,
textarea:focus,
select:focus {
  outline: 0;
  border: 1px solid #aaa;
}
#contact label {
  text-align: left;
}
</style>