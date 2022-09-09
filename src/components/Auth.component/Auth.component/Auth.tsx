import { useState } from "react";
// import { AuthProp } from "./Auth.Types";
import { Login } from "../Login.component/Login";
import { SignUp } from "../Signup.component/Signup";

export const Auth = () => {
  const [authVal, setAuthVal] = useState<boolean>(true);

  return (
    <main>
      {authVal ? (
        <Login setAuthVal={setAuthVal} />
      ) : (
        <SignUp setAuthVal={setAuthVal} />
      )}
    </main>
  );
};
