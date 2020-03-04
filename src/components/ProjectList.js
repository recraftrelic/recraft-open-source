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

                  let highlight = index %2 == 0 ? this.props.highlightAlternate.map((data,index) => {
                    return data.highlightColor}): null

                  return <>
                    <section className="section" style={{backgroundColor:highlight}}>
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
