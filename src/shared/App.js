import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About } from 'pages';
import styled from 'styled-components'
import ReactDrawer from 'components/ReactDrawer';
import { Container, Paper, makeStyles } from '@material-ui/core';
import background from './img/background.jpg';

function App(){
    const classes = useStyles();
    
    return(
        <Background>
            <ReactDrawer/>
            <Container>
                <Paper className={classes.paperStyle}>
                    <Route exact path="/" component={Home}/>
                    <Switch>
                        <Route path="/about/:name" component={About}/>
                        <Route path="/about" component={About}/>
                    </Switch>
                </Paper>
            </Container>
        </Background>
    );
}

const Background = styled.div`
    position: center;
    width: 100%;
    height: 1920px;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
    ),url(${background}
    );
    background-size:cover;
`;

const useStyles = makeStyles(theme=>({
    paperStyle: {
        padding: theme.spacing.unit*3,
        margin: theme.spacing.unit*3,
        fontFamily:'D2Coding',
        fontSize:12,
        textAlign:'center',
    }
}))

export default App;