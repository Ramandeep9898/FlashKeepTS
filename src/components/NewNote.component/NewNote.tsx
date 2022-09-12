import "./new-note.css";
import { FaPaperPlane } from "react-icons/fa";
import { useState, useEffect } from "react";
import { createNewNotes, getUserNotes } from "../../redux/reducers/notesSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { Note } from "../Note.component/Note";

type notes = {
  title?: string | null;
  content?: string | null;
  priority?: string | null;
  color?: string | null;
};

export const NewNote = () => {
  const dispatch = useAppDispatch();
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
    priority: "",
    bgcolor: "",
  });

  const { notes } = useAppSelector((state) => state.notes);

  const createNewNoteshandler = (newNote: notes) => {
    console.log(newNote);
    if (newNote.title === " " || newNote.content === "") {
      console.log("put type shit it");
    } else {
      dispatch(createNewNotes(newNote));
    }
  };

  useEffect(() => {
    dispatch(getUserNotes());
  }, []);
  return (
    <>
      <div className="selector">
        <div className="selector-container">
          <div className="selector-body">
            <input
              type="text"
              className="title-input"
              placeholder="Title"
              maxLength={30}
              value={newNote.title}
              onChange={(e) => {
                setNewNote((prev) => ({
                  ...prev,
                  title: e.target.value,
                }));
              }}
            />
            <li className="list-divider mgT-16"></li>

            <div className="add-list-body f-spa-btw mgT-8">
              <div className="selector-list">
                <input
                  className="title-input new-note-input"
                  data-placeholder="Take a note... "
                  contentEditable={true}
                  value={newNote.content}
                  onChange={(e) => {
                    setNewNote((prev) => ({
                      ...prev,
                      content: e.target.value,
                    }));
                  }}
                />
              </div>
            </div>
            <li className="list-divider mgT-8"></li>

            <div className="list-options-bar f-spa-btw mgT-16">
              <div className="list-options">
                <button
                  className="color-pattern color1 cursor"
                  onClick={() => {
                    setNewNote((prev) => ({
                      ...prev,
                      bgcolor: "#f4dcfe",
                    }));
                  }}
                ></button>

                <button
                  className="color-pattern color2 cursor"
                  onClick={() => {
                    setNewNote((prev) => ({
                      ...prev,
                      bgcolor: "#cdf0ea",
                    }));
                  }}
                ></button>
                <button
                  className="color-pattern color3 cursor"
                  onClick={() => {
                    setNewNote((prev) => ({
                      ...prev,
                      bgcolor: "#f4dcfe",
                    }));
                  }}
                ></button>
                <button
                  className="color-pattern color4 cursor"
                  onClick={() => {
                    setNewNote((prev) => ({
                      ...prev,
                      bgcolor: "#f4dcfe",
                    }));
                  }}
                ></button>
              </div>

              <div className="list-options-btns">
                <div className="dropdown">
                  <button className="dropbtn cursor">
                    {newNote.priority ? newNote.priority : "priority"}
                  </button>
                  <div className="dropdown-content">
                    <span
                      className=" cursor"
                      onClick={() => {
                        setNewNote((prev) => ({
                          ...prev,
                          priority: "low",
                        }));
                      }}
                    >
                      Top
                    </span>
                    <span
                      className=" cursor"
                      onClick={() => {
                        setNewNote((prev) => ({
                          ...prev,
                          priority: "Medium",
                        }));
                      }}
                    >
                      Medium
                    </span>
                    <span
                      className=" cursor"
                      onClick={() => {
                        setNewNote((prev) => ({
                          ...prev,
                          priority: "High",
                        }));
                      }}
                    >
                      Low
                    </span>
                  </div>
                </div>

                <button
                  className="send-btn"
                  onClick={() => {
                    createNewNoteshandler(newNote);
                  }}
                >
                  <FaPaperPlane />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {notes.length !== 0
        ? notes.map((noteDeatails) => <Note note={noteDeatails} />)
        : ""}
    </>
  );
};
