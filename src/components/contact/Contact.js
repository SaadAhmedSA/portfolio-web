import React, { useState } from "react";
import { Button, Container, Spinner } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
// import { sendData } from "../../Assets/config/firebase/firebaseMethods";

function Contact() {
  //states
  const [names, setNames] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "117d8fce-feb9-44dc-bf60-625006809b96");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
    setNames("")
    setEmail("")
    setMessage("")
  };
  
  return (
    <>
      <section>
        <Container fluid id="home">
          <Container className="home-content">
            <h1 className="text-center">GET IN TOUCH</h1>
            <h5 className="text-center">I would like to know the final requirements of your project. Please get in touch with me and share details about your project.</h5>
            <div>
             <form onSubmit={onSubmit}>
             <Form.Control
             required
                placeholder="Name"
                style={{ margin: '0 auto' }}
                className="w-50 mt-5"
                onChange={(e) => setNames(e.target.value)}
                value={names}
              />
              <Form.Control
              required
                placeholder="Email"
                type="email"
                style={{ margin: '0 auto' }}
                className="w-50 mt-3"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <Form.Control
              required
                as="textarea"
                placeholder="Leave a comment here"
                style={{ margin: '0 auto', height: '10rem ' }}
                className="w-50 mt-3"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
              <div className="text-center">
                <Button type="submit" className='mt-5'>Send message</Button>
                <p className="mt-5">{result}</p>
                </div>
             </form>
               
            </div>
          </Container>
        </Container>
      </section>
    </>
  );
}

export default Contact;
