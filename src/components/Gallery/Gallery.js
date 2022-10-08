import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ThumbCard from "../Card/ThumbCard";

import { userData } from "../Data/Data";

import "./Gallery.css";

export default function Gallery() {
  return (
    <section className="gallery-section">
      <Container>
        <Row>
          {userData.map((info, index) => (
            <ThumbCard key={index} data={info} />
          ))}
        </Row>
      </Container>
    </section>
  );
}
