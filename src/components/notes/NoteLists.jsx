import React from "react";
import NoteItems from "./NoteItems";

function NoteLists({ notes, onDelete, onArchive, onActive }) {
    if (notes.length === 0) {
        return <p className="notes-list__empty-message">note not available</p>;
    }

    return (
        <div className="notes-list">
            {notes?.map((note) => (
                <NoteItems
                    key={note.id}
                    {...note}
                    onDelete={onDelete}
                    onArchive={onArchive}
                    onActive={onActive}
                />
            ))}
        </div>
    );
}

export default NoteLists;
