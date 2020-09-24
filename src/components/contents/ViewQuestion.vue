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
								<th>Title</th>
								<th>Option Type</th>
							</tr>
							<tr v-for="(q, index) in questions" :key="index" class="question-content">
								<td><a :href="'/make-quiz/update-question/'+ q.id">{{q.title}}</a></td>
								<td>{{capitalize(q.optionType)}}</td>
							</tr>
						</table>
					</div>

					<nav aria-label="Page navigation">
						<ul class="pagination">
							<li class="page-item">
								<a type="button" v-if="page != 1" @click="page--"> Previous </a>
							</li>
							<li class="page-item">
								<a type="button" v-for="(pageNumber,index) in pages" :key="index" @click="page = pageNumber" :class="(page == pageNumber) ? activeClass : ''"> {{pageNumber}} </a>
							</li>
							<li class="page-item">
								<a type="button" @click="page++" v-if="page < pages.length"> Next </a>
							</li>
						</ul>
					</nav>
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
				posts: [''],
				page: 1,
				perPage: 5,
				pages: [],
				activeClass: 'active'
			}
		},
		computed: {
			questions() {
				this.getPosts();
				this.setPages();
				console.log(this.paginate(this.posts));
				return this.paginate(this.posts);
			}
		},
		methods: {
			...mapActions({
				fetchData: 'loadData'
			}),
			getPosts() {
				this.posts = this.$store.getters.questions[0];
			},
			setPages() {
				this.pages = [];
				var count = 0;
				for (var x in this.posts) {
					count += 1;
				}
				console.log(x);
				
				let numberOfPages = Math.ceil(count / this.perPage);
				for (let index = 1; index <= numberOfPages; index++) {
					this.pages.push(index);
				}
			},
			paginate(posts) {
				let page = this.page;
				let perPage = this.perPage;
				let from = (page * perPage) - perPage;
				let to = (page * perPage)
				if ( posts != undefined ) {
					var sliced = [];
					var i= 0;
					var j = 0;
					for (var x in posts) {
						if((i >= from) && (i < to)) {
							sliced[j] = posts[x];
							sliced[j]['id'] = x;
							j++;
						}
						i++;
					}
					console.log(sliced);
					return sliced;
				} else {
					return posts;
				}	
			},
			capitalize(string) {
				return string.charAt(0).toUpperCase() + string.slice(1);
			}
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
			width: 40%;
			margin: 0 auto;

			table {
				border-collapse: collapse;
				width: 100%;
			}

			th, td {
				padding: 15px;
				text-align: left;
				border-bottom: 1px solid #ddd;
			}

			tr:hover {background-color:#f5f5f5;}
		}
	}

	.pagination {
		display: inline-block;
		margin-top: 40px;

		li {
			display: inline-block;
		}
	}

	.pagination a {
		color: black;
		float: left;
		padding: 8px 16px;
		text-decoration: none;
		transition: background-color .3s;
		border: 1px solid #ddd;
		margin: 0;
		cursor: pointer;
	}

	.pagination a.active {
		background-color: #002C76;
		color: white;
		border: 1px solid #4CAF50;
	}

	.pagination a:hover:not(.active) {background-color: #ddd;}
</style>