<template>
	<div class="main-content">
		<section>
			<div class="container">
				<div class="section-title">
					<h2>Quiz</h2>
				</div>

				<div class="section-body">
					<transition name="flip" mode="out-in">
						<component :is="mode" @answered="answered" @skipped="skipped" @confirmed="mode = 'app-question'" :msg="answerMsg"></component>
					</transition>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import Question from './contents/Question.vue';
	import Answer from './contents/Answer.vue';

	export default {
		data() {
			return {
				mode: 'app-question',
				answerMsg: ''
			};
		},
        methods: {
			answered(isCorrect, msg, index) {
				if (isCorrect) {					
					var q_data = this.$store.getters.questions;
					var q_index;
					var val, new_q_data;
					var x;
					var changeNext = false;

					for (q_index in q_data[0]) {
						if(q_index == index) {
							new_q_data = q_data[0];
							val = new_q_data[q_index];
							for(x in val) {
								if(x == "done") {
									val[x] = 1;
								}
								if(x == "show") {
									val[x] = 0;
								}

								changeNext = true;
							}
						} else if(changeNext == true) {
							new_q_data = q_data[0];
							val = new_q_data[q_index];
							for(x in val) {
								if(x == "show") {
									val[x] = 1;
								}
								if(x == "locked") {
									val[x] = 0;
								}
							}
							changeNext = false;
						}
					}

					//console.log(q_data[0]);

					this.$http.put('data.json',q_data[0]);
					this.mode = 'app-answer';
					this.answerMsg = msg;
				} else {
					this.mode = 'app-question';
					alert('Wrong, try again!');
				}
			},
			skipped(index) {
				var q_data = this.$store.getters.questions;
				var q_index;
				var val;
				var x;
				var changeNext = false;

				for (q_index in q_data) {
					if(q_index == index) {
						val = q_data[q_index];
						for(x in val) {
							if(x == "show") {
								val[x] = 0;
							}

							changeNext = true;
						}
					} else if(changeNext == true) {
						val = q_data[q_index];
						for(x in val) {
							if(x == "show") {
								val[x] = 1;
							}
						}
						changeNext = false;
					}
				}

				this.$http.put('data.json',q_data);
				this.mode = 'app-question';
			}
        },
		components: {
			appQuestion: Question,
			appAnswer: Answer
		}
	}
</script>

<style>
	.flip-enter {
		/*transform: rotateY(0deg);*/
	}

	.flip-enter-active {
		animation: flip-in 0.5s ease-out forwards;
	}

	.flip-leave {
		animation: flip-out 0.5s ease-out forwards;
	}

	.flip-leave-active {
		/*transform: rotateY(0deg);*/
	}

	@keyframes flip-out {
		from {
			transform: rotateY(0deg);
		}

		to {
			transform: rotateY(90deg);
		}
	}

	@keyframes flip-in {
		from {
			transform: rotateY(90deg);
		}

		to {
			transform: rotateY(0deg);
		}
	}
</style>