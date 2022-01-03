interface IFormInputProps extends React.DetailedHTMLProps<
React.InputHTMLAttributes<HTMLInputElement>,
HTMLInputElement> {
  children?: React.ReactNode;
  divClassName?: string;
}

function FormInput({
  divClassName,
  children,
  ...inputProps
}: IFormInputProps) {
  return (
    <div className={divClassName ? `form-field ${divClassName}` : "form-field"}>
      <input type={inputProps.type || "text"} {...inputProps} />
      {children || null}
    </div>
  );
}

export default FormInput;
