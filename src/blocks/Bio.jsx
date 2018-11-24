import React from 'react';
import { Container, Header, Grid, Icon } from 'semantic-ui-react'

const Bio = (props) => (
  
<Container text>
    <Header as='h2' >
    <Icon name='balance scale' />
    Experience
    </Header>    
    <Grid columns='two' divided>
    <Grid.Row>
    {props.experience.map(item => <Grid.Column>{item.title}</Grid.Column>)} 
    {props.experience.map(item => <Grid.Column>{item.description}</Grid.Column>)}  
    {props.experience.map(item => <Grid.Column>{item.to} / {item.from}</Grid.Column>)}     
    </Grid.Row>
    </Grid>
    <Header as='h2'>
    <Icon name='university' />
    Education
    </Header>
    <Grid columns='two' divided>
    <Grid.Row>
    {props.education.map(item => <Grid.Column>{item.title}</Grid.Column>)}   
    {props.education.map(item => <Grid.Column>{item.description}</Grid.Column>)}  
    {props.education.map(item => <Grid.Column>{item.to} / {item.from}</Grid.Column>)}      
    </Grid.Row>
  </Grid>

    {props.children}
  </Container>    
  
);

export default Bio;
