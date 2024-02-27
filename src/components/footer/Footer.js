import './Footer.scss';

const Footer = () => (
  <footer id="footer">
    <section>
      <div className="container">
        <p>Socials:</p>
        <div id="socials">
          <a href="https://www.instagram.com/hackchester/">Instagram</a>
          {/* <a>Discord</a> */}
          <a href="https://manchesterstudentsunion.com/activities/view/hackchester">SU Website</a>
          <a href="https://twitter.com/crackchester">Twitter</a>
        </div>
        <p>
          Contact us at: <a href="mailto:hackchester@manchesterstudentsunion.com">hackchester@manchesterstudentsunion.com</a> or <a href="mailto:hackchestermcr@gmail.com">hackchestermcr@gmail.com</a>
        </p>
        <p>
          © 2023 Hackchester
        </p>
        <p>
        This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.
        </p>
      </div>
    </section>
  </footer>
)

export default Footer;