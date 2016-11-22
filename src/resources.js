/**
 * Created by BenYin on 11/22/2016.
 */
import React from "react";

var Resources = React.createClass({
    render: function () {
        var resources = this.props.resources.map(function (item, index) {
            return <span className="col-xs-1" key={'resource' + index}>
                <div className="row">
                <div className="col-xs-10">{item}</div>
                <button type="button" className="close col-xs-2"><span aria-hidden="true">&times;</span><span
                    className="sr-only">Close</span></button>
                </div>
            </span>
        });
        return (
            <div className="row">
                <div className="col-xs-2">+Specify Resources</div>
                <div className="col-xs-1"> Resources:</div>
                <div className="col-xs-9">
                    {resources}
                </div>
            </div>
        );
    }
});

export default Resources