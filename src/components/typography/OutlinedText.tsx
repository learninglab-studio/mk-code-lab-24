import React from 'react';
import styles from './OutlinedText.module.css'; // Import the CSS module

const OutlinedText = ({ children }) => {
  return (
    <svg width="500" height="200" viewBox="0 0 400 200">
      <text
        x="50%"
        y="50%"
        text-anchor="middle"
        dominant-baseline="middle"
        className={styles['outlined-text']}
      >
        {children}
      </text>
    </svg>
  );
};

export default OutlinedText;
