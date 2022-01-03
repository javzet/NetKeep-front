import { useState } from "react";
import eye from "../images/eye-solid.svg";
import slashedEye from "../images/eye-slash-solid.svg";
import GoogleButton from "../components/GoogleButton";
import FormInput from "../components/FormInput";
import FormPasswordInput from "../components/FormPasswordInput";
import AuthFormStructure from "../components/AuthFormStructure";
import { Link } from "react-router-dom";

function SignInScreen() {
  const [viewPassword, setViewPassword] = useState(false);

  const handleShowClick = () => {
    setViewPassword(!viewPassword);
  };

  return (
    <AuthFormStructure className="sign-in">
      <div className="form-header">
        <h1>Sign in</h1>
      </div>
      <GoogleButton text="Sign up with Google" />
      <div className="separator">
        <span>Or</span>
      </div>
      <div className="form-content">
        <FormInput placeholder="Email" />
        <FormPasswordInput
          viewImage={eye}
          nonViewImage={slashedEye}
          handleShowClick={handleShowClick}
          viewPassword={viewPassword}
          placeholder="Password"
          divClassName="password-input"
        />
        <button>Sign in with email</button>
      </div>
      <div className="form-footer">
        <p>
          Don't have an account? <Link to="/sign-up">Sign up</Link>
        </p>
      </div>
    </AuthFormStructure>
  );
}

export default SignInScreen;
