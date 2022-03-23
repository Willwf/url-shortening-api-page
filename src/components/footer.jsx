import logo from "../assets/logo.svg";

import facebookIcon from "../assets/icon-facebook.svg";
import twitterIcon from "../assets/icon-twitter.svg";
import pinterestIcon from "../assets/icon-pinterest.svg";
import instagramIcon from "../assets/icon-instagram.svg";

export function Footer() {
  return (
    <footer>
      <a href="#">
        <img src={logo} alt="Shortly Logo" className="h-10" />
      </a>

      <div>
        <p>Features</p>
        <a href="#">Link Shortening</a>
        <a href="#">Branded Links</a>
        <a href="#">Analytics</a>
      </div>

      <div>
        <p>Resources</p>
        <a href="#">Blog</a>
        <a href="#">Developers</a>
        <a href="#">Support</a>
      </div>

      <div>
        <p>Company</p>
        <a href="#">About</a>
        <a href="#">Our Team</a>
        <a href="#">Careers</a>
        <a href="#">Contact</a>
      </div>

      <div>
        <a href="#">
          <img src={facebookIcon} alt="Facebook Icon" />
        </a>
        <a href="#">
          <img src={twitterIcon} alt="Twitter Icon" />
        </a>
        <a href="#">
          <img src={pinterestIcon} alt="Pinterest Icon" />
        </a>
        <a href="#">
          <img src={instagramIcon} alt="Instagram Icon" />
        </a>
      </div>
    </footer>
  );
}
