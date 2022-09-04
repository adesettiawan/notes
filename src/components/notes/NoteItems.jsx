import React from "react";
import { showFormattedDate } from "../../utils/index";
import Actives from "../buttons/Actives";
import Archives from "../buttons/Archives";
import Deleted from "../buttons/Deleted";
import NoteItemContents from "./NoteItemContents";

function NoteItems({
    id,
    title,
    createdAt,
    body,
    archived,
    onDelete,
    onArchive,
    onActive,
}) {
    return (
        <div className="note-item">
            <NoteItemContents
                title={title}
                date={showFormattedDate(createdAt)}
                body={body}
            />

            <div className="note-item__action">
                <Deleted id={id} onDelete={onDelete} />
                {archived ? (
                    <Actives id={id} onActive={onActive} />
                ) : (
                    <Archives id={id} onArchive={onArchive} />
                )}
            </div>
        </div>
    );
}

export default NoteItems;
