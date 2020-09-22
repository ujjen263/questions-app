<template>
	<div class="main-content">
		<section>
			<div class="container">
				<div class="section-title">
					<h2>View Questions</h2>
				</div>

				<div class="section-body">
					<div class="questions-list">
						<table>
							<tr>
								<th>SNO.</th>
								<th>Title</th>
							</tr>
							<tr v-for="(q, index) in questions[0]" :key="index" class="question-content">
								<td>1</td>
								<td><a :href="'/make-quiz/update-question/'+ index">{{q.title}}</a></td>
							</tr>
						</table>
					</div>
					<div class="pagination">
						<a href="#">&laquo;</a>
						<a href="#">1</a>
						<a href="#" class="active">2</a>
						<a href="#">3</a>
						<a href="#">4</a>
						<a href="#">5</a>
						<a href="#">6</a>
						<a href="#">&raquo;</a>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import {mapActions} from 'vuex';

	export default {
		data() {
			return {
				posts: [],
				page: 1,
				perPage: 5,
				pages: []
			}
		},
		computed: {
			questions() {
				return this.paginate(this.posts);
			}
		},
		methods: {
			...mapActions({
				fetchData: 'loadData'
			}),
			getPosts() {   
				this.posts = this.$store.getters.questions;
			},
			setPages() {
				var x;
				var count = 0;
				for (x in this.posts[0]) {
					count += 1;
				}
				console.log(x);
				
				let numberOfPages = Math.ceil(count / this.perPage);
				for (let index = 1; index <= numberOfPages; index++) {
					this.pages.push(index);
				}
			},
			paginate (posts) {
				let page = this.page;
				let perPage = this.perPage;
				let from = (page * perPage) - perPage;
				let to = (page * perPage);
				return  posts.slice(from, to);
			}
		},
		watch: {
			posts () {
				this.setPages();
			}
		},
		created() {
			this.fetchData();
			this.$store.dispatch('initQuestions');
			this.getPosts();
		},
		updated() {
			this.posts = this.$store.getters.questions;
			this.setPages();
		}
	}
</script>

<style scoped lang="scss">
	.section-body {
		.questions-list {
			width: 40%;
			margin: 0 auto;

			table {
				border-collapse: collapse;
				width: 100%;
			}

			th, td {
				padding: 8px;
				text-align: left;
				border-bottom: 1px solid #ddd;
			}

			tr:hover {background-color:#f5f5f5;}
		}
	}

	.pagination {
		display: inline-block;
		margin-top: 40px;
	}

	.pagination a {
		color: black;
		float: left;
		padding: 8px 16px;
		text-decoration: none;
		transition: background-color .3s;
		border: 1px solid #ddd;
		margin: 0;
	}

	.pagination a.active {
		background-color: #002C76;
		color: white;
		border: 1px solid #4CAF50;
	}

	.pagination a:hover:not(.active) {background-color: #ddd;}
</style>