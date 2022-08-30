import { Col, Row } from "react-bootstrap";
import "../style/contactme.css";

function ContactMe() {
  const instagram = () => {
    window.location.assign("https://www.instagram.com/imanuel_ant/");
  };
  const whatsapp = () => {
    window.location.assign("https://wa.me/6285156294780");
  };
  const github = () => {
    window.location.assign("https://github.com/ItsELHere");
  };

  return (
    <div className="contact-me">
      <div className="contact-box">
        <div className="contact-h1 ">
          <h1>Contact Me 👋</h1>
        </div>
        <div className="socialMedia ">
          <p>If you interest to my portofolio</p>
          <p>you can contact me or download my cv</p>
          <Row>
            <Col>
              <button className="instagram" onClick={instagram}>
                DM me on Instagram
              </button>
              <button className="whatsapp" onClick={whatsapp}>
                Message me on Whatsapp
              </button>
              <button className="github" onClick={github}>
                See My GitHub
              </button>
              <button
                className="cv"
                onClick={() => {
                  alert("This feature still not available");
                }}
              >
                Download My CV
              </button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
