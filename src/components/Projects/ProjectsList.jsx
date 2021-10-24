import React from 'react';

import styled from 'styled-components';

import ProjectsHeader from './ProjectsHeader';
import ProjectIcon from './ProjectIcon';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2em;
`;

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  list-style: none;
  padding: 0 1em 0 1em;
  margin-left: 1em;
`;

const ProjectsList = ({
  ProjectsArray,
  onFilterReact,
  onFilterJs,
  onAllProjects,
  onSearchData,
}) => {
  const searchingHandler = (inputSearchData) => {
    onSearchData(inputSearchData);
  };

  return (
    <Wrapper>
      <ProjectsHeader
        filterReact={onFilterReact}
        filterJs={onFilterJs}
        filterAll={onAllProjects}
        onSearch={searchingHandler}
      />
      <Ul>
        {ProjectsArray.map((element) => (
          <ProjectIcon
            key={element.id}
            img={element.img}
            title={element.title}
            desc={element.desc}
            gh={element.ghLink}
            page={element.pageLink}
          />
        ))}
      </Ul>
    </Wrapper>
  );
};

export default ProjectsList;
