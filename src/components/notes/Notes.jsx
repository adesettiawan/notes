import React, { Component } from "react";
import { getInitialData } from "../../utils/index";
import Header from "../layouts/Header";
import Main from "../layouts/Main";

export class Notes extends Component {
    constructor(props) {
        super(props);

        const notes = getInitialData();

        this.state = {
            notes: notes,
            querySearch: "",
        };

        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onActiveHandler = this.onActiveHandler.bind(this);

        this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
    }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: new Date().toISOString(),
                        archived: false,
                    },
                ],
            };
        });
    }

    onDeleteHandler(id) {
        this.setState({
            notes: this.state.notes.filter((note) => note.id !== id),
        });
    }

    onArchiveHandler(id) {
        this.setState({
            notes: this.state.notes.map((note) =>
                note.id === id ? { ...note, archived: true } : note
            ),
        });
    }

    onActiveHandler(id) {
        this.setState({
            notes: this.state.notes.map((note) =>
                note.id === id ? { ...note, archived: false } : note
            ),
        });
    }

    onSearchEventHandler({ query }) {
        this.setState(() => {
            return { querySearch: query };
        });
    }

    render() {
        return (
            <>
                <Header searchNote={this.onSearchEventHandler} />
                <Main
                    addNote={this.onAddNoteHandler}
                    notes={this.state.notes}
                    querySearch={this.state.querySearch}
                    onDelete={this.onDeleteHandler}
                    onArchive={this.onArchiveHandler}
                    onActive={this.onActiveHandler}
                />
            </>
        );
    }
}

export default Notes;
