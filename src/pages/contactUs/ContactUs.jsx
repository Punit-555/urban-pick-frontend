import "./contactUs.css"
function ContactUs() {
  return (
    <div className='box2'>
        <h2>Contact Us</h2>
        <p>We'd love to hear from you! Fill out the form and we'll be in touch <br />shortly</p>
        <input className='field' type="text" placeholder='Your Name' />
        <input className='field' type="text" placeholder='Your Email' />
    <textarea  className="field" rows="6" cols="30" placeholder="Your Message"></textarea>
<button className='saveBtn2'>Send Message</button>
    </div>
  )
}

export default ContactUs