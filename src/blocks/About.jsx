import React from 'react';
import { List } from 'semantic-ui-react'
import { Container, Header } from 'semantic-ui-react'
import './About.scss';
const About = () => (
           
    <div className='about'> 
    <Container>    
    <Header  as='h2'>Personal data</Header>
    <List animated verticalAlign='middle'>    
    <List.Item icon='calendar alternate outline' content='9 May 1996' />
    <List.Item icon='marker' content='Tarnowskie Góry, Poland' />
    <List.Item  color='white'  icon='phone'  content={<a href='tel:695059665' >695 059 665</a>} />
    <List.Item
      icon='mail'
      content={<a href='mailto:suchorab.mateusz@gmail.com'>suchorab.mateusz@gmail.com</a>}
    />   
    <List.Item >
      <List.Icon name='github' verticalAlign='middle'  />
      <List.Content>
        <List.Header as='a' ><a href='https://github.com/mateuszSuchorab'>Mateusz Suchorab</a></List.Header>
      </List.Content>
    </List.Item>  
  </List> 
  </Container>
  </div> 
 
);

export default About;
