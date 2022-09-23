import "./note.css";
import { FiTrash } from "react-icons/fi";
import { EachNoteType } from "./Notes.types";
import { useAppDispatch } from "../../redux/hook";
import { deleteNoteHandler, trashNote } from "../../redux/reducers/notesSlice";

export const Note = ({ note, flag }: EachNoteType) => {
  const dispatch = useAppDispatch();
  console.log(flag);
  const { title, content } = note;
  console.log("flag", flag);
  return (
    <>
      <div className="selector">
        <div className="selector-container">
          <div className="selector-body">
            <div className="title-input create-note-Title">{title}</div>
            <li className="list-divider mgT-16"></li>

            <div className="add-list-body f-spa-btw mgT-8">
              <div className="selector-list">
                <p className="title-input new-note-input create-note-content">
                  {content}
                </p>
              </div>
            </div>
            <li className="list-divider mgT-8"></li>

            <div className="list-options-bar  f-spa-btw mgT-16">
              <div className="list-options">
                {flag === "home" || "archive" ? (
                  <button
                    className="send-btn fontSize"
                    onClick={() => {
                      dispatch(trashNote(note));
                      dispatch(deleteNoteHandler());
                    }}
                  >
                    <FiTrash />
                  </button>
                ) : (
                  <></>
                )}
              </div>

              <div className="list-options-btns  cursor"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
