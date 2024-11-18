import "./home.css";
import Logo from "./assets/logo.png";

export default function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-6 offset-md-3 text-center px-0 mh-400">
          <img src={Logo.src} className="logo-img" />
        </div>

        <div className="col-sm-12 col-md-6 offset-md-3 text-center">
          <p className="invite-title fs-1 lh-sm mb-0">// stay tuned...</p>
        </div>

        <div className="col-sm-12 col-md-6 offset-md-3 align-self-end text-center">
          <p>// from T3hCyberRat with l0v3</p>
        </div>
      </div>
    </div>
  );
}
