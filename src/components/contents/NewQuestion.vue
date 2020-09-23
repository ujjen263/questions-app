<template>
  <div class="main-content">
    <section>
      <div class="contain">
        <div class="wrapper">
          <div id="contact" class="form">
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
                  :tags="tags"
                  @tags-changed="newTags => tags = newTags"
                />
              </div>
              <template v-for="(data,index) in question.options">
                <div :key="index">
                  <label :for="data">
                    <input style="display: inline-block; width: auto" type="checkbox" />
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import VueTagsInput from "@johmun/vue-tags-input";

export default {
  components: {
    VueTagsInput,
  },
  data() {
    return {
      tag: "",
      tags: [],
      question: {
        title: "",
        skip: "",
        text: "",
        numTries: "",
        whyRight: "",
        whyWrong: "",
        optionType: "",
        options: [],
      },
    };
  },
  methods: {
    addAnswer() {
      this.question.options.push("DefaultText");
    },
    removeAnswer(index) {
      this.question.options.splice(index, index);
    },
    submit() {
      this.$http.post("data.json", this.question).then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
};
</script>

<style lang="scss">
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

button {
  cursor: pointer;
  width: 100%;
  border: none;
  background: #002c76;
  color: #fff;
  margin: 0 0 5px;
  padding: 10px;
  font-size: 15px;
}
button:hover {
  background: #012869;
  -webkit-transition: background 0.3s ease-in-out;
  -moz-transition: background 0.3s ease-in-out;
  transition: background-color 0.3s ease-in-out;
}

button:active {
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
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