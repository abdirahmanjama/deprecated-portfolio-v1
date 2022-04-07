import React from "react";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const data = {
  copyright: `Copyright © ${new Date().getFullYear()} Abdirahman Jama. All Rights Reserved.`,
  roles: ["developer", "human", "student"],
  author: {
    name: "Abdirahman Jama",
    accounts: [
      {
        key: "1",
        url: "https://github.com/abdirahmanjama",
        label: "Github Account",
        type: "github",
        icon: <FaGithub />,
      },
      {
        key: "3",
        url: "https://abdirahman-jama.medium.com/",
        label: "Medium",
        type: "medium",
        icon: <FaMedium />,
      },
      {
        key: "4",
        url: "https://www.linkedin.com/in/abdirahman-jama-b3204412b/",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />,
      },

      {
        key: "5",
        url: "mailto:abdirahman.jamaaa@gmail.com",
        label: "Mail Abdirahman",
        type: "gray",
        icon: <FiMail />,
      },
    ],
  },
};

export default data;
