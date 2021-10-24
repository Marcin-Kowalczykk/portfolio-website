import React, { Fragment } from 'react';

import styled from 'styled-components';

const Li = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: #ffffffbe;
  padding: 0.5em;
  margin-top: 1em;
  margin-right: 1em;
  box-shadow: 3px 2px 2px rgba(0, 0, 0, 0.5);
  transition: box-shadow 150ms ease-in, background 150ms linear;

  &:hover {
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.993);
    background: white;
  }
`;

const Img = styled.img`
  width: 300px;
  height: 300px;
  transition: width 150ms ease, height 150ms ease;

  &:hover {
    width: 315px;
    height: 315px;
  }
`;

const Footer = styled.footer`
  display: flex;
`;

const Icon = styled.div`
  margin: 0.5em;
  cursor: pointer;
`;

const Link = styled.a`
  outline: none;
  color: #5c5a5a;
  font-size: 1.5em;
  transition: font-size 200ms linear, color 200ms linear;

  &:visited {
    text-decoration: none;
  }

  &:hover {
    color: black;
    font-size: 1.6em;
  }
`;

const ProjectIcon = ({ img, title, desc, gh, page }) => {
  return (
    <Fragment>
      <Li>
        <Link href={page} target="__blank">
          <Img src={img} alt="project-foto" />
        </Link>
        <h3>{title}</h3>
        <p>{desc}</p>
        <Footer>
          <Icon>
            <Link href={gh} target="__blank">
              <i className="fab fa-github"></i>
            </Link>
          </Icon>
          <Icon>
            <Link href={page} target="__blank">
              <i className="fas fa-globe"></i>
            </Link>
          </Icon>
        </Footer>
      </Li>
    </Fragment>
  );
};

export default ProjectIcon;
