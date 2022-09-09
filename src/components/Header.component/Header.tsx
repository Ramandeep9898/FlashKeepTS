import { FiLogOut } from "react-icons/fi";

export const Header = () => {
  return (
    <>
      <div className="header-position">
        <div className="header-position">
          <header className="navigation">
            <section className="nav-container-startsec">
              {/* logo */}
              <span className="nav-title">Flash Keep</span>
            </section>
            <section className="nav-container-endsec cursor">
              <FiLogOut />
            </section>
          </header>
        </div>
      </div>
    </>
  );
};
