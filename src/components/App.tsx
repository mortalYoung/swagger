import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import client from '../client/index'
import './App.css';

interface IAppProps{};

const App: React.SFC<IAppProps> = ({children}) => {
	return <ApolloProvider client={client}>{children}</ApolloProvider>
}
App.defaultProps = {};
export default App;