import "./new-note.css";
import { FaPaperPlane } from "react-icons/fa";

export const NewNote = () => {
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
            />
            <li className="list-divider mgT-16"></li>

            <div className="add-list-body f-spa-btw mgT-8">
              <div className="selector-list">
                <p
                  className="title-input new-note-input"
                  data-placeholder="Take a note... "
                  contentEditable={true}
                ></p>
              </div>

              {/* <div className="add-item-btn ">
                {/* <i className="fas fa-paper-plane"></i> */}
              {/* </div>  */}
            </div>
            <li className="list-divider mgT-8"></li>

            <div className="list-options-bar f-spa-btw mgT-16">
              <div className="list-options">
                <div className="color-pattern color1"></div>
                <div className="color-pattern color2"></div>
                <div className="color-pattern color3"></div>
                <div className="color-pattern color4"></div>
              </div>

              <div className="list-options-btns">
                <div className="dropdown">
                  <button className="dropbtn">Priority</button>
                  <div className="dropdown-content">
                    <span>Top</span>
                    <span>Medium</span>
                    <span>Low</span>
                  </div>
                </div>
                {/* <div className="dropdown">
                  <button className="dropbtn">label</button>
                  <div className="dropdown-content">
                    
                  </div>
                </div> */}
                <FaPaperPlane />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
