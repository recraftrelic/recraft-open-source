import React from 'react';
import dynamicData from './dynamic.json';
import './style/App.css';
import ProjectList from './components/ProjectList';
import TeamMemberList from './components/TeamMemberList';

function App() {
  const [isActive, setIsActive] = React.useState(false);
  return (
    <div className="App">
      <section className="section" style={{paddingTop: 10, paddingBottom: 0}}>
        <div className="container">
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            {
              dynamicData.logoSection.map((data,index) => {
                return <>
                  <div className="navbar-item">
                    <img className="nav-logo" src={data.logo} width="40" height="40" alt="logo" />
                    <h1 className="title nav-heading">{data.name}</h1>
                  </div>
                </>
              })
            }
            <a onClick={() => {setIsActive(!isActive)}} role="button" href="!#" rel="noopener noreferrer" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarTop">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div id="navbarTop" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
            <div className="navbar-end">
            {
              dynamicData.navigationBar.map((data,index) => {
                return <>
                  <div className="navbar-item">
                    <a target="_blank" rel="noopener noreferrer" href={data.link} className="navbar-item">
                      <strong>{data.content}</strong>
                    </a>
                  </div>
                </>
              })
            }
            </div>
          </div>
          </nav>
        </div>
      </section>
      {
        dynamicData.mainSection.map((data,index) => {
          return <>
            <section className="section">
              <div className="container">
                <div className="columns is-mobile is-centered open-source-section">
                  <div className="column is-10">
                    <div class="column is-inline-block">
                      <h1 className="title">{data.mainHeading}</h1>
                    </div>
                    <div class="column is-inline-block">
                      <span className="title icon icon-color"><i className={data.icon}></i></span>
                    </div>
                    <div class="column is-inline-block">
                      <h1 className="title">{data.secondHeading}</h1>
                    </div>
                    <h2 className="subtitle extra-space">
                      {data.description}
                    </h2>
                  </div>
                </div>
              </div>
            </section>
          </>
        })
      }
       {/* <GithubProjects /> */}
      {
        dynamicData.projectSection.map((data,index) => {
          return <>
            <section className="section project" style={{paddingBottom: 50, paddingTop: 10}}>
              <div className="container">
                <p className="level-item has-text-centered">
                  <h1 className="title is-size-1">{data.heading}</h1>
                </p>
              </div>
            </section>
            <ProjectList
              projectList={data.projects}
              highlightAlternate={dynamicData.defaultTheme}
              key={index}
            />
          </>
        })
      }

      {
        dynamicData.teamSection.map((data,index) => {
          return <>
            <section className="section team" style={{paddingTop: 50, paddingBottom: 0}}>
              <div className="container">
                <p className="level-item has-text-centered">
                  <h1 className="title is-size-1">{data.heading}</h1>
                </p>
              </div>
            </section>
            <TeamMemberList
              members={data.teams}
              key={index}
            />
          </>
        })
      }
    </div>
  );
}

export default App;
