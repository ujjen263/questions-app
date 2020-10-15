<template>
	<div class="main-content">
		<section>
			<div class="container">
				<div class="section-title">
					<h2>Make Quiz</h2>
				</div>

				<div class="section-body">
					<div class="flex">
						<div class="inner-section">
							<p>If you are not sure how to start, please follow the instructions given in the link below</p>
							<a href="/how-to-use" class="btn opacity-hover">How to Use</a>
						</div>

						<div class="inner-section">
							<p>Add new questions, update an existing one or delete a question</p>
							<div class="two-col-btn">
								<a href="/make-quiz/new-question" class="btn opacity-hover">Add questions</a>
								<a href="/make-quiz/view-question" class="btn opacity-hover">View questions</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	
</script>

<style lang="scss">
	.section-body {
		.flex {
			align-items: flex-start;
			margin-right: -30px;
			margin-left: -30px;

			.inner-section {
				width: 50%;
				padding: 30px;

				&:first-child {
					border-right: 1px solid;
				}
			}
		}
	}
</style>