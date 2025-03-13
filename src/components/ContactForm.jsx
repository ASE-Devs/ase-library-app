import ContactForm from "../components/ContactForm";

const About = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#contact") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div>
      <section>
        <h1>About Us</h1>
        <p>Welcome to ASE Library. We provide a collection of amazing books...</p>
      </section>

      {/* Other About Content */}
      <section>
        <h2>More About Us</h2>
        <p>We connect readers with their favorite books across Ghana.</p>
      </section>

      {/* Contact Section */}
      <ContactForm />
    </div>
  );
};

export default About;
