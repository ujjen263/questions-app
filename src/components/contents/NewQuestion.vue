<template>
	<div class="main-content">
		<section>
			<div class="container">
				<div class="section-title">
					<h2>Add new Question</h2>
				</div>

				<div class="section-body">
					<div class="form">
						<div class="form-group">
							<label for="title">Title:</label>
							<input type="text" class="form-control" id="title" v-model.lazy="question.title">
						</div>
						<div class="form-group">
							<label for="text">Text:</label>
							<input type="text" class="form-control" id="text" v-model.lazy="question.text">
						</div>
						<div class="form-group">
							<label for="skip">Skip:</label>
							<input type="text" class="form-control" id="skip" v-model.lazy="question.skip">
						</div>
						<div class="form-group">
							<label for="optionType">Select Question Type:</label>
							<select name="optionType" id="optionType" v-model="question.optionType">
								<option value="radio">Radio</option>
								<option value="checkbox">CheckBox</option>
								<option value="cloze">Cloze</option>
								<option value="match">Match</option>
							</select>
						</div>
						<div class="form-group">
							<label for="numTries">Number of Tries:</label>
							<input type="text" class="form-control" id="numTries" min="0" v-model.lazy="question.numTries">
						</div>
						<div class="form-group">
							<label for="locked">Locked:</label>
							<input type="number" class="form-control" id="locked" min="0" max="1" v-model.lazy="question.locked">
						</div>
						<div class="form-group">
							<label for="options">Options:</label>
							<input type="text" class="form-control" id="options" v-model.lazy="question.options">
						</div>
						<button class="btn btn-success" @click="submit">Add Question</button>
					</div>

					<div class="form-message" v-if="success != 0">
						<p v-if="success == 1" class="form-success">Question successfully added</p>
						<p v-if="success == -1" class="form-error">Error occured while adding</p>

						<a href="/make-quiz/view-question" class="btn opacity-hover">View questions</a>
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
				question: {
					title: '',
					text: '',
					skip: '',
					locked: '',
					show: 0,
					done: 0,
					numTries: '',
					optionType: ''
				},
				success: 0
			};
		},
		methods: {
			submit() {
				this.$http.post('data.json', this.question)
				.then(response => {
					this.success = 1;
					console.log(response);
				}, error => {
					this.success = -1;
					console.log(error);
				});
			}
		}
	}
</script>

<style lang="scss">
	.form-message {
		width: 40%;
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

			input, select {
				width: 100%;
				display: block;
				padding: 8px 15px;
				border-radius: 15px;
			}

			select {
				cursor: pointer;
				border-width: 2px;
				border-style: inset;
				border-color: -internal-light-dark(rgb(118, 118, 118), rgb(195, 195, 195));
			}

			.radio-group {
				input {
					width: auto;
					display: inline-block;
				}
			}
		}
	}
</style>