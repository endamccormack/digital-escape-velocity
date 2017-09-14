import './style';
import { Layout, Navigation } from 'preact-mdl';

const Drawer = () => (
	<Layout.Drawer>
		<Layout.Title>Digital Escape Velocity</Layout.Title>
		<Navigation>
			<Navigation.Link href="/">Home</Navigation.Link>
			<Navigation.Link href="/people">Available People</Navigation.Link>
		</Navigation>
	</Layout.Drawer>
);

export default Drawer;

		