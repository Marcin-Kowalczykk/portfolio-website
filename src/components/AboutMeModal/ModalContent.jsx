import React from 'react';

import AboutMeIMG from '../data/images/AboutMeIMG.png';

import {
  ContentWrapper,
  ImgDescArea,
  Img,
  TextSection,
  Footer,
  Button,
  Link,
  Label,
} from './ModalContent-styling';

const ModalContent = () => {
  return (
    <ContentWrapper>
      <ImgDescArea>
        <section>
          <Img src={AboutMeIMG} alt="" width="580" height="620" />
        </section>
        <TextSection>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione iste
            aperiam cupiditate soluta! Accusamus voluptate, tempore fugit mollitia
            consequuntur assumenda vel asperiores! Id aspernatur earum laudantium
            repellendus assumenda, molestiae dicta.
          </p>
        </TextSection>
      </ImgDescArea>
      <Footer>
        <Button>
          <form action="">
            <Link href={AboutMeIMG} download="">
              <Label htmlFor="download">Pobierz moje CV !</Label>
              <i className="fas fa-download" id="download"></i>
            </Link>
          </form>
        </Button>
      </Footer>
    </ContentWrapper>
  );
};

export default ModalContent;
