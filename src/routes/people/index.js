import './style.less';
import snippet from '../../assets/people/snippet/endamccormack.txt'


const People = () => (
	<div id="people">
		<div id="wrapper">
			<div id="header" class="mdl-grid">
				<div class="container">
					<h1>People Available</h1>
					<div>
						<h3>Technical</h3>
						<div class="mdl-grid">
							<div class="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--6-col">
								<img src="assets/people/endamccormack.png" alt="eir (used to be known as Eircom)" />
								<h3>Enda McCormack</h3>
								<h4>Software Developer</h4>
								{snippet}
								
								<p><a href="/people/endamccormack">more</a></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default People;