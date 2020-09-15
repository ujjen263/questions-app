<template>
	<div class="main-content">
		<section>
			<div class="container">
				<div class="section-title">
					<h2>View Questions</h2>
				</div>

				<div class="section-body">
					<p>Click on the questions to view its details</p>
					<div class="flex questions-list">
						<div v-for="(q, index) in questions[0]" :key="index" class="question-content">
							<h3><a :href="'/make-quiz/update-question/'+ index">{{q.title}}</a></h3>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import {mapActions} from 'vuex';

	export default {
		computed: {
			questions() {
				console.log(this.$store.getters.questions);
				return this.$store.getters.questions;
			}
		},
		methods: {
			...mapActions({
				fetchData: 'loadData'
			})
		},
		created() {
			this.fetchData();
			this.$store.dispatch('initQuestions');
		}
	}
</script>

<style scoped lang="scss">
	.section-body {
		.questions-list {
			flex-wrap: wrap;
			align-items: flex-start;

			.question-content {
				width: 24.5%;
				display: inline-block;

				h3 {
					margin: 20px;

				}
			}
		}
	}
</style>