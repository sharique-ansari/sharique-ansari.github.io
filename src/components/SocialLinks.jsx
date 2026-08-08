import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

import './SocialLinks.css';

const SocialLinks = () => {
  return (
    <div className="social-links delay-300 animate-fade-in-up">
      <a href="https://www.linkedin.com/in/sharique-ansari-b7642412b/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <FaLinkedin size={24} />
      </a>
      <a href="https://github.com/sharique-ansari" target="_blank" rel="noreferrer" aria-label="GitHub">
        <FaGithub size={24} />
      </a>
      <a href="https://leetcode.com/u/shariqueansari/" target="_blank" rel="noreferrer" aria-label="LeetCode">
        <SiLeetcode size={24} />
      </a>
      <a href="https://www.instagram.com/sharique_in/" target="_blank" rel="noreferrer" aria-label="Instagram">
        <FaInstagram size={24} />
      </a>
    </div>
  );
};

export default SocialLinks;
