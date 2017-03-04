import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/main_container.jsx';

import { createStore} from 'redux';
import { Provider } from 'react-redux';
import counter from './src/reducer/counter';

const store = createStore(counter);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('react-init'));