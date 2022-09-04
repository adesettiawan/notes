import React from "react";
import NoteSearch from "../notes/NoteSearch";

function Header({ searchNote }) {
    return (
        <div className="note-app__header">
            <h1>My Notes</h1>
            <NoteSearch searchNote={searchNote} />
        </div>
    );
}

export default Header;
