<template>
	<div class="main-content">
		<section>
			<div class="container">	
				<div class="section-title">
					<h2>How to use this application?</h2>
				</div>

				<div class="section-body">
					<p>Please follow the guidelines below on how to use this application</p>

					<ul>						
						<li class="guidelines">
							<h3 class="accordion">How to add a question?</h3>
							<ol class="panel">
								<li>Go to Question Maker page as seen in the header.</li>
								<li>Click on Add Questions button.</li>
								<li>Populate the input fields with suitable data.</li>
								<li>To add options for the question, click on addAnswer button located above the Send button.</li>
								<li>To select the correct answer among the options, check the checkbox for the option that is correct.</li>
								<li>Finally, click on Send button at the bottom of the form to add the question to the question set.</li>
							</ol>
						</li>
						
						<li class="guidelines">
							<h3 class="accordion">How to view a question?</h3>
							<ol class="panel">
								<li>Go to Question Maker page as seen in the header.</li>
								<li>Click on Add Questions button.</li>
								<li>Populate the input fields with suitable data.</li>
								<li>To add options for the question, click on addAnswer button located above the Send button.</li>
								<li>To select the correct answer among the options, check the checkbox for the option that is correct.</li>
								<li>Finally, click on Send button at the bottom of the form to add the question to the question set.</li>
							</ol>
						</li>
						
						<li class="guidelines">
							<h3 class="accordion">How to update a question?</h3>
							<ol class="panel">
								<li>Go to Question Maker page as seen in the header.</li>
								<li>Click on Add Questions button.</li>
								<li>Populate the input fields with suitable data.</li>
								<li>To add options for the question, click on addAnswer button located above the Send button.</li>
								<li>To select the correct answer among the options, check the checkbox for the option that is correct.</li>
								<li>Finally, click on Send button at the bottom of the form to add the question to the question set.</li>
							</ol>
						</li>
						
						<li class="guidelines">
							<h3 class="accordion">How to delete a question?</h3>
							<ol class="panel">
								<li>Go to Question Maker page as seen in the header.</li>
								<li>Click on Add Questions button.</li>
								<li>Populate the input fields with suitable data.</li>
								<li>To add options for the question, click on addAnswer button located above the Send button.</li>
								<li>To select the correct answer among the options, check the checkbox for the option that is correct.</li>
								<li>Finally, click on Send button at the bottom of the form to add the question to the question set.</li>
							</ol>
						</li>
					</ul>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	window.onload = function() {
		var acc = document.getElementsByClassName("accordion");
		var i;

		for (i = 0; i < acc.length; i++) {
			acc[i].addEventListener("click", function() {
				this.classList.toggle("active");
				var panel = this.nextElementSibling;
				if (panel.style.maxHeight) {
					panel.style.maxHeight = null;
				} else {
					panel.style.maxHeight = panel.scrollHeight + "px";
				}
			});
		}
	};
</script>

<style scoped lang="scss">

	.small-container {
		padding: 0 20px;
		width: 900px;
		margin: 0 auto;
		text-align: center;
	}

	.two-col-img {
		margin: 50px 0;

		.content {
			width: 50%;
			padding: 0 30px;

			img {
				width: 100%;
				
			}

			p {
				font-size: 20px;
				line-height: 1.6;
			}
		}
	}

	.testimonial {
		align-items: flex-start;

		.member {
			padding: 0 20px;
			width: 33.33%;

			.email {
				font-size: 14px;
			}

			img {
				width: 200px;
				height: 200px;
				border-radius: 50%;
			}

			a {
				word-break: break-all;
			}
		}
	}

	ul {
		.guidelines {
			margin-bottom: 20px;

			h3 {
				font-size: 18px;
				font-weight: medium;
				margin-bottom: 0;
			}

			.panel {
				text-align: left;
				padding: 0 40px;
				padding-top: 10px;
				list-style-position: inside;
				background-color: white;
				max-height: 0;
				overflow: hidden;
				transition: max-height 0.2s ease-out;
			}
		}
	}

	.accordion {
		background-color: #eee;
		color: #444;
		cursor: pointer;
		padding: 18px;
		width: 100%;
		border: none;
		text-align: left;
		outline: none;
		font-size: 15px;
		transition: 0.4s;

		&:after {
			content: '\02795'; /* Unicode character for "plus" sign (+) */
			font-size: 13px;
			color: #777;
			float: right;
			margin-left: 5px;
		}
	}


	.active:after {
		content: "\2796"; /* Unicode character for "minus" sign (-) */
	}

	.active, .accordion:hover {
		background-color: #ccc; 
	}
</style>
