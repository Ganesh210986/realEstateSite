import React from 'react'
import './Contact.css'
import { ToastContainer,toast} from 'react-toastify';
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c9833587-b4d1-4216-9e03-194bab58b400");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("form submitted successfully");
      event.target.reset();
    } else {
      toast.error("data.message");
      setResult("");
    }
  };

  return (
    <div className='contact-container' id='contact'>
      <div className="contact">
        <h2>Contact Us</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti doloribus cum rerum eius quaerat error, corrupti unde explicabo mollitia vero perferendis quod recusandae eveniet dolorem. Nesciunt suscipit et neque aut.</p>
        <form action="" onSubmit={onSubmit}>
          <div className="name">
            Name
            <input type="text" placeholder='Your Name' name='Name' required/>
        </div>
        <div className="email">
            Email
            <input type="text" placeholder='Your Email' name='email' required/>
        </div>
        <div className="message">
            Message
            <textarea name="message" id="message" placeholder='Your Message'></textarea>
        </div>
        <div className="send-button">
          <button type='submit'>{result?result:"send"}</button>
        </div>
        </form>
        
      </div>
    </div>
  )
}

export default Contact
