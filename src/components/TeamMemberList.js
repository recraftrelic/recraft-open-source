import React from 'react';
import TeamMembers from './TeamMembers';

export default class TeamMemberList extends React.Component
{
    render () {
        return (
            <section className="section">
              <div className="container">
                <div className="columns is-mobile is-centered">
                  <div className="column is-8">
                    {
                      this.props.members.map((data,index) => {
                        return <>
                          <TeamMembers
                              teams={data}
                          />
                        </>
                      })
                    }
                  </div>
                </div>
              </div>
            </section>
        );
    }
}
