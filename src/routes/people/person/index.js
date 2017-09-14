import enda from '../../../assets/people/markdown/endamccormack.md'
import {markdown} from 'markdown';
import Markup from 'preact-markup';


const Person = (person) => (
	<div id="person">
		<div id="wrapper">
			<div id="header" class="mdl-grid">
				<div class="container">
					<div>
						<Markup markup={markdown.toHTML(enda)} />
						<a href="mailto:enda@escapevelocity.eu">
							<button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
								Contact us for me information
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default Person;