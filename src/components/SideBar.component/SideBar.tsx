import "./side-bar.css";
import { BiHomeSmile } from "react-icons/bi";
import { MdLabelOutline } from "react-icons/md";
import { FiTrash } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { BsArchive } from "react-icons/bs";
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../../redux/reducers/authSlice";
import { Link, NavLink } from "react-router-dom";

export const SideBar = () => {
  //   const dispatch = useDispatch();
  return (
    <>
      <nav className="lf-aside">
        <ul className="lf-aside-items">
          <Link to="/home">
            <li className="lf-aside-item mgT-8">
              <BiHomeSmile />
              <span>Home</span>
            </li>
          </Link>

          <Link to="/explore">
            <li className="lf-aside-item mgT-8">
              <MdLabelOutline />
              <span>Label</span>
            </li>
          </Link>

          <Link to="/bookmarks">
            <li className="lf-aside-item mgT-8">
              <BsArchive />
              <span>Archives</span>
            </li>
          </Link>

          <Link to="/trash">
            <li className="lf-aside-item mgT-8">
              <FiTrash />
              <span>Trash</span>
            </li>
          </Link>

          <Link to="/">
            <li className="lf-aside-item mgT-8">
              <CgProfile />
              <span>Profile</span>
            </li>
          </Link>

          <Link to="/home">
            <li className="lf-aside-item mgT-8">
              <button className="btn bg-pur width100">Create New note</button>
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
};
