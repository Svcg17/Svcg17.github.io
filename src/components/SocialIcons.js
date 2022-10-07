import React from "react"
import Github from "../assets/Github.svg"
import LinkedIn from "../assets/LinkedIn.svg"

const SocialIcons = () => (
  <ul className="socialIcons">
    <li>
      <a href="https://www.linkedin.com/in/sofiacheung/">
        <img src={LinkedIn} alt="link to LinkedIn account" />
      </a>
    </li>
    <li>
      <a href="https://github.com/Svcg17">
        <img src={Github} alt="link to Github account" />
      </a>
    </li>
  </ul>
)

export default SocialIcons
