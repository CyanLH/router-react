import React from 'react';
import {Link} from 'react-router-dom';
import {ListItem} from '@material-ui/core';

const Menu = () =>{
    return(
        <div>
            <ListItem component={Link} to="/" button>
                Home 1234567890
            </ListItem>
            <ListItem component={Link} to="/about" button>
                About 1234567890
            </ListItem>
            <ListItem component={Link} to="/about/LeeHan" button>
                About LeeHan 1234567890
            </ListItem>
        </div>
    );
};

export default Menu;