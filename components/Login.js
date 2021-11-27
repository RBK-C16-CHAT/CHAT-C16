

const Login = () => {
//   const google = () => {
//     window.open("http://localhost:5000/auth/google", "_self");
//   };

//   const github = () => {
//     window.open("http://localhost:5000/auth/github", "_self");
//   };
  return (
    <div className="login">
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google" >
            <img src="https://image.similarpng.com/thumbnail/2020/12/Colorful-google-logo-design-on-transparent-PNG-1.png" alt="" className="icon" />
            Google
          </div>
          <div className="loginButton github" >
            <img src="https://mpng.subpng.com/20180326/gxq/kisspng-github-computer-icons-icon-design-github-5ab8a31e334e73.4114704215220498222102.jpg" alt="" className="icon" />
            Github
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Login;
