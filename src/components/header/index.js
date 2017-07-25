import './style';
import { Layout, Navigation } from 'preact-mdl';

const Header = () => (
	<Layout.Header>
		<Layout.HeaderRow>
			<Layout.Title>
				<img src="assets/icons/dev-white.png" />
				<span class="mdl-layout--large-screen-only">Digital Escape Velocity</span>
			</Layout.Title>
			<Layout.Spacer />
			<Layout.Content class="mdl-layout--large-screen-only">
				<Navigation>
					<Navigation.Link href="/">Home</Navigation.Link>
				</Navigation>
			</Layout.Content>
		</Layout.HeaderRow>
	</Layout.Header>
);

export default Header;