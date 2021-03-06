import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { Layout } from 'preact-mdl';
import './app.less';

import Header from './header';
import Drawer from './drawer';
import Footer from './footer';
import Home from '../routes/home';
import People from '../routes/people';
import Person from '../routes/people/person';
import GoogleAnalytics from './google-analytics';


export default class App extends Component {

	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<GoogleAnalytics />
				<Layout class="mdl-layout--no-drawer-button mdl-color--grey-100" style="margin: 0 auto;" fixed-header>
					<Header />
					<Drawer />
					<Layout.Content>
						<Router onChange={this.handleRoute}>
							<Home path="/" />
							<People path="/people" />
							<Person path="/people/:person" />
						</Router>
						<Footer />
					</Layout.Content>
				</Layout>
			</div>
		);
	}
}
