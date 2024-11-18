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
          <p className="invite-title fs-1 lh-sm mb-0">Welcome 127.0.0.1</p>
        </div>

        <div className="col-sm-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4">
          <p className="mb-0">T3hCyberRat, .connection & SOC studio are throwing a holiday bash and YOU'RE INVITED!</p>

          <p>
            Join us for an evening of merriment, music, and making memories (or just plain old having fun).
          </p>

          <p className="important-shit">Date: [Insert Date]</p>
          <p className="important-shit">Time: [Insert Time]</p>
          <p className="important-shit">Location: [Insert Location]</p>

          <p className="mb-0">Dress code: Festive vibes only (hoodies, sweatpants, and holiday cheer encouraged)</p>
          <p className="mb-0">See you there, minions!</p>
        </div>

        {/* <div className="col-12">
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>

            <button type="submit" className="btn btn-link submit-btn">Submit</button>
          </form>
        </div> */}

        <div className="col-sm-12 col-md-6 offset-md-3 align-self-end text-center">
          <p>// from T3hCyberRat with l0v3</p>
        </div>
      </div>
    </div>
  );
}
