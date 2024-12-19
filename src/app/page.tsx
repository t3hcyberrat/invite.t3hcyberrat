import "./home.css";
import Logo from "./assets/logo.png";

export default function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-6 offset-md-3 text-center px-0 mh-400">
          <img src={Logo.src} className="logo-img" />
        </div>

        <div className="col-sm-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4">
          <p className="mb-0">T3hCyberRat, .connection & SOC studio are throwing a holiday bash and YOU'RE INVITED!</p>

          <p>
            Join us for an evening of merriment, music, and making memories (or just plain old having fun).
          </p>

          <p className="important-shit">Date: 03.01.2025</p>
          <p className="important-shit">Time: To be determined (but most likely around 22)</p>
          <p className="important-shit">Location: SOC Studio - if you know, you know</p>

          <p className="mb-0">Dress code: Festive vibes only (hoodies, sweatpants, and holiday cheer encouraged)</p>
          <p className="mb-0">See you there, minions!</p>
        </div>

        <div className="col-sm-12 col-md-6 offset-md-3 align-self-end text-center">
          <p>// from T3hCyberRat with l0v3</p>
        </div>
      </div>
    </div>
  );
}
