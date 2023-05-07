import React from "react";
import styles from "@/styles/Home.module.css";
import styled from "styled-components";
import Logo from "@/components/common/Logo";

const Title = () => {
  return (
    <div className={styles.description}>
      <Logo />
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
