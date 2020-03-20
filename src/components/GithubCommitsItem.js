import React from 'react';

export default class GithubCommitsItem extends React.Component {

    render() {
        let { avatar, name, commitLink, repo, repoLink, commitUserProfile, commitId } = this.props
        return (
            <div className="commits-item">
                <div className="columns is-gap extra-space ">
                    <div className="techno">
                        <figure className="image is-32x32">
                            <a target="_blank" href={commitUserProfile}>
                                <img src={avatar} alt="technologies" />
                            </a>
                        </figure>
                    </div>
                    <p className="bd-notification is-primary is-size-3">
                        <span className=""><a target="_blank" className="is-text" href={commitUserProfile}>{name}</a></span>
                        <span>{" pushed commit "} (<a target="_blank" className="is-text" href={commitLink}>{commitId.substring(0,7)}</a>)</span>
                        <span>{" to "} <a target="_blank" className="is-text" href={repoLink}>{repo}</a></span>
                    </p>
                </div>
            </div>
        );
    }
}
