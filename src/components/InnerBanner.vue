<template>
	<div class="inner-banner">
		<div class="banner-img"></div>
		<div class="banner-overlay"></div>
	</div>
</template>

<style scoped lang="scss">
.inner-banner {
	height: 250px;
	position: relative;
	margin-top: 75px;

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
			color: rgb(255,255,255);
			font-size: 40px;
		}
	}
}
</style>
