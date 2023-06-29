import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Logo = () => {
  return (
    <H1>
      <Link href="/">
        By<SiteName>CANLab</SiteName>
      </Link>
    </H1>
  );
};

export default Logo;

const H1 = styled.h1`
  a {
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
    transition: color 0.15s;

    &:hover {
      color: ${({ theme }) => theme.COLOR.txtStrong};
    }
  }
`;

const SiteName = styled.span`
  font-size: 1.8rem;
  font-weight: bold;
  transition: color 0.15s;

  &:hover {
    color: ${({ theme }) => theme.COLOR.txtStrong};
  }
`;
