import React from 'react';
import logo from './favicon.ico';
import chatApp from './chat-app.png';
import baseApp from './base-app.png';
import multiMessengerApp from './multi-app.png';
import developer from './developer.jpg';
import react from './react.png';
import javascript from './js.png';
import electron from './elctron.png';
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
     bio: "I am a Software Developer at Recraft Relic. I write about JavaScript and React. And sharing my worldview with everyone join my quest by following me at Medium.",
     link1: "https://github.com/yashkapoor8710",
     link2: "https://www.linkedin.com/in/yogesh-kapoor-05a86819b/",
     link3: ""
  },
  {
    image: developer,
    title: "Manoj Singh",
    bio: "Thinker & Javascript developer from Chandigarh. I love JavaScript and mostly spend my day programming in JavaScript, ReactJs Nodejs solving problems.",
    link1: "https://github.com/manojsinghnegiwd",
    link2: "https://in.linkedin.com/in/manojsinghnegiwd",
    link3: "http://www.manojsinghnegi.com/"
  },
  {
    image: developer,
    title: "Puran Chand",
    bio: "I am Frontend Developer, designer and definitely a tech enthusiast, This website is about my life, my work and my hobbies I hope you will find something interesting here!",
    link1: "https://github.com/puranchand",
    link2: "https://www.linkedin.com/in/puran-chand-130670124/",
    link3: "http://www.puranchand.com/"
  }
]

function App() {
  return (
    <div className="App">
      <section className="section" style={{paddingBottom: 0}}>
        <div className="container">
          <p className="level-item ">
            <figure className="image is-128x128">
              <img src={logo} alt="logo" />
            </figure>
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns is-mobile is-centered">
            <div className="column is-8">
              <h1 className="title">Help out your favorite open source projects and become a better developer while doing it.</h1>
              <h2 className="subtitle extra-space">
                Pick your favorite repos to receive a different open issue in your inbox every day. Fix the issue and everybody wins. 51,916 developers are working on 5,166 open source repos using CodeTriage.
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="section" style={{paddingBottom: 50, paddingTop: 10}}>
        <div className="container">
          <p className="level-item has-text-centered">
            <h1 className="title is-size-1">Open source Projects</h1>
          </p>
        </div>
      </section>

      {projects.map((data, index) => {
        let leftAlign = "column is-4 is-pulled-left"
        let fullAlign = "column is-8 is-pulled-right"

        if(index == 1) {
          leftAlign = "column is-4 is-pulled-right"
          fullAlign = "column is-8 is-pulled-left"
        }

        if(index == 2) {
          leftAlign = "column is-12"
          fullAlign = "column is-12"
        }

        return <section className={index == 0 || index == 2 ? "section alternate" : "section"}>
            <div className="container">
              <div className="columns is-mobile is-centered">
                <div className="column is-8">
                  <div className={leftAlign}>
                    <figure className="image is-256x256">
                      <img src={data.image} alt="logo" />
                    </figure>
                  </div>
                  <div className={fullAlign}>
                    <h1 className="title has-text-left extra-space"><a className="is-text has-text-black" href={data.link}>{data.heading}</a></h1>
                    <p className="bd-notification is-primary has-text-left is-size-5">{data.para1}</p>
                    <p className="bd-notification is-primary has-text-left is-size-5">{data.para2}</p>
                    <div class="columns is-gap extra-space">
                      <div class="column is-1">
                          <figure className="image is-32x32">
                            <a href="https://reactnative.dev/"><img src={react} alt="logo" /></a>
                          </figure>
                      </div>
                      <div class="column is-1">
                          <figure className="image is-32x32">
                            <a href="https://nodejs.org/en/"><img src={javascript} alt="logo" /></a>
                          </figure>
                      </div>
                      <div class="column is-1">
                          <figure className="image is-32x32">
                            <a href="https://www.electronjs.org/">{index == 2 ? <img src={electron} alt="logo" /> : null}</a>
                          </figure>
                      </div>
                    </div>
                    <p className="bd-notification is-primary has-text-left">If you want to contribute to our project and make it better, visit our github link. <br></br><a className="is-text" href="link">{data.link}</a></p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        } 
      )}

      <section className="section" style={{paddingTop: 50, paddingBottom: 0}}>
        <div className="container">
          <p className="level-item has-text-centered">
            <h1 className="title is-size-1">Team Members</h1>
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
                      <a href={data.link1} class="card-footer-item"><span class="icon has-text-black"><i class="fa fa-github"></i></span></a>
                      <a href={data.link2} class="card-footer-item"><span class="icon has-text-info"><i class="fa fa-linkedin"></i></span></a>
                      {index == 0 ? null : <a href={data.link3} class="card-footer-item"><span class="icon has-text-success"><i class="fa fa-globe"></i></span></a>}
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
