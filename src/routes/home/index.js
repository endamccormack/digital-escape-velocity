import './style';

const Home = () => (
	<div id="home">
		<div id="wrapper">
			<div id="header" class="mdl-grid">
				<div class="container">
					<div id="title" class="mdl-cell mdl-cell--6-col">
						<h1>A technology company who care a lot about delivering real transformation for the digital era</h1>
					</div>

					<div id="logo" class="mdl-cell mdl-cell--6-col mdl-layout--large-screen-only">
						<img id="rocket" src="assets/rocket.png" />
						<img id="planet" src="assets/dev-planet.png" />
					</div>
				</div>
			</div>

			<div id="what-we-do" class="container">
				<h2>What we do</h2>
				<h4>Our bread and butter is solving problems. We are about making meaningful change in organisations whatever way we can.</h4>

				<div class="mdl-grid">
					<div class="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--6-col">
						<h3>Delivery</h3>
						We were founded by developers who cared deeply about actually improving organisations with delivery. Digital services and digital platforms are our bread and butter, we care deeply about writing good supportable software and solving problems with user needs. We know how to leverage technology to help you transform your organisation today.
					</div>
					<div class="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--6-col">
						<h3>Testing</h3>
						We believe as an organisation in software engineering in test. Quality is at the core of our values and we try to bring that into organisations with our people. We've seen the issues of trying to support a codebase without tests can bring about and we aim to make sure your software is stable and reliable so people see you as stable and reliable.
					</div>
					<div class="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--6-col">
						<h3>Coaching</h3>
						Our people are problem solvers, we strive to solve your problems and support you in your transition to a better future, but our job is all about making ourselves obsolete, the best way we can achieve this is by coaching your people while we work with you to take over once we're gone.
					</div>
					<div class="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--6-col">
						<h3>Agile</h3>
						All of our projects internally and the vast majority of our work with customers is accomplished using agile. We've taken part in transformation exercises for organisations big and small with little to no agile understanding, taking them on a journey to being fully fledged agile organisations, we can help you transition your organisation to do the same.
					</div>
				</div>
			</div>

			<div id="people" class="container">
				<h2>Our people's previous engagements</h2>
				<h4>Our people are our life blood, and our people will ultimately be who make you a success. Here is just a short list of what they're used to.</h4>
				<div class="mdl-grid">
					<div class="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--3-col">
						<img src="assets/companies/gds.jpg" alt="Government Digital Service" />
					</div>
					<div class="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--3-col">
						<img src="assets/companies/dfid.jpg" alt="Department for International Development" />
					</div>
					<div class="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--3-col">
						<img src="assets/companies/land-reg.jpg" alt="Land Registry" />
					</div>
					<div class="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--3-col">
						<img src="assets/companies/co.jpg" alt="Cabinet Office" />
					</div>
				</div>
				<div class="mdl-grid">
					<div class="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--3-col">
						<img src="assets/companies/eir.jpg" alt="eir (used to be known as Eircom)" />
					</div>
					<div class="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--3-col">
						<img src="assets/companies/moj.jpg" alt="Ministry Of Justice" />
					</div>
					<div class="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--3-col">
						<img src="assets/companies/hmcts.jpg" alt="Her Majesties Courts and Tribunals Service" />
					</div>
					<div class="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--3-col">
						<img src="assets/companies/dwp.jpg" alt="Department for Work and Pensions" />
					</div>
				</div>
			</div>

			<div id="engagement" class="container">
				<h2>Lets start the conversation</h2>
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