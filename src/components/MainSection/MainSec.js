import NavBar from "../Navigation/NavBar";
import Gallery from "../Gallery/Gallery";
import "./MainSec.css";

export default function MainSec() {
  return (
    <section className="main-section">
      <div className="cont-fluid">
        <NavBar />
        <Gallery />
      </div>
    </section>
  );
}
