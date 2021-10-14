import React from 'react'
import Head from 'next/head'
import NextLink from 'next/link';
import {
AppBar,
Toolbar,
Typography,
Container,
Link,
} from '@material-ui/core';
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
                    <NextLink href="/" passHref>
                        <Link>
                            <Typography className={classes.brand}>kandy wallmart</Typography>
                        </Link>
                    </NextLink>
                    <div className={classes.grow}></div>
                    <div>
                    <NextLink href="/cart" passHref>
                        <Link>Cart</Link>
                    </NextLink>
                    <NextLink href="/login" passHref>
                        <Link>Login</Link>
                    </NextLink>
                    </div>
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
