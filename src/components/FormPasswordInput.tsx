interface IFormPasswordInputProps extends React.DetailedHTMLProps<
React.InputHTMLAttributes<HTMLInputElement>,
HTMLInputElement> {
  viewPassword: boolean;
  nonViewImage: string;
  viewImage: string;
  handleShowClick: () => void;
  children?: React.ReactNode;
  divClassName?: string;
}

function FormPasswordInput({
  viewPassword,
  nonViewImage,
  viewImage,
  handleShowClick,
  divClassName,
  children,
  ...inputProps
}: IFormPasswordInputProps) {
  return (
    <div className={divClassName ? `form-field ${divClassName}` : "form-field"}>
      <input type={viewPassword ? "text" : "password"} {...inputProps} />
      <div className="show-password-button" onClick={handleShowClick}>
        <img src={viewPassword ? nonViewImage : viewImage} alt="eye" />
      </div>
    </div>
  );
}

export default FormPasswordInput;
