import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Heather Marsh</h2>
            <img
              src="https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/28577368_10156566648740715_6405995095244242727_n.jpg?_nc_cat=106&_nc_ht=scontent-lax3-2.xx&oh=6033df61c34a4f60b9d47ae5d8cfe746&oe=5CE0BFC3"
              alt="avatar"
              style={{height: '250px'}}
               />
          </Cell>
          <Cell col={6}>
            <h2>Contact</h2>
            <hr/>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Ubuntu'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    heathermarsh@riseup.net
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Ubuntu'}}>
                    <i className="fab fa-twitter" aria-hidden="true"/>
                    @georgieBC
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Contact;