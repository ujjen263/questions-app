<template>
	<div class="main-content">
		<section>
			<div class="container">	
				<div class="section-title">
					<h2>About Us</h2>
				</div>

				<div class="section-body">
					<div class="two-col-img flex">
						<div class="content">
							<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2FxZxE5jt.jpg&f=1&nofb=1">
						</div>
						<div class="content">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget lobortis dui. Cras odio metus, ornare sit amet sapien ac, dictum pulvinar risus. Cras elementum ligula vehicula ipsum eleifend, sed ornare ex porta. Nam elementum, turpis nec volutpat varius, urna augue sagittis nisl, sed ultrices neque justo cursus mauris.</p>
						</div>
					</div>

					<div class="two-col-img flex">
						<div class="content">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget lobortis dui. Cras odio metus, ornare sit amet sapien ac, dictum pulvinar risus. Cras elementum ligula vehicula ipsum eleifend, sed ornare ex porta. Nam elementum, turpis nec volutpat varius, urna augue sagittis nisl, sed ultrices neque justo cursus mauris.</p>
						</div>
						<div class="content">
							<img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.fresnostate.edu%2Fadminserv%2Ffacilitiesmanagement%2Fimages%2Fscience2%2F7.jpg&f=1&nofb=1">
						</div>
					</div>

					<div class="two-col-img flex">
						<div class="content">
							<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.tfJiqLNQ55hTVu-2mf6fkgHaE8%26pid%3DApi&f=1">
						</div>
						<div class="content">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget lobortis dui. Cras odio metus, ornare sit amet sapien ac, dictum pulvinar risus. Cras elementum ligula vehicula ipsum eleifend, sed ornare ex porta. Nam elementum, turpis nec volutpat varius, urna augue sagittis nisl, sed ultrices neque justo cursus mauris.</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section>
			<div class="small-container">	
				<div class="section-title">
					<h2>Our Team</h2>
				</div>

				<div class="section-body">
					<div class="testimonial flex">
						<div class="member">
							<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.gakJQECoggWBOq_Zz4ysPwAAAA%26pid%3DApi&f=1" alt="Member Image" title="Ujjen Baniya">
							<div class="about-member">
								<p>Ujjen Baniya</p>
								<p>Project Member</p>
								<a href="mailto:ujjen263@mail.fresnostate.edu">ujjen263@mail.fresnostate.edu</a>
							</div>
						</div>
						<div class="member">
							<img src="http://www.fresnostate.edu/csm/csci/images/facstaff/hubert_cecotti.jpg" alt="Member Image" title="Dr.Huber Cecotti">
							<div class="about-member">
								<p>Dr.Huber Cecotti</p>
								<p>Project Manager</p>
								<a href="mailto:hcecotti@csufresno.edu">hcecotti@csufresno.edu</a>
							</div>
						</div>
						<div class="member">
							<img src="https://ca.slack-edge.com/T015ARFRCE5-U016TVD5SNB-ced7724602de-512" alt="Member Image" title="Christian Vaughan">
							<div class="about-member">
								<p>Christian Vaughan</p>
								<p>Project Member</p>
								<a href="mailto:christianvaughan@mail.fresnotate.edu">christianvaughan@mail.fresnotate.edu</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

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
			padding: 0 40px;
			width: 33.33%;

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
</style>
