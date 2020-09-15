<template>
	<div class="main-content">
		<section>
			<div class="container">
				<div class="section-title">
					<h2>Update a Question</h2>
				</div>

				<div class="section-body">
					<div class="form">
						<div class="form-group">
							<label for="title">Title:</label>
							<input type="text" class="form-control" id="title" value="question.title" v-model.lazy="question.title">
						</div>
						<div class="form-group">
							<label for="text">Text:</label>
							<input type="text" class="form-control" id="text" value="question.text" v-model.lazy="question.text">
						</div>
						<div class="form-group">
							<label for="skip">Skip:</label>
							<input type="text" class="form-control" id="skip" value="question.skip" v-model.lazy="question.skip">
						</div>
						<div class="form-group">
							<label for="optionType">Select Question Type:</label>
							<select name="optionType" id="optionType" v-model="question.optionType">
								<option value="radio" selected="(question.optionType == 'radio') ? selected : ''">Radio</option>
								<option value="checkbox" selected="(question.optionType == 'checkbox') ? selected : ''">CheckBox</option>
								<option value="cloze" selected="(question.optionType == 'cloze') ? selected : ''">Cloze</option>
								<option value="match" selected="(question.optionType == 'match') ? selected : ''">Match</option>
							</select>
						</div>
						<div class="form-group">
							<label for="numTries">Number of Tries:</label>
							<input type="text" class="form-control" id="numTries" min="0" value="question.numTries" v-model.lazy="question.numTries">
						</div>
						<div class="form-group">
							<label for="locked">Locked:</label>
							<input type="number" class="form-control" id="locked" min="0" max="1" value="question.locked" v-model.lazy="question.locked">
						</div>
						<div class="form-group">
							<label for="options">Options:</label>
							<input type="text" class="form-control" id="options" value="question.options" v-model.lazy="question.options" multiple>
						</div>
						<div class="two-col-btn">
							<button class="btn opacity-hover" @click="updateData">Update Question</button>
							<button class="btn opacity-hover" @click="deleteData">Delete Question</button>
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
				question: []
			};
		},
        methods: {
			updateData() {
				this.$http.put('data/'+ this.id +'.json', this.question)
				.then(response => {
					console.log(response);
				}, error => {
					console.log(error);
				});
			},
			deleteData() {				
				this.$http.delete('data/'+ this.id +'.json')
				.then(response => {
					return response.json();
				});

			},
		},
		created() {
			this.$http.get('data/'+ this.id +'.json')
			.then(response => {
				return response.json();
			})
			.then(data => {
				this.question = data
				console.log(data);
			});
		}
	}
</script>