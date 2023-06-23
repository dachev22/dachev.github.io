import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import {Link} from "react-router-dom";

const Navs = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar style={{backgroundColor:"#464646"}} position="static">
                <Toolbar>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        MyCloud
                    </Typography>
                        <div>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <AccountCircle style={{marginRight:"10px"}} />
                                <HomeRoundedIcon/>
                            </IconButton>

                        </div>

                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navs;
