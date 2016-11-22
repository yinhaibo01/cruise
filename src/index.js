/**
 * Created by BenYin on 11/21/2016.
 */
import React from "react";
import ReactDOM from "react-dom";
import {Provider, connect} from "react-redux";
import {createStore} from "redux";
import reducers from "./reducers";

import Row from "./row"

let store = createStore(reducers);


var App = React.createClass({
    render: function () {
        let self = this;
        var items = self.props.rows.map(function (item, index) {
            return <Row key={'row' + index} info={item.info} resources={item.resources} dispatch={self.props.dispatch}/>
        });
        return (
            <div className="container-fluid">
                <div className="col-md-10 col-md-offset-1">
                    {items}
                </div>
            </div>
        );
    }
});


var AppWrapper = connect(state => state)(App);


ReactDOM.render(
    <Provider store={store}>
        <AppWrapper />
    </Provider>,
    document.getElementById("sample")
);
