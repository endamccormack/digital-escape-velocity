import './style';
import { Layout, Navigation } from 'preact-mdl';

const Header = () => (
	<Layout class="mdl-layout--no-drawer-button" style="margin: 0 auto;" fixed-header>

		<Layout.Header>
			<Layout.HeaderRow>
				<Layout.Title>
					<img src="assets/icons/dev-white.png" style="width:50px; margin-top:15px; float:left;" />
					<h3 style="font-family:'Roboto Mono'; float:right; padding-left:10px;">Digital Escape Velocity</h3>
				</Layout.Title>
				<Layout.Spacer />
				<Layout.Content class="mdl-layout--large-screen-only">
					<Navigation style="float:right">
						<Navigation.Link href="/">Home</Navigation.Link>
					</Navigation>
				</Layout.Content>
			</Layout.HeaderRow>
		</Layout.Header>

		<Layout.Drawer>
			<Navigation>
				<Navigation.Link href="/">Home</Navigation.Link>
			</Navigation>
		</Layout.Drawer>

	</Layout>
);

export default Header;