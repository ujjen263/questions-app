<template>
	<header>
		<nav class="container flex">
			<div class="site-logo">
				<a href="/"><img alt="Vue logo" src="../assets/scaleLogo.png"></a>
			</div>

			<div class="naviagation">
				<ul>
					<router-link to="/" tag="li"><a>Home</a></router-link>
					<router-link to="/about-us" tag="li"><a>About Us</a></router-link>
					<router-link to="/take-quiz" tag="li"><a>Take the Quiz</a></router-link>
					<router-link to="/make-quiz" tag="li"><a>Question Maker</a></router-link>
				</ul>
			</div>
		</nav>
	</header>
</template>

<style scoped lang="scss">
	header {
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 999;
		background-color: rgb(255,255,255);
		border-bottom: 1px solid rgba(0,0,0,0.4);


		nav {
			text-align: left;

			.site-logo {
				width: 20%;
				padding-right: 20px;

				a {
					display: inline-block;
				}
				
				img {
					max-width: 70px;
				}
			}

			.naviagation {
				width: 80%;
				padding-left: 20px;

				ul {
					justify-content: flex-start;
					margin: 0;

					li {
						display: inline-block;
						padding: 20px;

						a {
							display: inline-block;
							color: #000;
							font-size: 18px;
							font-weight: bold;
						}
					}
				}
			}
		}
	}
</style>
