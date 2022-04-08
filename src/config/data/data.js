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
  blogs: [
    {
      id: 1,
      title: "Tips for landing your first developer role!",
      tags: "career, coding, compsci, algorithms, design, systems",
      description:
        "Do you know how to build a large scale distributed system that can handle 100 million requests?",
      articleUrl: "https://medium.com/p/d552075c1b74",
    },
    {
      id: 2,
      title: "Deep dive: CI/CD",
      tags: "react, chakraui, jest, aws, css, html, javascript",
      description:
        "Learn how to build a fully automated, cloud native CI/CD pipeline!",
      articleUrl:
        "https://medium.com/@abdirahman-jama/set-up-a-cloud-native-ci-cd-pipeline-in-under-7-minutes-using-aws-codepipeline-s3-and-codebuild-1b6166daf694",
    },
    {
      id: 3,
      title: "Event-driven architectures",
      tags: "eventbridge, lambda, python, aws, devops",
      description:
        "Learn how to build event driven architecture within your AWS environment!",
      articleUrl:
        "https://towardsaws.com/set-up-a-chatops-notifications-service-within-your-aws-environment-in-5-minutes-using-eventbridge-4e22111d36ee",
    },
  ],
};

export default data;
