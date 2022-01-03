import { useState } from "react";
import AuthFormStructure from "../components/AuthFormStructure";
import FormInput from "../components/FormInput";
import FormPasswordInput from "../components/FormPasswordInput";
import GoogleButton from "../components/GoogleButton";

import eye from "../images/eye-solid.svg";
import slashedEye from "../images/eye-slash-solid.svg";
import { Link } from "react-router-dom";

function SignUpScreen() {
  const [viewPassword, setViewPassword] = useState(false);

  const handleShowClick = () => {
    setViewPassword(!viewPassword);
  };

  return (
    <AuthFormStructure className="sign-up">
      <div className="form-header">
        <h1>Sign up</h1>
      </div>
      <GoogleButton text="Sign in with Google" />
      <div className="separator">
        <span>Or</span>
      </div>
      <div className="form-content">
        <FormInput placeholder="Name" />
        <FormInput placeholder="Email" />
        <FormPasswordInput
          viewImage={eye}
          nonViewImage={slashedEye}
          handleShowClick={handleShowClick}
          viewPassword={viewPassword}
          placeholder="Password"
          divClassName="password-input"
        />
        <FormPasswordInput
          viewImage={eye}
          nonViewImage={slashedEye}
          handleShowClick={handleShowClick}
          viewPassword={viewPassword}
          placeholder="Confirm password"
          divClassName="password-input confirm-password"
        />
        <button>Sign up with email</button>
      </div>
      <div className="form-footer">
        <p>
          Already have an account? <Link to="/sign-in">Sign in</Link>
        </p>
      </div>
    </AuthFormStructure>
  );
}

export default SignUpScreen;
