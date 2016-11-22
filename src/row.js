/**
 * Created by BenYin on 11/21/2016.
 */
import React from "react";
import Resources from "./resources"
import * as Actions from "./actions"

var Row = React.createClass({
    render: function () {
        let self = this;
        let info = self.props.info;

        function removeResouce(ip) {
            var ipTemp = ip;
            return function (resource) {
                self.props.dispatch(Actions.removeResouce(ipTemp, resource))
            }
        }
        return (
            <div id="row-element" className="row col-xs-12 col-sm-12 col-md-12">
                <div id="littleicon" className="col-xs-1"></div>
                <div className="col-xs-11">
                    <div className="row">
                        <div className="col-xs-4"><h4>{info.name}</h4></div>
                        <div className="col-xs-1"><h4>{info.status}</h4></div>
                        <div className="col-xs-3"><h4>{info.ip}</h4></div>
                        <div className="col-xs-4"><h4>{info.dir}</h4></div>
                    </div>
                    <div className="row">
                        <Resources resources={self.props.resources} removeResouce={removeResouce(info.ip)}></Resources>
                    </div>
                </div>
            </div>
        );
    }
});

export default Row