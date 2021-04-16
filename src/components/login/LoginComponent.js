const LoginComponent = ({ history }) => {
  const handleClick = () => {
    // push & replace -> redirects spa
    // history.push('/') -> no borra el historial 
    history.replace("/"); // borra el historial, si le dan back a la url anterior no podran acceder
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button onClick={handleClick} className="btn btn-primary">
        xd
      </button>
    </div>
  );
};

export default LoginComponent;
