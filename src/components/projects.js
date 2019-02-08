import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
 render() {
    return(


  <div className="projects-grid">
          {/* Project 1 */}

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>

            <iframe width="auto" 
            height="auto" src="https://www.youtube.com/embed/UFmBpERZtLA" 
            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
           <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
          </Card>

        </div>

        
  )
  }
}

  
export default Projects;