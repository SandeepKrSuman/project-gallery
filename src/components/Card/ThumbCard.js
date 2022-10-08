import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Credit from "../Credit/Credit";

import "./ThumbCard.css";

export default function ThumbCard(props) {
  const handleClick = () => {
    window.open(`/Projects/${props.data.folderName}/index.html`, "_blank");
  };
  return (
    <Col xs={12} sm={12} md={6} lg={4} className="thumb-card">
      <Image
        src={`/assets/${props.data.imgName}`}
        thumbnail={true}
        fluid={true}
        className="thumb-img"
        onClick={handleClick}
      />
      <Credit
        userName={props.data.name}
        gh={props.data.ghurl}
        art={props.data.artTitle}
      />
    </Col>
  );
}
