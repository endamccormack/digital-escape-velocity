import './style';
import { MegaFooter, MegaFooterHeading, MegaFooterMiddleSection, MegaFooterBottomSection } from 'preact-mdl';

const Footer = () => (
	<MegaFooter>
		<MegaFooterHeading>Digital Escape Velocity LTD</MegaFooterHeading>
		<MegaFooterMiddleSection>Made with ❤️ and ☕  &nbsp;with Preact in London 🇬🇧.</MegaFooterMiddleSection>
		<MegaFooterBottomSection>
			Company Number 10868965 | VAT Number [TODO]
		</MegaFooterBottomSection>
	</MegaFooter>
);

export default Footer;