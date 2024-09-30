import "./Projects.css"
import device from "./img/device.jpg"
import dashboard from "./img/dashboard.png"
import chat from "./img/live-chat.png"


function Projects() {
    return (
        <section id="projects" className="projects">
            <h1 className="recent">Featured Projects</h1>
            <div className="mar">
              <div className="title">
                <h2>Dish Monitoring System</h2>
              </div>
              <div className="project-left">
                <div className="decoration">
                  <img src={device} alt="" className="image-left"/>
                </div>
                <div className="info">
                  <p className="texts-right">
                    A dish monitoring device with an integrated alert system. Built using a 
                    Raspberry Pi 4, an ultrasonic sensor, Python, and Flask. The web server 
                    is configured to actively listen for incoming HTTP POST requests specifically 
                    directed to the &quot;./data&quot; endpoint.
                  </p>
                  <a href="https://github.com/igballesteros/dish-device" target="_blank">
                    <button className="button-9" role="button">Go to Code</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="mar">
              <div className="separator-right">
                <div className="box-right"></div>
              </div>
              <div className="title-right">
                <h2 className="other-project">Finance Dashboard</h2>
              </div>
              <div className="project-right">
                <div className="info">
                  <p className="texts-left">A finance dashboard that displays realtime data to the user. Built using 
                    Next.js, Vercel, and PostgreSQL. This fullstack project was created to have a better
                    grasp on popular frameworks and technologies such as Vercel.
                  </p>
                  <a href="https://github.com/igballesteros/nextjs-practice" target="_blank">
                    <button className="button-9" role="button">Go to Code</button>
                  </a>
                </div>
                <div className="decoration">
                  <img src={dashboard} alt="" className="image-right" />
                </div>
              </div>
            </div>
            <div className="mar">
              <div className="separator-left">
                <div className="box-left"></div>
              </div>
              <div className="title">
                <h2 className="other-project">Live Chat</h2>
              </div>
              <div className="project-left">
                <div className="decoration">
                  <img src={chat} alt="" className="image-left" />
                </div>
                <div className="info">
                  <p className="texts-right">A live chat application that allows users to sign in to the platform using
                    their email and chat with other users. Built with React, Firebase, and Zustand.
                    Helped me better understand technologies such as Firebase and concepts such as server
                    interactions.
                  </p>
                  <a href="https://github.com/igballesteros/react-chat" target="_blank">
                    <button className="button-9" role="button">Go to Code</button>
                  </a>
                </div>
              </div>
              <div className="separator-right">
                <div className="box-right"></div>
              </div>
            </div>
        </section>
    )
}

export default Projects 