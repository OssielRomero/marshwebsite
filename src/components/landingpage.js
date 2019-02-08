import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            

            <div className="banner-text">
              <h1>Heather Marsh</h1>
  

          <p>Author | Human Rights Activist | Programmer | Philosopher</p>

        <div className="social-links">

          {/* Wordpress */}
          <a href="https://georgiebc.wordpress.com" rel="noopener noreferrer" target="_blank">
            <i className="fab fa-wordpress" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fab fa-github-square" aria-hidden="true" />
          </a>

          {/* Twitter */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fab fa-twitter" aria-hidden="true" />
          </a>

          {/* Wikipedia */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fab fa-wikipedia-w" aria-hidden="true" />
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