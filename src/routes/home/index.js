import './style';

const Home = () => (
	<div id="home">
		<div id="wrapper">
			<div id="header" class="mdl-grid">
				<div class="container">
					<div id="title" class="mdl-cell mdl-cell--6-col">
						<h1>We're a technology company who care a lot about delivering real transformation for the digital era</h1>
					</div>

					<div id="logo" class="mdl-cell mdl-cell--6-col mdl-layout--large-screen-only">
						<img id="rocket" src="assets/rocket.png" />
						<img id="planet" src="assets/dev-planet.png" />
					</div>
				</div>
			</div>

			<div id="what-we-do" class="container">
				<h1>What we do</h1>
				<h4>Our bread and butter is solving problems. We are about making meaningful change in organisations whatever way we can.</h4>

				<div class="mdl-grid">
					<div class="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--3-col">
						<h3>Delivery</h3>
						Our people have broad skillsets and have primarily worked on digital services and digital platforms.
					</div>
					<div class="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--3-col">
						<h3>Testing</h3>
						We believe as an organisation in software engineering in test. Quality is at the core of our values.
					</div>
					<div class="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--3-col">
						<h3>Coaching</h3>
						Digital is all about making yourself obsolete. We strive to solve the difficult problems and work with your people to make it easy for you.
					</div>
					<div class="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--3-col">
						<h3>Agile</h3>
						We are agile by nature. The vast majority of our work is accomplished using agile principals and we can help you do the same.
					</div>
				</div>
			</div>

			<div id="people" class="container">
				<h1>Our people's previous engagements</h1>
				<h4>Our people are our life blood, and our people will ultimately be who make you a success. Here is just a short list of what they're used to.</h4>
				<div class="mdl-grid">
					<div class="mdl-shadow--2dp mdl-cell mdl-cell--3-col">
						<img src="assets/companies/gds.jpg" alt="Government Digital Service" />
					</div>
					<div class="mdl-shadow--2dp mdl-cell mdl-cell--3-col">
						<img src="assets/companies/dfid.jpg" alt="Department for International Development" />
					</div>
					<div class="mdl-shadow--2dp mdl-cell mdl-cell--3-col">
						<img src="assets/companies/land-reg.jpg" alt="Land Registry" />
					</div>
					<div class="mdl-shadow--2dp mdl-cell mdl-cell--3-col">
						<img src="assets/companies/co.jpg" alt="Cabinet Office" />
					</div>
				</div>
				<div class="mdl-grid">
					<div class="mdl-shadow--2dp mdl-cell mdl-cell--3-col">
						<img src="assets/companies/eir.jpg" alt="eir (used to be known as Eircom)" />
					</div>
					<div class="mdl-shadow--2dp mdl-cell mdl-cell--3-col">
						<img src="assets/companies/moj.jpg" alt="Ministry Of Justice" />
					</div>
					<div class="mdl-shadow--2dp mdl-cell mdl-cell--3-col">
						<img src="assets/companies/hmcts.jpg" alt="Her Majesties Courts and Tribunals Service" />
					</div>
					<div class="mdl-shadow--2dp mdl-cell mdl-cell--3-col">
						<img src="assets/companies/dwp.jpg" alt="Department for Work and Pensions" />
					</div>
				</div>
			</div>

			<div id="engagement" class="container">
				<h1>Lets start the conversation</h1>
				<h4>Reach out to us if you're interested in working together on fixing the real problems affecting you</h4>
				<a href="mailto:enda@escapevelocity.eu">
					<button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
						Engage with us
					</button>
				</a>
			</div>
		</div>

		<style dangerouslySetInnerHTML={{ __html: `
				#rocket{
					animation: slideInFromLeft 2s ease-in-out;
					-webkit-animation: slideInFromLeft 1s ease-in-out;
				}
				@keyframes slideInFromLeft {
					from {top: 2000px;}
				}
				@-webkit-keyframes slideInFromLeft {
					from {top: 2000px;}
				}
			` }}
		/>

	</div>
);

export default Home;