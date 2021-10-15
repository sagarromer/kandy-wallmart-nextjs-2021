import React from 'react'
import Head from 'next/head'
import NextLink from 'next/link';
import {
AppBar,
Toolbar,
Typography,
Container,
Link,
createTheme,
ThemeProvider,
CssBaseline,
} from '@material-ui/core';
import useStyles from '../utils/styles';

function Layout({title, description, children}) {
    const theme = createTheme({typography: {
        h1: {
            fontSize: '1.6rem',
            fontWeight: 400,
            margin: '1rem 0',
        },
        h2: {
            fontSize: '1.4rem',
            fontWeight: 400,
            margin: '1rem 0',
        },
        },
        palette: {
            type: 'light',
            primary: {
                main: '#f04',
            },
            secondary: {
                main: '#2084',
            },
        },
    });
    const classes = useStyles();
    return (
        <div>
            <Head>
                <title>{title ? `${title} - Kandy Wallmart` : 'Kandy Wallmart'}</title>
                {description && <meta name="description" content={description}></meta>}
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
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
            </ThemeProvider>
        </div>
    )
}

export default Layout
