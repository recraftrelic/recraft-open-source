import React from 'react';
import dynamicData from './dynamic.json';
import './style/App.css';
import Projects from './components/Projects';
import TeamMembers from './components/TeamMembers';

function App() {
  return (
    <div className="App">
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
            <Projects
              projectList={data.projects}
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
            <TeamMembers 
              members={data.teams}
            />
          </>
        })
      }
    </div>
  );
}

export default App;
