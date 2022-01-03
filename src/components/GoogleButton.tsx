function GoogleButton({text}: {text: string}) {
  return (
    <div className="google-button">
      <button>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          alt="google-logo"
        />
        <span>{text}</span>
      </button>
    </div>
  );
}

export default GoogleButton;
