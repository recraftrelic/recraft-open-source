import React from 'react';
import ProjectItems from './ProjectItems';

export default class ProjectList extends React.Component
{
    render () {
        return (
            <>
              {
                this.props.projectList.map((data,index) => {
                  let leftAlign = "column is-4 is-pulled-left"
                  let rightAlign = "column is-8 is-pulled-right"
  
                  if(data.align == "right") {
                    leftAlign = "column is-4 is-pulled-right"
                    rightAlign = "column is-8 is-pulled-left"
                  }
  
                  if(data.align == "center") {
                    leftAlign = "column is-12"
                    rightAlign = "column is-12"
                  }
                  return <>
                    <section className={index %2 == 0 ? "section alternate" : "section"}>
                      <div className="container">
                        <div className="columns is-mobile is-centered">
                          <div className="column is-8">
                            <ProjectItems
                              items={data}
                              left={leftAlign}
                              right={rightAlign}
                            />
                          </div>
                        </div>
                      </div>
                    </section>
                  </>
                })
              }
            </>
        );
    }
}
