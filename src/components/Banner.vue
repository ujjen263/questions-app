<template>
	<div class="banner">
		<div class="banner-img"></div>
		<div class="banner-overlay"></div>
		<div class="banner-content">
			<div class="container">
				<h1>Quiz Application</h1>
				<p>Create or Take the quiz</p>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.banner {
	height: 500px;
	position: relative;
	margin-top: 70px;

	.banner-img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url('../assets/banner.png');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center center;
		z-index: 1;
	}

	.banner-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 3;
		background-color: rgba(0,0,0,0.4);
	}

	.banner-content {
		position: relative;
		display: flex;
		align-items: center;
		z-index: 5;
		height: 100%;

		h1 {
			text-align: left;
			color: rgb(255,255,255);
			font-size: 45px;
		}

		p {
			text-align: left;
			color: rgb(255,255,255);
			font-size: 20px;
		}
	}
}
</style>
