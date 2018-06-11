import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import logo from './Assets/self-crop.png';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src= {logo}
              alt="logo"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Aspiring Software Engineer</h1>
              <hr/>

              <p>C# | C++ | Java | SQL | Python | JavaScript | HTML/CSS</p>

              <div id= "somethingHover" className="social-links">

                {/* LinkedIn */}
                <a  href="https://www.linkedin.com/in/zehan-sunesara-553a8ab9" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Twitter */}
                <a href="https://twitter.com/ZSunesara" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-twitter-square" aria-hidden="true" />
                </a>

                {/* Facebook */}
                <a href="https://www.instagram.com/zehansunesara/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>

                {/* Instagram */}
                <a href="https://www.facebook.com/zehan.sunesara.5" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-facebook-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a href="https://github.com/usazehan" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
