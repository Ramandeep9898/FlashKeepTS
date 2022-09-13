import { Header } from "../components/Header.component/Header";
import { SideBar } from "../components/SideBar.component/SideBar";
import { Note } from "../components/Note.component/Note";
import { useAppSelector } from "../redux/hook";

export const Archive = () => {
  const note = useAppSelector((state) => state.notes);
  const { archive } = note;
  //   console.log(note);
  return (
    <>
      <Header />

      <div className="container-main">
        <div className="left-aside-position">
          <SideBar />
        </div>
        <div className="main">
          {archive.length !== 0
            ? archive.map((archive) => <Note note={archive} flag={"trash"} />)
            : ""}
        </div>
      </div>
    </>
  );
};
