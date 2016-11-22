/**
 * Created by BenYin on 11/21/2016.
 */
import React from "react";
import Resources from "./resources"

var Row = React.createClass({
    render: function () {
        let info = this.props.info;
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
                        <Resources resources={this.props.resources}></Resources>
                    </div>
                </div>
            </div>
        );
    }
});

export default Row