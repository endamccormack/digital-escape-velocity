import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { Layout } from 'preact-mdl';

import Header from './header';
import Drawer from './drawer';
import Footer from './footer';
import Home from '../routes/home';
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
					<Layout.Content class="mdl-color--grey-100">
						<Router onChange={this.handleRoute}>
							<Home path="/" />
						</Router>
						<Footer />
					</Layout.Content>
				</Layout>
			</div>
		);
	}
}
