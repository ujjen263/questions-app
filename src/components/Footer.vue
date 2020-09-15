<template>
	<footer>
		<div class="container">
			<div class="footer-top flex">
				<div class="logo">
					<a href="/"><img alt="Vue logo" src="../assets/scaleLogo.png"></a>
				</div>
				<div class="navigation">
					<h4>Navigation</h4>
					<ul>
						<router-link to="/" tag="li"><a>Home</a></router-link>
						<router-link to="/about-us" tag="li"><a>About Us</a></router-link>
						<router-link to="/take-quiz" tag="li"><a>Take the Quiz</a></router-link>
						<router-link to="/make-quiz" tag="li"><a>Make a Quiz</a></router-link>
					</ul>
				</div>
				<div class="contact">
					<h4>Contact Us</h4>
					<p>
						5241 N. Maple Ave.<br/>
						Fresno,CA 93740<br/>
						P 559.278.4240<br/>
					</p>
				</div>
			</div>

			<div class="footer-bottom">
				<p>Scale Website | &copy; Copyright 2020</p>
			</div>
		</div>
	</footer>
</template>

<style scoped lang="scss">
	footer {
		border-top: 1px solid #000;
		background-color: #3a69c1;
		padding: 50px 0 0px 0;

		.footer-top {
			padding: 30px 0;
			align-items: flex-start;

			h4 {
				color: #fff;
			}

			.navigation {
				ul {
					padding-left: 0;

					li {
						font-size: 16px;
						font-weight: medium;
						padding: 5px;

						a {
							color: #fff;
						}
					}
				}
			}

			.contact {
				p {
					color: #fff;
				}
			}
		}

		.footer-bottom {
			border-top: 1px solid #000;
			padding: 10px 0;

			p {
				text-align: left;
				color: #fff;
				font-size: 14px;
				line-height: 1.5;
			}
		}
	}
</style>
