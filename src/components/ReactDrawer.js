import React from 'react';
import {AppBar, Toolbar, IconButton, Typography, Drawer, List, Container} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {createMuiTheme} from '@material-ui/core/styles'
import Menu from './Menu';
import { ThemeProvider, makeStyles } from '@material-ui/styles';

const drawerTheme = createMuiTheme({
    overrides:{
        MuiDrawer:{
            paper:{
                background:'transparent',
                width:'100%',
                // marginTop:65,
            },
        },
        MuiList:{
            root:{
                background:'rgba(255,255,255,0.9)',
                width:250,
                height:'100%',
                fontFamily:'Spoqa Han Sans',
            }
        },
    },
});

const useStyles = makeStyles(theme=>({
    appBarStyle:{
        background: 'rgba(255,255,255,0.5)',
        // background: 'rgb(50,50,50)',
        boxShadow: '5px',
    },
    typhographyStyle:{
        fontFamily: 'Spoqa Han Sans',
        fontWeight:'500',
        // color:'rgb(200,200,200)',
        color:'rgb(80,80,80)',
    },
    drawerBackgroundStyle:{
        width:'100%',
        height:'100%',
        position:'absolute',
        backgroundColor:'rgba(100,100,100,0.35)'
    },
}))

function PersistentDrawerLeft(){
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();

    const handleDrawerOpen=()=>{
        setOpen(true);
    };
    const handleDrawerClose=()=>{
        setOpen(false);
    };

    return(
        <div>
            <AppBar position="static" className={classes.appBarStyle}>
                <Container maxWidth='flase'>
                <Toolbar>
                    <IconButton color="rgb(80,80,80)" aria-label="open drawer" onClick={handleDrawerOpen}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h5" className={classes.typhographyStyle}>
                        Hello React-Router 1234567890
                    </Typography>
                </Toolbar>
                </Container>
            </AppBar>
            <ThemeProvider theme={drawerTheme}>
                <Drawer variant="persistent" anchor="left" open={open}>
                    <div className={classes.drawerBackgroundStyle} onClick={handleDrawerClose}/>
                    <List>
                       <Menu/>
                    </List>
                </Drawer>
            </ThemeProvider>
        </div>
    )
}
export default PersistentDrawerLeft;