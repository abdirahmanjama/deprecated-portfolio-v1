import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaMedium
} from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Abdirahman Jama. All Rights Reserved.`,
  author: {
    name: 'Abdirahman Jama',
    accounts: [
      {
        url: 'https://github.com/abdirahmanjama',
        label: 'Github Account',
        type: 'gray',
        icon: <FaGithub />
      },
      {
        url: 'https://instagram.com/abdirahmancodes',
        label: 'Instagram',
        type: 'instagram',
        icon: <FaTwitter />
      },
      {
        url: 'https://medium.com/abdirahman-jama',
        label: 'Medium',
        type: 'gray',
        icon: <FaMedium />
      },
      {
        url: 'https://www.linkedin.com/in/abdirahman-jama-b3204412b/',
        label: 'LinkedIn Account',
        type: 'linkedin',
        icon: <FaLinkedin />
      },
      
      {
        url: 'mailto:abdirahman.jamaaa@gmail.com',
        label: 'Mail Abdirahman',
        type: 'gray',
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;