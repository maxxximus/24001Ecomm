import '../css/App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faXTwitter,
    faYoutube,
    faFacebook,
    faTiktok,
     faInstagram
  } from "@fortawesome/free-brands-svg-icons";



function Footer() {


    
    // parent - App.js
    

  


    return (

<div className='footer'>
<div class="social-container">
      <h5 >Follow Mr.Tee on social media...</h5>
      <a href="#home"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>

      <a href="#home"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="#home" className="twitter social">
        <FontAwesomeIcon icon={faXTwitter} size="2x" />
      </a>
      <a href="#home"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="#home"
        className="tiktok social">
        <FontAwesomeIcon icon={faTiktok} size="2x" />
      </a>

</div>
</div>

    );


    }

export default Footer;