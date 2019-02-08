import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Experience from './experience';
import Skills from './skills';


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

            <h2 style={{color:'#93291E', paddingTop: '1em', textAlign:'center'}}>Heather Marsh</h2>
            <hr style={{borderTop: '3px solid #ED213A', width: '100%'}}/>
            <p style={{color: 'black', textAlign:'center'}}>

            Heather Marsh was raised in an extremely isolated First Nations community in Canada’s far north that had first European contact in 1838. Regular outside contact wasn’t until the 1900’s and the first road in was built in 1972. She is a philosopher, journalist, programmer and human rights activist. She is the author of Binding Chaos, 
            a study of methods of mass collaboration and the founder of Getgee, a project to create a global 
            data commons and trust network.

             </p>
             

       <hr style={{borderTop: '3px solid #ED213A', width: '100%'}}/>
            
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Philosophy</h2>
            
              <p>She has been primarily associated with political theories which relate to horizontal collaboration such as approval economy, stigmergy as a system of mass collaboration, and concentric circles with knowledge bridges for epistemic communities. She has also written a great deal about global power structures and what she sees as the "ponzi schemes" of power, celebrity and wealth, how they are created and upheld and the roles which contribute to oligarchy. She advocates governance by user group and local autonomy supported by international networks and research and information provided by open epistemic communities. She advocates an economy based on societal approval and calls for a rejection of the trade economy. She calls the transition from social approval to currency a form of dissociation which removed societal inter-dependence and discourages collaboration. She has advocated for both transparency for actions and organizations that affect the public and privacy for individuals. She is against control and ownership of knowledge by copyrights and patents but writes "Privacy and ownership of personal stories are closely related to human dignity" and credit (although not ownership) for ideas and intellectual labour is essential in an approval economy.</p>
                <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Books</h2>
            <Experience
              publishYear={2013}
              
              bookName="Binding Chaos"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
              <Experience
                publishYear={2019}
               
                bookName="Second book"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Current projects</h2>
            
              <p>

Lorem ipsum senectus placerat faucibus sapien praesent cras accumsan nunc praesent aenean interdum, augue vestibulum diam sit nam maecenas pulvinar quisque maecenas felis volutpat.

Cursus diam imperdiet ut convallis proin inceptos senectus mattis, habitasse blandit elementum at vitae velit porttitor nisi ipsum, porta elit vulputate malesuada ornare magna aliquam.

Tortor sapien aliquet varius tristique himenaeos class tortor, cursus risus aliquam conubia maecenas sodales, nulla vitae senectus tempus adipiscing placerat.

Litora vivamus duis ligula quisque turpis curabitur, eget mollis magna erat aenean vel nunc, gravida ipsum eleifend magna maecenas dapibus elementum scelerisque per aptent habitant torquent ultrices quam placerat ornare molestie quisque aenean.

Aliquam per sociosqu praesent hendrerit enim porta ornare class hendrerit, convallis magna lectus purus eleifend egestas leo eget egestas, primis senectus sodales morbi venenatis vestibulum mi massa sodales lectus id aenean.


              </p><hr style={{borderTop: '3px solid #e22947'}} />
             
          </Cell>
        </Grid>
       
      </div>
    )
  }
}

export default About;