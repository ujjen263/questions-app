<template>
	<div class="main-content">
		<section>
			<div class="container">
				<div class="section-title">
					<h2>View Questions</h2>
				</div>

				<div class="section-body">
					<div class="search-content">
						<div class="search-bar" :class="{invalid: $v.searchText.$error}"> 
							<input type="text" name="searchText" id="searchText" v-model="searchText" placeholder="Enter the title or question type of the question to search" @blur="$v.searchText.$touch()">
							<button @click="search" :disabled="$v.$invalid">Search</button>
							<button @click="clearSearch">Clear Search</button>
						</div>
					</div>

					<div class="questions-list" v-if="searchDiv == 0">
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

					<div class="questions-list" v-else>
						<p v-if="noRes == 1" class="error-message">Sorry, not result foun for {{searchText}}</p>
						
						<table v-else>
							<tr>
								<th>Title</th>
								<th>Option Type</th>
							</tr>
							<tr v-for="(q, index) in searchResults" :key="index" class="question-content">
								<td><a :href="'/make-quiz/update-question/'+ q.id">{{q.title}}</a></td>
								<td>{{capitalize(q.optionType)}}</td>
							</tr>
						</table>
					</div>

					<nav aria-label="Page navigation" v-if="(paginationShow == 1) && (pages.length > 1)">
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
	import { mapActions } from 'vuex';
	import { required } from 'vuelidate/lib/validators'

	export default {
		data() {
			return {
				posts: [''],
				page: 1,
				perPage: 5,
				pages: [],
				activeClass: 'active',
				searchDiv: 0,
				searchText: '',
				searchRes: [''],
				noRes: 1,
				paginationShow: 1
			}
		},
		computed: {
			questions() {
				var  p = this.getPosts();
				this.setPages(p);
				return this.paginate(p);
			},
			searchResults() {
				var p = this.getSearchResults();
				this.setPages(p);
				return this.paginate(p);
			}
		},
		methods: {
			...mapActions({
				fetchData: 'loadData'
			}),
			getPosts() {
				this.posts = this.$store.getters.questions[0];
				return this.posts;
			},
			setPages(p) {
				this.pages = [];
				var count = 0;
				for (var x in p) {
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
					return sliced;
				} else {
					return posts;
				}	
			},
			capitalize(string) {
				return string.charAt(0).toUpperCase() + string.slice(1);
			},
			search() {
				this.searchDiv = 1;
				this.noRes = 1;
				this.paginationShow = 0;
				this.setSearchResults();
			},
			setSearchResults() {
				this.searchRes = [''];
				
				var j = 0;
				var title;
				var type;

				for (var x in this.posts) {
					title = this.posts[x].title.toLowerCase();
					type = this.posts[x].optionType.toLowerCase();
					if( (title.search(this.searchText.toLowerCase()) != -1) || (type == this.searchText.toLowerCase()) )  {
						this.searchRes[j] = this.posts[x];
						j++;
						this.noRes = 0;
						this.paginationShow = 1;
					}
				}
			},
			getSearchResults() {
				return this.searchRes;
			},
			clearSearch() {
				this.searchDiv = 0;
				this.noRes = 1;
				this.paginationShow = 1;
			}
		},
		validations: {
			searchText: {
				required
			}
		},
		created() {
			this.fetchData();
			this.$store.dispatch('initQuestions');
		}
	}
</script>

<style scoped lang="scss">
	.invalid input {
		border: 1px solid red;
		background-color: #ffc9aa;
	}

	.section-body {
		width: 50%;
		margin: 60px auto;

		.search-content {
			margin-bottom: 80px;
		}

		.questions-list {
			.error-message {
				font-size: 18px;
				color: #ac1a2f;
			}

			table {
				border-collapse: collapse;
				width: 100%;
			}

			th, td {
				padding: 15px;
				text-align: left;
				border-bottom: 1px solid #ddd;

				a {
					&:hover {
						opacity: 1;
						color: #ac1a2f;
					}
				}
			}

			tr:hover {background-color:#f5f5f5;}
		}
	}

	.pagination {
		display: inline-block;
		margin-top: 40px;

		li {
			display: inline-block;

			a {
				color: black;
				float: left;
				padding: 8px 16px;
				text-decoration: none;
				transition: background-color .3s;
				border: 1px solid #ddd;
				margin: 0;
				cursor: pointer;

				&:hover {
					opacity: 1;
					color: #ac1a2f;
				}
			}
		}
	}


	.pagination a.active {
		background-color: #002C76;
		color: white;
		border: 1px solid #4CAF50;
	}

	.pagination a:hover:not(.active) {background-color: #ddd;}
</style>