import React from 'react';

export default class SocialIcons extends React.Component
{
    render () {
        return (
            <a href={this.props.icons.link} className="card-footer-item">
              <span className={`icon ${this.props.icons.color}`}><i className={this.props.icons.icon}></i></span>
            </a>
        );
    }
}
