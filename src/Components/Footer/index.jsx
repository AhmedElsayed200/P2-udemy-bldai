import nasdaqLogo from "../../Resources/SVGs/NASDAQ_Logo.svg";
import volkswagenLogo from "../../Resources/SVGs/Volkswagen_logo.svg";
import boxIncLogo from "../../Resources/SVGs/Box_Inc._logo.svg";
import netappLogo from "../../Resources/SVGs/NetApp.svg";
import eventbriteLogo from "../../Resources/SVGs/Eventbrite_Logo.svg";
import language from "../../Resources/SVGs/language.svg";
import udemyLogo from "../../Resources/images/udemy_logo.png";

const Footer = () => {
  return (
    <div id="footer">
      <div id="footerHeader">
        <div id="footerHeaderTxt">
          Top companies choose <span>Udemy Business</span> to build in-demand
          career skills.
        </div>
        <div id="footerHeaderCompanies">
          <img src={nasdaqLogo} alt="nasdaq" />
          <img src={volkswagenLogo} alt="volkswagen" />
          <img src={boxIncLogo} alt="boxInc" />
          <img src={netappLogo} alt="netapp" />
          <img src={eventbriteLogo} alt="eventbrite" />
        </div>
      </div>
      <div id="footerContent">
        <button>
          <img src={language} alt="language" />
          English
        </button>
        <ul>
          <li>Udemy Business</li>
          <li>Teach on Udemy</li>
          <li>Get the app</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Carrers</li>
          <li>Blog</li>
          <li>Help and Support</li>
          <li>Affiliate</li>
          <li>Investors</li>
          <li>Terms</li>
          <li>Privacy policy</li>
          <li>Cookie settings</li>
          <li>Sitemap</li>
          <li>Accessibility statement</li>
        </ul>
        <img src={udemyLogo} alt="udemy logo" />
        <div>© 2022 Udemy, Inc.</div>
      </div>
    </div>
  );
};

export default Footer;
