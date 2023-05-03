import { React } from 'react';
import './App.scss';
import Shop from './components/Shop';
import shopServices from './services/shopService';

const App = (context) =>
	<div className="App">
		<Shop { ...{ ...context, data: shopServices(context) } }/>
	</div>;

export default App;
