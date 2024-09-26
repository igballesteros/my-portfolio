import "./contact.css"

function Contact() {
    return (
      <>
        <section id="contact" className="contact">
          <h1>Contact</h1>
          <div className="box">
            <p>
              Have a Question? Would you like to get in touch? Leave me a message and I&quot;ll get back
              to you as soon as possible.
            </p>
            <form action="" className="contact-form" >
              <input className="name" type="text" placeholder="Name"/>
              <input className="email" type="text" placeholder="Email"/>
              <textarea name="" id="" className="message" placeholder="Message"></textarea>
              <div>
                <div>
                </div>
                <div></div>
                <div></div>
                <button className="submit">Submit</button>
              </div>
            </form>
          </div>
        </section>
      </>
    )
}

export default Contact