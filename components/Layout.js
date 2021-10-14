import React from 'react'
import Head from 'next/head'
import { AppBar, Toolbar, Typography, Container} from '@material-ui/core';
import useStyles from '../utils/styles';

function Layout({children}) {
    const classes = useStyles();
    return (
        <div>
            <Head>
                <title>Kandy Wallmart</title>
            </Head>
            <AppBar position="static" className={classes.navbar}>
                <Toolbar>
                    <Typography>kandy wallmart</Typography>
                </Toolbar>
            </AppBar>
            <Container className={classes.main}>
                {children}
            </Container>
            <footer className={classes.main}>
                <Typography>
                    All rights reserved.kandy wallmart.
                </Typography>
            </footer>
        </div>
    )
}

export default Layout
