import { CONTACT } from "@/data/site";
import { Envelope, Facebook, Instagram, Linkedin, MapMarker, Phone, Youtube } from "./Icons";

const quickLinks = ["Home", "About us", "Products", "Why Choose Us", "Contact us"];
const footerProducts = [
  "Wireless Router",
  "Epon Olt",
  "POE Switch",
  "Splicing Machine",
  "Fusion Splicer",
  "Optical Network Unit",
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-overlay" />
      <div className="footer-inner">
        <div className="footer-cols">
          <div className="footer-col footer-col-about anim-hidden" data-anim="fadeIn">
            <h5>About us </h5>
            <p>
              We are a dynamic, forward-thinking company specializing in the design, manufacturing, and
              sale of cutting-edge telecom equipment, along with providing comprehensive IT solutions
              tailored to meet the diverse needs of both individuals and businesses.
            </p>
          </div>

          <div className="footer-col footer-col-links anim-hidden" data-anim="fadeIn" data-anim-delay="250">
            <h5>Quick Links</h5>
            <ul className="footer-list">
              {quickLinks.map((l) => (
                <li key={l}>➤ {l}</li>
              ))}
            </ul>
          </div>

          <div className="footer-col footer-col-products anim-hidden" data-anim="fadeIn" data-anim-delay="500">
            <h5>Our Products</h5>
            <ul className="footer-list">
              {footerProducts.map((l) => (
                <li key={l}>➤ {l}</li>
              ))}
            </ul>
          </div>

          <div className="footer-col footer-col-locations anim-hidden" data-anim="fadeIn" data-anim-delay="750">
            <h5>Locations</h5>
            <ul className="footer-list footer-list-icons">
              <li>
                <span className="footer-list-icon"><Envelope /></span>
                <span>{CONTACT.email}</span>
              </li>
              <li>
                <span className="footer-list-icon"><Phone /></span>
                <span>{CONTACT.phone}</span>
              </li>
              <li>
                <span className="footer-list-icon"><MapMarker /></span>
                <span>{CONTACT.address}</span>
              </li>
            </ul>
            <h5>Follow Us</h5>
            <div className="social-icons social-icons-footer">
              <a href="#" target="_blank" aria-label="Facebook"><Facebook /></a>
              <a href="#" target="_blank" aria-label="Instagram"><Instagram /></a>
              <a href="#" target="_blank" aria-label="Youtube"><Youtube /></a>
              <a href="#" target="_blank" aria-label="Linkedin"><Linkedin /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-inner">
            <div className="footer-copyright anim-hidden" data-anim="fadeIn">
              <span>Copyright © {new Date().getFullYear()} SNS IT SOLUTIONS | Powered by <a href="https://www.cybertricksmedia.com/" target="_blank">Cybertricksmedia Pvt Ltd</a></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
