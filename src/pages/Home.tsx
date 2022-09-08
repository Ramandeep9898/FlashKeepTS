import { Header } from "../components/Header.component/Header";
import { SideBar } from "../components/SideBar.component/SideBar";
import { NewNote } from "../components/NewNote.component/NewNote";

export const Home = () => {
  return (
    <>
      <Header />

      <div className="container-main">
        <div className="left-aside-position">
          <SideBar />
        </div>
        <div className="main">
          <NewNote />
        </div>
      </div>
    </>
  );
};
