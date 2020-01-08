import * as React from 'react';
import { render } from 'react-dom';
import App from '~/components/App';

function renderer() {
	return render(
		<App>
			<section className={"root"}>Heelll</section>
		</App>,
		document.getElementById('react-root')
	)
}
renderer();