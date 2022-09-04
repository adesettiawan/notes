import React from "react";

function Actives({ id, onActive }) {
    return (
        <button
            className="note-item__archive-button"
            onClick={() => onActive(id)}
        >
            Restore
        </button>
    );
}

export default Actives;
