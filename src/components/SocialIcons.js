import React from 'react';

export default class SocialIcons extends React.Component
{
    render () {
        return (
            <a target="_blank" rel="noopener noreferrer" href={this.props.icons.link} className="card-footer-item">
              <span className={`icon ${this.props.icons.color}`}><i className={this.props.icons.icon}></i></span>
            </a>
        );
    }
}
