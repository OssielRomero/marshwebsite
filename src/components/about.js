import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Books from './books';
import Skills from './skills';




//add later
   // <h2>Current projects</h2>
     // <p>
       // insert text here
     // </p>
      //<hr style={{borderTop: '3px solid #e22947'}} />


class About extends Component {
  render() {
    return(

    	<div className="app-about">
     			<Grid>
           <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-0/p526x296/28661220_10156566655250715_8734105670565493041_n.jpg?_nc_cat=106&_nc_ht=scontent-lax3-2.xx&oh=8be9a20c23a598425380fb70fdd10368&oe=5D004C37"
                alt="avatar"
                style={{height: '70%'}}
                 />
      </div>

            <h2 style={{color:'#27221F', paddingTop: '.5em', textAlign:'center'}}>Who is she?</h2>

              <hr style={{borderTop: '3px solid #ED213A', width: '100%'}}/>

                <p style={{color: '#27221F', textAlign:'center'}}>
                  Heather Marsh was raised in an extremely isolated First Nations community in Canada’s far north that had first European contact in 1838.
                  Regular outside contact wasn’t until the 1900’s and the first road in was built in 1972. 
                  She is a philosopher, journalist, programmer and human rights activist. She is the former Chief Editor of Wikileaks Central,
                  She is the author of Binding Chaos, a study of methods of mass collaboration and the founder of Getgee, a project to create a global data commons and trust network. 
                  She has appeared at important Keynotes and conferences worldwide ranging from Cuba to Berlin, to discuss her Philosophy, Getgee project, and expertise 
                  on governance through horizontal collaboration and stigmergy.
                </p>

             <hr style={{borderTop: '3px solid #ED213A', width: '100%'}}/>

            </Cell>
            <Cell className="resume-right-col" col={8}>
            

          

              <h2>Philosophy</h2>
                <p>
                  Heather Marsh is the prominent and world renowned political theoriest on horizontal collaboration such as approval economy,
                  stigmergy as a system of mass collaboration, and concentric circles with knowledge bridges for epistemic communities. 
                  She has also written a great deal about global power structures and what she sees as the "ponzi schemes" of power, celebrity and wealth,
                  how they are created and upheld and the roles which contribute to oligarchy. She advocates governance by user group and local autonomy
                  supported by international networks and research and information provided by open epistemic communities. She advocates an economy 
                  based on societal approval and calls for a rejection of the trade economy. She calls the transition from social approval to currency
                  a form of dissociation which removed societal inter-dependence and discourages collaboration. She has advocated for both transparency
                  for actions and organizations that affect the public and privacy for individuals. She is against control and ownership of knowledge
                  by copyrights and patents but writes "Privacy and ownership of personal stories are closely related to human dignity" and credit
                  (although not ownership) for ideas and intellectual labour is essential in an approval economy.
                </p>
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Books</h2>
            <Books
              publishYear={2013}
                bookName="Binding Chaos"
                  bookDescription="The world is long overdue for a completely new system of governance.
                                   If there was ever a need for political representation or a paternalistic and opaque authority,
                                   it has been removed by technology. Every political system we have tried has proven incapable of
                                   protecting human rights and dignity. Every political system we have tried has devolved into oligarchy.
                                   To effect the change we require immediately, to give individuals control and responsibility, to bring 
                                   regional systems under regional governance, allow global collaboration and protect the heritage of future
                                   generations, we need a new political model."
              />

              <Books
                publishYear="Coming Soon"  
                bookName="Autonomy, Diversity, Society "
                bookDescription="The history of humanity is a history of our struggle to maintain a balance between autonomy, diversity and society.
                                 As we have moved from isolated but networked tribes to today’s fully integrated global communities, we have developed
                                 rigid hierarchical systems of control favouring either autonomy or society, a perpetual pendulum between the politics 
                                 of the left and the right. Instead of achieving the balance we need, we now live in a state of no society and oppressive
                                 sameness under the all-encompassing control of a global empire. This book will discuss how shunning and inclusion have 
                                 been used to create today’s global empire and how the people of the world can reclaim these methods to regain the societies 
                                 and autonomy we have lost.
              "/>
              
              <hr style={{borderTop: '3px solid #e22947'}} />             
          </Cell>
        </Grid>
       



      </div>
    )
  }
}

export default About;