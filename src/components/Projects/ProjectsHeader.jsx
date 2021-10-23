import React, { useState } from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #1b1a1aba;
`;

const FiltersWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffffbe;
  border-radius: 5px;
  margin: 1em;
`;

const Filter = styled.p`
  margin: 1em;
  padding-bottom: 3px;
  border-bottom: 1px solid gray;
  cursor: pointer;
`;

const Input = styled.input`
  border: none;
  outline: none;
  border-radius: 5px;
  background: #ffffffbe;
  margin-left: 3px;
  padding: 2px;
`;

const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  color: #1b1a1aba;
  transition: color 500ms linear;

  &:hover {
    color: black;
  }
`;

const ProjectsHeader = ({ filterReact, filterJs, filterAll, onSearch }) => {
  const [inputProjectValue, setInputProjectsValue] = useState('');

  const inputSearchHandler = (event) => {
    setInputProjectsValue(event.target.value);

    onSearch(inputProjectValue);
  };

  return (
    <Wrapper>
      <h1 id="ProjectsArea">Projekty</h1>
      <section>
        <label htmlFor="search">Szukaj</label>
        <Input
          type="text"
          id="search"
          value={inputProjectValue}
          onChange={inputSearchHandler}
        />
      </section>
      <FiltersWrapper>
        <Filter>
          <Button onClick={filterAll}>Wszystkie</Button>
        </Filter>
        <Filter>
          <Button onClick={filterReact}>React</Button>
        </Filter>
        <Filter>
          <Button onClick={filterJs}>JS</Button>
        </Filter>
      </FiltersWrapper>
    </Wrapper>
  );
};

export default ProjectsHeader;
