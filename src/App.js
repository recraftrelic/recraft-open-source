import React from 'react';
import logo from './favicon.ico';
import chatApp from './chat-app.png';
import baseApp from './base-app.png';
import multiMessengerApp from './multi-messenger-app.png';
import developer from './developer.jpg';
import './App.css';

const projects = [];
const developers = [];

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





      <section className="section">
        <div className="container">
          <div class="columns is-vcentered">
            <div class="column">
              <figure className="image is-256x256">
                <img src={chatApp} alt="logo" />
              </figure>
            </div>
            <div class="column is-8">
              <h1 className="title">React native chat app boilerplate</h1>
              <p className="bd-notification is-primary">This chat app is a boilerplate for any react native developer who wants to build a chat app.</p>
              <p className="bd-notification is-primary">The goal of this boilerplate is to provide a fully functional chat app which can be reused with very little to no modification.</p>
              <a className="button is-text" href="https://github.com/recraftrelic/react-native-chat-app-boilerplate">github</a>
            </div>
          </div>
          <div class="columns is-vcentered">
            <div class="column is-8">
            <h1 className="title">React native base app seed</h1>
              <p className="bd-notification is-primary">This base app is a boilerplate for any react native developer who wants to build a simple app.</p>
              <p className="bd-notification is-primary">The goal of this boilerplate is to provide a simple functional routing & theme app which can be reused with very little to no modification.</p>
              <a className="button is-text" href="https://github.com/recraftrelic/recraft-react-native-base-app-seed">github</a>
            </div>
            <div class="column">
              <figure className="image is-256x256">
                <img src={baseApp} alt="logo" />
              </figure>
            </div>
          </div>
          <div class="columns is-vcentered">
            <div class="column">
              <figure className="image is-256x256">
                <img src={multiMessengerApp} alt="logo" />
              </figure>
            </div>
            <div class="column is-8">
            <h1 className="title">React multi messenger app electron boilerplate</h1>
              <p className="bd-notification is-primary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
              <a className="button is-text" href="https://github.com/recraftrelic/multi-messenger-app">github</a>
            </div>
          </div>
        </div>
      </section>








      <section className="section">
        <div className="container">
          <div className="columns is-mobile is-centered">
            <div className="column is-4">
              <figure className="image is-256x256">
                <img src={developer} alt="logo" />
              </figure>
              <h1 className="title">Yogesh Kapoor</h1>
              <h2 className="subtitle">
                Pick your favorite repos to receive a different open issue in your inbox every day. Fix the issue and everybody wins. 51,916 developers are working on 5,166 open source repos using CodeTriage.
              </h2>
            </div>
            <div className="column is-4">
              <figure className="image is-256x256">
                <img src={developer} alt="logo" />
              </figure>
              <h1 className="title">Manoj Singh Negi</h1>
              <h2 className="subtitle">
                Pick your favorite repos to receive a different open issue in your inbox every day. Fix the issue and everybody wins. 51,916 developers are working on 5,166 open source repos using CodeTriage.
              </h2>
            </div>
            <div className="column is-4">
              <figure className="image is-256x256">
                <img src={developer} alt="logo" />
              </figure>
              <h1 className="title">Puran Chand</h1>
              <h2 className="subtitle">
                Pick your favorite repos to receive a different open issue in your inbox every day. Fix the issue and everybody wins. 51,916 developers are working on 5,166 open source repos using CodeTriage.
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
