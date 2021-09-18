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
        key: '1',
        url: 'https://github.com/abdirahmanjama',
        label: 'Github Account',
        type: 'github',
        icon: <FaGithub />
      },
      {
        key: '3',
        url: 'https://abdirahman-jama.medium.com/',
        label: 'Medium',
        type: 'medium',
        icon: <FaMedium />
      },
      {
        key: '4',
        url: 'https://www.linkedin.com/in/abdirahman-jama-b3204412b/',
        label: 'LinkedIn Account',
        type: 'linkedin',
        icon: <FaLinkedin />
      },
      
      {
        key: '5',
        url: 'mailto:abdirahman.jamaaa@gmail.com',
        label: 'Mail Abdirahman',
        type: 'gray',
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;