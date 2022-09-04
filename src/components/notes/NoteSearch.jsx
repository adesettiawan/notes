import React, { Component } from "react";

export default class NoteSearch extends Component {
    constructor(props) {
        super(props);

        this.state = { query: "" };

        this.onQueryChangeHandler = this.onQueryChangeHandler.bind(this);
    }

    onQueryChangeHandler(event) {
        this.setState({ query: event.target.value }, () => {
            return this.props.searchNote(this.state);
        });
    }
    render() {
        return (
            <div className="note-search">
                <input
                    type="text"
                    placeholder="Search notes ..."
                    value={this.state.query}
                    onChange={this.onQueryChangeHandler}
                />
            </div>
        );
    }
}
