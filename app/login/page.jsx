import '../login/login.css';

function Login() {
  return (
    <div className="login">
      <h1><strong>USER LOGIN</strong></h1>
      <form>
        <input placeholder="Username" type="text" id="usuario" name="usuario" />
        <input placeholder="Password" type="password" id="contrasena" name="contrasena" />
        <button type="submit">Login</button>
      </form>
      <div className="circle-image">
      </div>
    </div>
  );
}

export default Login;
