/**
 * Created by BenYin on 11/21/2016.
 */
import React from "react";
import Resources from "./resources"
import * as Actions from "../action/actions"

var colorDict = {
    'IDLE': 0,
    'BUILDING': 1
}

var Row = React.createClass({
    render: function () {
        let self = this;
        let info = self.props.info;

        function removeResource(ip) {
            var ipTemp = ip;
            return function (index) {
                self.props.dispatch(Actions.removeResource(ipTemp, index))
            }
        }

        function addResource(ip) {
            var ipTemp = ip;
            return function (resources) {
                self.props.dispatch(Actions.addResource(ipTemp, resources))
            }
        }

        var rowClass = "row col-xs-12 col-sm-12 col-md-12 top-buffer cruise-color" + colorDict[info.status.toUpperCase()];
        return (
            <div id="row-element" className={rowClass}>
                <div id="littleicon" className="col-xs-1"></div>
                <div className="col-xs-11">
                    <div className="row">
                        <div className="col-xs-4"><span className="info-row">{info.name}</span></div>
                        <div className="col-xs-1"><span className="info-row">{info.status}</span></div>
                        <div className="col-xs-3"><span className="info-row">{info.ip}</span></div>
                        <div className="col-xs-4"><span className="info-row">{info.dir}</span></div>
                    </div>
                    <div className="row">
                        <Resources resources={self.props.resources} removeResource={removeResource(info.ip)}
                                   addResource={addResource(info.ip)}></Resources>
                    </div>
                </div>
            </div>
        );
    }
});

export default Row