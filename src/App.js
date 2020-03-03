import React from 'react';
import dynamicData from './dynamic.json';
import './style/App.css';
import ProjectManager from './components/ProjectManager';
import TeamManager from './components/TeamManager';

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
            {
              data.projects.map((data,index) => {
                let leftAlign = "column is-4 is-pulled-left"
                let rightAlign = "column is-8 is-pulled-right"

                if(index %2 == 0) {
                  leftAlign = "column is-4 is-pulled-left"
                  rightAlign = "column is-8 is-pulled-right"
                }

                if(index %2 == 1) {
                  leftAlign = "column is-4 is-pulled-right"
                  rightAlign = "column is-8 is-pulled-left"
                }

                if(index == 2) {
                  leftAlign = "column is-12"
                  rightAlign = "column is-12"
                }
                return <>
                  <ProjectManager
                    class={index %2 == 0}
                    leftSection={leftAlign}
                    rightSection={rightAlign}
                    projectImage={require(`./images/${data.image}`)}
                    projectLink={data.link}
                    projectHeading={data.heading}
                    mainDescription={data.mainDesc}
                    secondDescription={data.secondDesc}
                    technologies={data.technologies}
                    contributors={data.contribution}
                  />
                </>
              })
            }
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
            <section className="section">
              <div className="container">
                <div className="columns is-mobile is-centered">
                  <div className="column is-8">
                    {
                      data.teams.map((data,index) => {
                        return <>
                          <TeamManager 
                            teamImage={require(`./images/${data.image}`)}
                            teamTitle={data.title}
                            teamBio={data.bio}
                            socialIcons={data.socialIcons}
                          />
                        </>
                      })
                    }
                  </div>
                </div>
              </div>
            </section>
          </>
        })
      }
    </div>
  );
}

export default App;
