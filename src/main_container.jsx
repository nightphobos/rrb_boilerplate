import React from 'react';
import { connect } from 'react-redux';
import {up} from './action/counter';
import App from './main.jsx';

const mapStateToProps = (store) => {
    return {
        counter: store
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        count: () => {
            dispatch(up())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
