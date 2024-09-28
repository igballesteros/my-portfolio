import "./footer.css"
import github from "./img/github.png"
import linkedin from "./img/linkedin-logo.png"


const Footer = () => {
    return(
      <section id="footer" className="footer">
        <div className="container">
          <div className="box">
            <a href="https://github.com/igballesteros">
              <img src={github} alt="Github Logo" className="git"/>
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/ignacio-ballesteros-19122000/">
              <img src={linkedin} alt="Linkedin Logo" className="linkedin"/>
            </a>
          </div>
        </div>
        <div className="signature">
          Ignacio Ballesteros
        </div>
      </section>
    )
}

export default Footer;