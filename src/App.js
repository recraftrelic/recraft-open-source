import React from 'react';
import dynamicData from './dynamic.json';
import './style/App.css';
import ProjectList from './components/ProjectList';
import TeamMemberList from './components/TeamMemberList';

function App() {
  return (
    <div className="App">
      <section className="section" style={{paddingTop: 10, paddingBottom: 0}}>
        <div className="container">
        <div className="navbar-menu">
          <div className="navbar-start">
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
          </div>
          <div className="navbar-end">
            {
              dynamicData.navigationBar.map((data,index) => {
                return <>
                  <div className="navbar-item">
                    <a target="_blank" href={data.link} className="navbar-item">
                      <strong>{data.content}</strong>
                    </a>
                  </div>
                </>
              })
            }
          </div>
          </div>
        </div>
      </section>
      {
        dynamicData.mainSection.map((data,index) => {
          return <>
            <section className="section" style={{paddingBottom: 0}}>
              <div className="container">
                <p className="level-item ">
                  <figure className="image is-128x128">
                    <img src={require(`./images/${data.logo}`)} alt="logo" />
                  </figure>
                </p>
              </div>
            </section>
            <section className="section">
              <div className="container">
                <div className="columns is-mobile is-centered">
                  <div className="column is-8">
                    <h1 className="title">{data.heading}</h1>
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
