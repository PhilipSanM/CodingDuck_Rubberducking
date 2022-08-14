import React from "react"
import { FaCode, FaSketch, FaRobot } from "react-icons/fa"
import { SiIbm } from "react-icons/si"
import { GiSchoolBag } from "react-icons/gi"
const associations = [
  {
    id: 1,
    icon: <GiSchoolBag className="service-icon" />,
    title: "Lambda Club",
    text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
  },
  {
    id: 2,
    icon: <FaRobot className="service-icon" />,
    title: "robotics association",
    text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
  },
  {
    id: 3,
    icon: <SiIbm className="service-icon" />,
    title: "IBM zSystem Student Ambassador",
    text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
  },
  {
    id: 4,
    icon: <FaCode className="service-icon" />,
    title: "ACM Student / algorithm club",
    text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
  },
]

export default associations
