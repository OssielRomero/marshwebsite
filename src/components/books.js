import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Books extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <p>{this.props.publishYear}</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{marginTop:'0px'}}>{this.props.bookName}</h4>
          <p>{this.props.bookDescription}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Books;