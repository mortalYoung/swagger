import * as React from 'react';
import { render } from 'react-dom';
import App from '~/components/App';
import ExchangeRates from '~/client/query';
function renderer() {
	return render(
		<App>
			<section className={"root"}>
				<ExchangeRates />
			</section>
		</App>,
		document.getElementById('react-root')
	)
}
renderer();