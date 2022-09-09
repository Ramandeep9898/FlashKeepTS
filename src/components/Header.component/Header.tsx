import { FiLogOut } from "react-icons/fi";
import { logout } from "../../redux/reducers/authSlice";
import { useAppDispatch } from "../../redux/hook";

export const Header = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="header-position">
        <div className="header-position">
          <header className="navigation">
            <section className="nav-container-startsec">
              {/* logo */}
              <span className="nav-title">Flash Keep</span>
            </section>
            <section
              className="nav-container-endsec cursor"
              onClick={() => {
                console.log("clicked");
                dispatch(logout());
              }}
            >
              <FiLogOut />
            </section>
          </header>
        </div>
      </div>
    </>
  );
};
