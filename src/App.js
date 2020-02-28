import React from 'react';
import logo from './favicon.ico';
import chatApp from './chat-app.png';
import baseApp from './base-app.png';
import multiMessengerApp from './multi-messenger-app.png';
import developer from './developer.jpg';
import './App.css';

const projects = [
  {
     image: chatApp,
     heading: "React native chat app boilerplate",
     para1: "This chat app is a boilerplate for any react native developer who wants to build a chat app.",
     para2: "The goal of this boilerplate is to provide a fully functional chat app which can be reused with very little to no modification.",
     link: "https://github.com/recraftrelic/react-native-chat-app-boilerplate"
  },
  {
    image: baseApp,
    heading: "React native base app seed",
    para1: "This base app is a boilerplate for any react native developer who wants to build a simple app.",
    para2: "The goal of this boilerplate is to provide a simple functional routing & theme app which can be reused with very little to no modification.",
    link: "https://github.com/recraftrelic/recraft-react-native-base-app-seed"
  },
  {
    image: multiMessengerApp,
    heading: "React multi messenger app electron boilerplate",
    para1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    para2: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    link: "https://github.com/recraftrelic/multi-messenger-app"
  }
];

const teamMemebers = [
  {
     image: developer,
     title: "Yogesh Kapoor",
     bio: "I am a Frontend Developer at Recraft Relic. I write about JavaScript and React. And sharing my worldview with everyone join my quest by following me at Medium.",
     link1: "https://github.com/yashkapoor8710",
     link2: "https://medium.com/@yashkapoor8710",
     link3: "https://gitlab.com/yashkapoor8710"
  },
  {
    image: developer,
    title: "Manoj Singh",
    bio: "I am a Frontend Developer at Recraft Relic. I write about JavaScript and React. And sharing my worldview with everyone join my quest by following me at Medium.",
    link1: "https://github.com/yashkapoor8710",
    link2: "https://medium.com/@yashkapoor8710",
    link3: "https://gitlab.com/yashkapoor8710"
  },
  {
    image: developer,
    title: "Puran Chand",
    bio: "I am a Frontend Developer at Recraft Relic. I write about JavaScript and React. And sharing my worldview with everyone join my quest by following me at Medium.",
    link1: "https://github.com/yashkapoor8710",
    link2: "https://medium.com/@yashkapoor8710",
    link3: "https://gitlab.com/yashkapoor8710"
  }
]

function App() {
  return (
    <div className="App">
      <section className="section">
        <div className="container">
          <p className="level-item has-text-centered">
            <figure className="image is-48x48">
              <img src={logo} alt="logo" />
            </figure><h1 className="title">&nbsp;Recraft Relic</h1>
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns is-mobile is-centered">
            <div className="column is-8">
              <h1 className="title">Help out your favorite open source projects and become a better developer while doing it.</h1>
              <h2 className="subtitle">
                Pick your favorite repos to receive a different open issue in your inbox every day. Fix the issue and everybody wins. 51,916 developers are working on 5,166 open source repos using CodeTriage.
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <p className="level-item has-text-centered">
            <h1 className="title">Open source Projects</h1>
          </p>
        </div>
      </section>

      {projects.map((data, index) => {
        return <section className="section">
            <div className="container">
              <div className="columns is-mobile is-centered">
                <div className="column is-8">
                  <div className={index == 1 ? "column is-4 is-pulled-right" : "column is-4 is-pulled-left"}>
                    <figure className="image is-256x256">
                      <img src={data.image} alt="logo" />
                    </figure>
                  </div>
                  <div className={index == 1 ? "column is-8 is-pulled-left" : "column is-8 is-pulled-right"}>
                    <h1 className="title has-text-left">{data.heading}</h1>
                    <p className="bd-notification is-primary has-text-left">{data.para1}</p>
                    <p className="bd-notification is-primary has-text-left">{data.para2}</p>
                    <p className="bd-notification is-primary has-text-left"><a className="button is-text" href="link">github</a></p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        } 
      )}

      <section className="section">
        <div className="container">
          <p className="level-item has-text-centered">
            <h1 className="title">Team Members</h1>
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns is-mobile is-centered">
            <div className="column is-8">
              {teamMemebers.map((data, index) => {
              return <div className="column is-4 is-pulled-left">
                  <div class="card">
                    <header class="card-header">
                      <figure className="image is-256x256">
                        <img src={data.image} alt="logo" />
                      </figure>
                    </header>
                    <div class="card-content">
                      <div class="content">
                        <h2 className="sub-title">{data.title}</h2>
                        {data.bio}
                      </div>
                    </div>
                    <footer class="card-footer">
                      <a href={data.link1} class="card-footer-item">Gitub</a>
                      <a href={data.link2} class="card-footer-item">Medium</a>
                      <a href={data.link3} class="card-footer-item">Gitlab</a>
                    </footer>
                  </div>
                </div>
                } 
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
