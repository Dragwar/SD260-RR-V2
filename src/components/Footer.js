import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer className="Footer">
        <div>
          <h3>social-links</h3>

          <ul id="footer-social-links">
            <li>GitHub</li>
            <li>Twitter</li>
            <li>Thanks</li>
          </ul>
        </div>

        <div>
          <h3>helpful-links</h3>

          <ul id="footer-helpful-links">
            <li>Mozilla MDN Docs</li>
            <li>W3Schools</li>
            <li>TylerMcGinnis's lessons</li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
