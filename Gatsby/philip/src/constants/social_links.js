import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaTwitterSquare,
  FaGithub,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/philipsanm/",
  },
  {
    id: 2,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://github.com/PhilipSanM",
  },
  {
    id: 3,
    icon: <FaYoutube className="social-icon"></FaYoutube>,
    url: "https://www.youtube.com/channel/UCMRk28DnkUTdiNdVc-ZuK_Q",
  },
  {
    id: 4,
    icon: <FaInstagram className="social-icon"></FaInstagram>,
    url: "https://www.instagram.com/philipsanm/",
  },
  {
    id: 5,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://twitter.com/PhilipSanM_",
  },
  {
    id: 6,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.facebook.com/profile.php?id=100081291668294",
  },
]

export default data
