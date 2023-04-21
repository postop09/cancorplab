import React from "react";
import styles from "@/styles/Home.module.css";
import styled from "styled-components";

const Title = () => {
  return (
    <div className={styles.description}>
      <div>
        <a href="#" target="_blank" rel="noopener noreferrer">
          By<SiteName>CANLab</SiteName>
        </a>
      </div>
      <p>
        Get started by&nbsp;
        <code className={styles.code}>LOL-champ</code>
      </p>
    </div>
  );
};

export default Title;

const SiteName = styled.span`
  font-size: 1.8rem;
  font-weight: bold;
`;
