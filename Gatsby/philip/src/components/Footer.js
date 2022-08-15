import React from "react"
import socialLinks from "../constants/social_links"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-line"> </div>
      <div>
        <div className="footer-links social-links">
          {socialLinks.map(link => {
            return (
              <a href={link.url} key={link.id} className="social-link">
                {link.icon}
              </a>
            )
          })}
        </div>
        <h4>copyright &copy; {new Date().getFullYear()}</h4>
        <h4>
          Powered by <a href="https://www.gatsbyjs.com/">Gatsby</a> Made with ❤
          by
          <a href="https://www.gatsbyjs.com/https://github.com/PhilipSanM">
            {" "}
            PhilipSanM
          </a>
        </h4>
      </div>
    </footer>
  )
}

export default Footer
