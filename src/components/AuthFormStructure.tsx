function AuthFormStructure({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="auth-screen">
      <div
        className={
          className
            ? `auth-form__container ${className}`
            : "auth-form__container"
        }
      >
        <form className="auth-form">
          {children}
        </form>
      </div>
    </div>
  );
}

export default AuthFormStructure;
