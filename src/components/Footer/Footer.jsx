import "./footer.css";
import youtube from '../../images/youtube.png'
import instagramm from '../../images/instagramm.png'
import facebook from '../../images/facebook.png'
import twitter from '../../images/twitter.png'


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__icons">
        <a href="#">
          <img src={youtube} alt="YouTube" />
        </a>
        <a href="#">
          <img src={instagramm} alt="Instagram" />
        </a>
        <a href="#">
          <img src={facebook} alt="Facebook" />
        </a>
        <a href="#">
          <img src={twitter} alt="Twitter" />
        </a>
      </div>

      <p className="footer__copy">f&b ® 2020</p>
    </footer>
  );
}
