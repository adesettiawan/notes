import React, { Component } from "react";

export default class AddNotes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            body: "",
            maxChar: 50,
        };

        this.onTitleChangeEventHandler =
            this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler =
            this.onBodyChangeEventHandler.bind(this);

        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value.slice(0, this.state.maxChar),
            };
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            };
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);

        this.setState(() => {
            return {
                title: "",
                body: "",
            };
        });
    }
    render() {
        return (
            <div className="note-input">
                <h2>Create a new note</h2>
                <form onSubmit={this.onSubmitEventHandler}>
                    <p className="note-input__title__char-limit">
                        Remaining characters:{" "}
                        {this.state.maxChar - this.state.title.length}
                    </p>
                    <input
                        className="note-input__title"
                        type="text"
                        placeholder="Title ..."
                        value={this.state.title}
                        onChange={this.onTitleChangeEventHandler}
                        required
                    />
                    <textarea
                        className="note-input__body"
                        type="text"
                        placeholder="Write your note here ..."
                        value={this.state.body}
                        onChange={this.onBodyChangeEventHandler}
                        required
                    ></textarea>
                    <button className="btn-create" type="submit">
                        Create
                    </button>
                </form>
            </div>
        );
    }
}
