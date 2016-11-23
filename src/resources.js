/**
 * Created by BenYin on 11/22/2016.
 */
import React from "react";

var Resources = React.createClass({
    render: function () {
        var self = this;

        function removeResource(index) {
            var temp = index;
            return function () {
                self.props.removeResource(temp);
            }
        }

        var dialog = $('<div id="dialog" title="Add resources"><input type="text" id="resources" value=""/></div>');

        function openAddResourceDlg() {
            dialog.dialog({
                buttons: {
                    'Add resources': function () {
                        var resources = $("#resources").val();
                        self.props.addResource(resources);
                        dialog.dialog("destroy");
                    },
                    Close: function () {
                        dialog.dialog("destroy");
                    }
                }
            })
        }


        var resources = this.props.resources.map(function (item, index) {
            return <span className="col-xs-2" key={'resource' + index}>
                <div className="row">
                    <div className="col-xs-10">{item}</div>
                    <button type="button" className="close col-xs-2" onClick={removeResource(index)}>
                        <span aria-hidden="true">&times;</span>
                        <span className="sr-only">Close</span>
                    </button>
                </div>
            </span>
        });
        return (
            <div className="row">
                <div className="col-xs-2"><a onClick={openAddResourceDlg}>+Specify Resources</a></div>
                <div className="col-xs-1">Resources:</div>
                <div className="col-xs-9">
                    {resources}
                </div>
            </div>
        );
    }
});

export default Resources