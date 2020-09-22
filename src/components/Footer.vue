<template>
	<footer>
		<div class="container">
			<div class="footer-top flex">
				<div class="logo">
					<a href="/"><img alt="Vue logo" src="../assets/scaleLogo.png" title="SCALE"></a>
					<p>SCALE</p>
				</div>
				<div class="navigation">
					<h4>Navigation</h4>
					<ul>
						<router-link to="/" tag="li"><a>Home</a></router-link>
						<router-link to="/about-us" tag="li"><a>About Us</a></router-link>
						<router-link to="/take-quiz" tag="li"><a>Take the Quiz</a></router-link>
						<router-link to="/make-quiz" tag="li"><a>Question Maker</a></router-link>
					</ul>
				</div>
				<div class="navigation">
					<h4>Useful link</h4>
					<ul>
						<li><a href="https://scale.fresnostate.edu/scale/" target="_blank">CSU SCALE</a></li>
						<li><a href="http://fresnostate.edu/" target="_blank">CSU Fresno Homepage</a></li>
						<li><a href="https://www.viseyes.org/scale/edit.htm" target="_blank">Official SCALE Editor</a></li>
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
				<p>&copy; 2020 OR2STEM</p>
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

			.logo {
				p {
					color: #fff;
					font-size: 35px;
					font-weight: bold;
					letter-spacing: 5px;
					margin: 0 0 20px 0;
				}
			}

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
					line-height: 1.5;
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
			}
		}
	}
</style>
