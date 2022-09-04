import React from "react";
import AddNotes from "../notes/AddNotes";
import NoteLists from "../notes/NoteLists";

function Main({ addNote, notes, querySearch, onDelete, onArchive, onActive }) {
    const activeNotes = notes.filter(
        (note) =>
            note.archived === false &&
            note.title.toLowerCase().includes(querySearch.toLowerCase().trim())
    );
    const archiveNotes = notes.filter(
        (note) =>
            note.archived === true &&
            note.title.toLowerCase().includes(querySearch.toLowerCase().trim())
    );

    return (
        <div className="note-app__body">
            <AddNotes addNote={addNote} />
            <h2>Actives Notes</h2>
            <hr style={{ marginBottom: "30px" }} />
            <NoteLists
                notes={activeNotes}
                onDelete={onDelete}
                onArchive={onArchive}
            />
            <h2 style={{ marginTop: "30px" }}>Archived Notes</h2>
            <hr style={{ marginBottom: "30px" }} />
            <NoteLists
                notes={archiveNotes}
                onDelete={onDelete}
                onActive={onActive}
            />
        </div>
    );
}

export default Main;
