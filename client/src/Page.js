import React from 'react';
import Header from './Header';
import $ from 'jquery';

class Page extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        $.ajax({
            url: "/api/message",
        }).done(function(data) {
            this.setState({data: data});
        }.bind(this));
    }

    render() {
        return this.state.data ? (<Header {...this.state.data}/>) : (<no-scripts></no-scripts>);
    }
}

export default Page;