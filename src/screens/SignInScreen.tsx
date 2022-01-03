import { useState } from "react";
import eye from "../images/eye-solid.svg";
import slashedEye from "../images/eye-slash-solid.svg";
import GoogleButton from "../components/GoogleButton";
import FormInput from "../components/FormInput";
import FormPasswordInput from "../components/FormPasswordInput";
import AuthFormStructure from "../components/AuthFormStructure";

function SignInScreen() {
  const [viewPassword, setViewPassword] = useState(false);

  const handleShowClick = () => {
    setViewPassword(!viewPassword);
  };

  return (
    <AuthFormStructure>
      <div className="form-header">
        <h1>Sign in</h1>
        <p>
          Don't have an account? <a>Sign up</a>
        </p>
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
    </AuthFormStructure>
  );
}

export default SignInScreen;
