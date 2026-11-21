import HeroSlider from "@/components/HeroSlider";
import MobileCarousel from "@/components/MobileCarousel";
import ContactForm from "@/components/ContactForm";
import { CONTACT, features, products } from "@/data/site";
import {
  CheckCircle,
  Envelope,
  Facebook,
  Instagram,
  Linkedin,
  MapMarker,
  Phone,
  Youtube,
} from "@/components/Icons";

function ProductMedia({ product }) {
  if (product.layout === "single") {
    return (
      <div className={`image-widget${product.narrow ? " image-widget-narrow" : ""}`}>
        <img src={product.images[0]} alt="" loading="lazy" />
      </div>
    );
  }
  return (
    <div className="image-grid">
      {product.images.map((src, i) => (
        <div className={`image-tile${i === 0 ? " image-tile-enhanced" : ""}`} key={src}>
          <img src={src} alt="" loading="lazy" />
        </div>
      ))}
    </div>
  );
}

function ProductRow({ product, index }) {
  const Title = product.tag;
  const text = (
    <div className="col">
      <Title className="heading capitalize">{product.title}</Title>
      {product.subtitle && <h6 className="heading capitalize subheading">{product.subtitle}</h6>}
      <div className="text-editor">
        <p>{product.text}</p>
      </div>
      <div>
        <a className="btn-pill" href={product.href}>More Info</a>
      </div>
    </div>
  );
  const media = (
    <div className="col">
      <ProductMedia product={product} />
    </div>
  );

  return (
    <section className={`product-row ${index % 2 === 0 ? "bg-grey" : "bg-white"}`}>
      <div className="row">
        {product.media === "left" ? (
          <>
            {media}
            {text}
          </>
        ) : (
          <>
            {text}
            {media}
          </>
        )}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <MobileCarousel />

      {/* About */}
      <section className="about" id="about">
        <div className="row">
          <div className="col anim-hidden" data-anim="fadeInLeft">
            <h2 className="heading heading-primary about-title">Welcome to SNS IT Solutions!</h2>
            <div className="text-editor">
              <p>
                We are a dynamic, forward-thinking company specializing in the design, Importer,
                manufacturing, and sale of cutting-edge telecom equipment, along with providing
                comprehensive IT solutions tailored to meet the diverse needs of both individuals and
                businesses.
              </p>
            </div>
            <ul className="check-list">
              <li>
                <span className="check-list-icon"><CheckCircle /></span>
                <span className="check-list-text">Professional Team Member</span>
              </li>
              <li>
                <span className="check-list-icon"><CheckCircle /></span>
                <span className="check-list-text">Dedicated Tech Services</span>
              </li>
            </ul>
          </div>
          <div className="col anim-hidden" data-anim="fadeInRight" />
        </div>
      </section>

      {/* Products */}
      {products.map((product, i) => (
        <ProductRow product={product} index={i} key={product.href} />
      ))}

      {/* Why choose us */}
      <section className="choose" id="choose">
        <h2 className="heading heading-primary text-center anim-hidden" data-anim="fadeInUp">
          Why Choose SNS IT Solutions?
        </h2>
        <div className="choose-grid">
          {features.map((f, i) => (
            <div className="choose-col" key={f.title}>
              <div className="card anim-hidden" data-anim="fadeInUp" data-anim-delay={i * 250}>
                <div className="card-image">
                  <img src={f.image} alt={f.title} loading="lazy" />
                </div>
                <div className="card-content">
                  <h3 className="card-title">
                    <span>{f.title}</span>
                  </h3>
                  <div className="card-text">
                    <p>{f.text}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="contact" id="contact">
        <div className="contact-overlay" />
        <div className="contact-inner">
          <h2 className="heading contact-title anim-hidden" data-anim="fadeInUp">Get In Touch</h2>
          <div className="text-editor contact-intro anim-hidden" data-anim="fadeInUp">
            <p>Do you have any questions? Don’t hesitate to contact us to know more about us.</p>
          </div>
          <div className="contact-row">
            <div className="contact-col contact-col-form anim-hidden" data-anim="fadeInLeft">
              <h2 className="heading heading-primary">Send Message</h2>
              <ContactForm />
            </div>
            <div className="contact-col contact-col-info">
              <div className="icon-box anim-hidden" data-anim="fadeInRight">
                <span className="icon-box-icon"><MapMarker /></span>
                <div className="icon-box-content">
                  <h5 className="icon-box-title"><span>Address: </span></h5>
                  <p className="icon-box-desc">{CONTACT.address}</p>
                </div>
              </div>
              <div className="icon-box anim-hidden" data-anim="fadeInRight" data-anim-delay="250">
                <span className="icon-box-icon"><Envelope /></span>
                <div className="icon-box-content">
                  <h5 className="icon-box-title"><span>Email ID: </span></h5>
                  <p className="icon-box-desc">{CONTACT.email}</p>
                </div>
              </div>
              <div className="icon-box anim-hidden" data-anim="fadeInRight" data-anim-delay="500">
                <span className="icon-box-icon"><Phone /></span>
                <div className="icon-box-content">
                  <h5 className="icon-box-title"><span>Mobile No: </span></h5>
                  <p className="icon-box-desc">{CONTACT.phone}</p>
                </div>
              </div>
              <h4 className="heading follow-title anim-hidden" data-anim="fadeInUp">Follow Us</h4>
              <div className="social-icons social-icons-contact anim-hidden" data-anim="fadeInUp">
                <a href="#" target="_blank" className="si-facebook" aria-label="Facebook"><Facebook /></a>
                <a href="#" target="_blank" className="si-instagram" aria-label="Instagram"><Instagram /></a>
                <a href="#" target="_blank" className="si-youtube" aria-label="Youtube"><Youtube /></a>
                <a href="#" target="_blank" className="si-linkedin" aria-label="Linkedin"><Linkedin /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
