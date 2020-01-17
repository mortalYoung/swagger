import * as React from 'react';
import { render } from 'react-dom';
import App from '~/components/App';
import Layout from '~/layout';
import Router from './router'
function renderer() {
	return render(
		<App>
			<Layout>
				<Router />
			</Layout>
		</App>,
		document.getElementById('react-root')
	)
}
renderer();