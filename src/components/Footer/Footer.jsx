import React, { useState } from 'react';

import {
  NotExpandWrapper,
  Button,
  ExpandWrapper,
  DataSection,
  Label,
  Wrapper,
} from './Footer-style';

const Footer = () => {
  const [isClicked, setIsClicked] = useState(false);
  let content = (
    <NotExpandWrapper>
      <Button
        onClick={() => {
          setIsClicked((prev) => !prev);
        }}
      >
        Contact <i className="fas fa-chevron-up"></i>
      </Button>
    </NotExpandWrapper>
  );

  if (isClicked) {
    content = (
      <ExpandWrapper isShowed={isClicked}>
        <Button
          onClick={() => {
            setIsClicked((prev) => !prev);
          }}
        >
          Contact <i className="fas fa-chevron-down"></i>
        </Button>
        <DataSection>
          <Label htmlFor="telephone">Telefon: </Label>
          <span id="telephone">785931007</span>
        </DataSection>
        <DataSection>
          <Label htmlFor="e-mail">E-mail: </Label>
          <span id="e-mail">kowalczyk.marcin1997@gmail.com</span>
        </DataSection>
      </ExpandWrapper>
    );
  }

  return <Wrapper>{content}</Wrapper>;
};

export default Footer;
