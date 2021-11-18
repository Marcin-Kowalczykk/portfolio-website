import React from 'react';

import MarcinKowalczykCV from '../data/Marcin-Kowalczyk.pdf';
import AboutMeIMG from '../data/images/AboutMeIMG.png';
import { AboutText } from '../data/ProjectsData';

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
          <p>{AboutText}</p>
        </TextSection>
      </ImgDescArea>
      <Footer>
        <Button>
          <form action="">
            <Link href={MarcinKowalczykCV} download="">
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
