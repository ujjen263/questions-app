<template>
	<div>
		<div v-for="(q, index) in questions[0]" :key="index" class="question-content">
			<div v-if="(q.done == 0) && (q.locked == 0) && (q.show == 1)">
				<h3>{{q.title}}</h3>
				<p v-html="q.text"></p>

				<div v-if="q.optionType == 'checkbox'">
					<p v-for="(opt, index) in q.options" :key="index">
						<label for="opt">
							<input type="checkbox" name="opt" value="opt">
							{{opt}}
						</label>
					</p>
				</div>

				<div v-if="q.optionType == 'radio'">
					<p v-for="(opt, index) in q.options" :key="index">
						<label for="opt">
							<input type="radio" name="choice" value="opt">
							{{opt}}
						</label>
					</p>
				</div>

				<div v-if="q.optionType == 'cloze'">
					<p v-for="(opt, index) in q.options" :key="index">
						{{opt}}
					</p>
				</div>

				<div class="two-col-btn">
					<button class="btn" @click="onAnswer(1, q.whyRight, index)">Ok</button>
					<button class="btn" v-if="q.skip == 'true'" @click="onSkip(index)">Skip</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { eventBus } from '../../main.js';
	import {mapActions} from 'vuex';

	export default {
		computed: {
			questions() {
				return this.$store.getters.questions;
			}
		},
		methods: {
			...mapActions({
				fetchData: 'loadData'
			}),
            onAnswer(isCorrect, msg, index) {
				eventBus.$emit('answerText', msg);
                this.$emit('answered', isCorrect, msg, index);
            },
            onSkip(index) {
                this.$emit('skipped', index);
            }
		},
		created() {
			this.fetchData();
			this.$store.dispatch('initQuestions');
		}
	}
</script>

<style lang="scss">
	.question-content {
		width: 40%;
		margin: 0 auto;

		.two-col-btn {
			padding: 30px 0;
		}
	}

	input[type=checkbox] {
		width: auto;
	}
</style>