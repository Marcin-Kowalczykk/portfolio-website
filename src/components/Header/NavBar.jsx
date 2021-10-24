import React, { useState, useEffect } from 'react';

import {
  Navigation,
  H2Name,
  ExpandIcon,
  Section,
  Ul,
  Li,
  LiText,
  Link,
  Icons,
} from './NavBar-styling';

const NavBar = ({ onShowModal }) => {
  const [windowWitdh, setWindowWidth] = useState(window.innerWidth);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.addEventListener('resize', handleResize);
    };
  }, [windowWitdh]);

  return (
    <Navigation isExpand={isClicked}>
      <H2Name>Marcin Kowalczyk</H2Name>
      {windowWitdh < 700 && (
        <ExpandIcon isExpand={isClicked}>
          <i
            className="fas fa-grip-lines"
            onClick={() => {
              setIsClicked((previous) => !previous);
            }}
          ></i>
        </ExpandIcon>
      )}
      {windowWitdh < 700 && isClicked && (
        <Section isExpand={isClicked}>
          <Ul isExpand={isClicked}>
            <LiText isExpand={isClicked}>
              <Link href="#HomeArea">Strona Główna</Link>
            </LiText>
            <LiText onClick={onShowModal} isExpand={isClicked}>
              O mnie
            </LiText>
            <LiText isExpand={isClicked}>
              <Link href="#ProjectsArea">Projekty</Link>
            </LiText>
          </Ul>
          <Icons isExpand={isClicked}>
            <Li>
              <Link href="https://github.com/Marcin-Kowalczykk" target="__blank">
                <i className="fab fa-github"></i>
              </Link>
            </Li>
            <Li>
              <Link href="" target="__blank">
                <i className="fab fa-instagram"></i>
              </Link>
            </Li>
            <Li>
              <Link href="" target="__blank">
                <i className="fab fa-linkedin"></i>
              </Link>
            </Li>
            <Li>
              <Link href="" target="__blank">
                <i className="fab fa-facebook"></i>
              </Link>
            </Li>
          </Icons>
        </Section>
      )}
      {windowWitdh > 700 && (
        <Section>
          <Ul>
            <LiText>
              <Link href="#HomeArea">Strona Główna</Link>
            </LiText>
            <LiText onClick={onShowModal}>O mnie</LiText>
            <LiText>
              <Link href="#ProjectsArea">Projekty</Link>
            </LiText>
          </Ul>
          <Ul>
            <Li>
              <Link href="https://github.com/Marcin-Kowalczykk" target="__blank">
                <i className="fab fa-github"></i>
              </Link>
            </Li>
            <Li>
              <Link href="" target="__blank">
                <i className="fab fa-instagram"></i>
              </Link>
            </Li>
            <Li>
              <Link href="" target="__blank">
                <i className="fab fa-linkedin"></i>
              </Link>
            </Li>
            <Li>
              <Link href="" target="__blank">
                <i className="fab fa-facebook"></i>
              </Link>
            </Li>
          </Ul>
        </Section>
      )}
    </Navigation>
  );
};

export default NavBar;
