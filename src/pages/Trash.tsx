import { Header } from "../components/Header.component/Header";
import { SideBar } from "../components/SideBar.component/SideBar";
import { Note } from "../components/Note.component/Note";
import { useAppSelector } from "../redux/hook";

export const Trash = () => {
  const note = useAppSelector((state) => state.notes);
  const { trash } = note;
  console.log(note);
  return (
    <>
      <Header />
      <div className="container-main">
        <div className="left-aside-position">
          <SideBar />
        </div>
        <div className="main">
          {trash.length !== 0
            ? trash.map((noteDeatails) => (
                <Note note={noteDeatails} flag={"trash"} />
              ))
            : ""}
        </div>
      </div>
    </>
  );
};
