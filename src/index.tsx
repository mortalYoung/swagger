import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from '~/components/App';
import Layout from '~/layout';
import Router from './router'
import store from '~/store';
function renderer() {
	return render(
		<Provider store={store}>
			<App>
				<Layout>
					<Router />
				</Layout>
			</App>
		</Provider>,
		document.getElementById('react-root')
	)
}
renderer();