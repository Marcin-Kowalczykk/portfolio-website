import React, { Fragment, useState } from 'react';

import GlobalStyle from './components/Ui/globalStyle';

import './App.css';

import NavBar from './components/Header/NavBar';
import Header from './components/Header/Header';
import ProjectsList from './components/Projects/ProjectsList';
import Footer from './components/Footer/Footer';

import AboutMeModal from './components/AboutMeModal/AboutMeModal';

import { ProjectsData } from './components/data/ProjectsData';

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [projects, setProjects] = useState(ProjectsData);

  const allProjects = ProjectsData;

  const showModalHandler = () => {
    setIsClicked((prev) => !prev);
  };

  const filtersReactHandler = () => {
    const filteredReact = allProjects.filter((element) =>
      element.id.includes('React')
    );
    setProjects(filteredReact);
  };

  const filtersJsHandler = () => {
    const filteredJs = allProjects.filter((element) => element.id.includes('JS'));
    setProjects(filteredJs);
  };

  const allProjectsHandler = () => {
    setProjects(allProjects);
  };

  const searchingByInput = (data) => {
    const filteredByInput = allProjects.filter((element) =>
      element.title.includes(data)
    );
    setProjects(filteredByInput);
    // console.log(filteredByInput);
    // console.log(data);
  };

  return (
    <Fragment>
      <GlobalStyle />
      <NavBar onShowModal={showModalHandler} />
      {isClicked && <AboutMeModal onShowModal={showModalHandler} />}
      <Header />
      <ProjectsList
        ProjectsArray={projects}
        onFilterReact={filtersReactHandler}
        onFilterJs={filtersJsHandler}
        onAllProjects={allProjectsHandler}
        onSearchData={searchingByInput}
      />
      <Footer />
    </Fragment>
  );
}

export default App;
