import React from "react"
import { FaCode, FaSketch, FaRobot } from "react-icons/fa"
import { SiIbm } from "react-icons/si"
import { GiSchoolBag } from "react-icons/gi"
const associations = [
  {
    id: 1,
    icon: <GiSchoolBag className="service-icon" />,
    title: "Lambda Club",
    text: `Lambda Club is a space built for students, in order to participate in educational activities and provide growth opportunities in the technological area.`,
    link: `https://lambda-club.com/`,
  },
  {
    id: 2,
    icon: <FaRobot className="service-icon" />,
    title: "ARACT association",
    text: `Association for Applied Robotics and Technology Sciences.`,
    link: `https://roboticamexicana.org/`,
  },
  {
    id: 3,
    icon: <SiIbm className="service-icon" />,
    title: "IBM zSystem Student Ambassador",
    text: `The IBM zSystems mainframe technology powers the world's biggest businesses. It is EVERYWHERE around you. IBM zSystems powers ATM cards, credit cards, airline reservations, hotel reservations, retail shopping & so much more! `,
    link: `https://community.ibm.com/community/user/ibmz-and-linuxone/groups/group-home?CommunityKey=27b746cd-ca36-49bb-a1ad-01e7aec7d9aa`,
  },
  {
    id: 4,
    icon: <FaCode className="service-icon" />,
    title: "ACM Student / algorithm club",
    text: `Algorithm Club of the Superior School of Computer Science, focused on training students to participate in programming competitions at a national and international level.`,
    link: `https://www.facebook.com/algoritmiaescom`,
  },
]

export default associations
