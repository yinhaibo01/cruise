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
        var items = this.props.rows.map(function (item, index) {
            return <Row key={'row' + index} name={item.info.name} status={item.info.status} ip={item.info.ip}
                        dir={item.info.dir}/>
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
