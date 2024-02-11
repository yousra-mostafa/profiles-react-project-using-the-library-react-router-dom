import "./General.css";
import "./GeneralSection.css";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function About() {
  return (
    // <!-- -------------------------about section----------- -->
    <section id="About">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>
        <div className="row content">
          <div className="col">
            <ul>
              <li>
                <FontAwesomeIcon icon="fa-solid fa-circle-chevron-right" />{" "}
                <strong>Birthday:</strong> <span>1 May 1998</span>
              </li>
              <li>
                <FontAwesomeIcon icon="fa-solid fa-circle-chevron-right" />{" "}
                <strong>Email:</strong>
                <span>yousraamostaffa010@gmail.com</span>
              </li>
              <li>
                <FontAwesomeIcon icon="fa-solid fa-circle-chevron-right" />{" "}
                <strong>Phone:</strong>
                <span>123 456 7890</span>
              </li>
              <li>
                <FontAwesomeIcon icon="fa-solid fa-circle-chevron-right" />{" "}
                <strong>City:</strong>
                <span> Aswan , Egypt</span>
              </li>
              <li>
                <FontAwesomeIcon icon="fa-solid fa-circle-chevron-right" />{" "}
                <strong>blood type:</strong>
                <span> A+</span>
              </li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li>
                <FontAwesomeIcon icon="fa-solid fa-circle-chevron-right" />{" "}
                <strong>Age:</strong>
                <span>25</span>
              </li>
              <li>
                <FontAwesomeIcon icon="fa-solid fa-circle-chevron-right" />{" "}
                <strong>Gender:</strong>
                <span>Femail</span>
              </li>
              <li>
                <FontAwesomeIcon icon="fa-solid fa-circle-chevron-right" />{" "}
                <strong>Points:</strong> <span>100</span>
              </li>
              <li>
                <FontAwesomeIcon icon="fa-solid fa-circle-chevron-right" />{" "}
                <strong>Status:</strong>
                <span>Available</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
