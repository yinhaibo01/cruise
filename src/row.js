/**
 * Created by BenYin on 11/21/2016.
 */
import React from "react";

var Row = React.createClass({
    render: function () {
        return (
            <div id="row-element" className="row col-xs-12 col-sm-12 col-md-12">
                <div id="littleicon" className="col-xs-1"></div>
                <div className="col-xs-11">
                    <div className="row">
                        <div className="col-xs-4">{this.props.name}</div>
                        <div className="col-xs-1">{this.props.status}</div>
                        <div className="col-xs-3">{this.props.ip}</div>
                        <div className="col-xs-4">{this.props.dir}</div>
                    </div>
                    <div className="row">
                        <div className="col-xs-2"> + Specify Resources</div>
                    </div>
                </div>
            </div>
        );
    }
});

export default Row