import React from 'react'
import Head from 'next/head'
import { AppBar, Toolbar, Typography, Container} from '@material-ui/core';

function Layout({children}) {
    return (
        <div>
            <Head>
                <title>Kandy Wallmart</title>
            </Head>
            <AppBar position="static">
                <Toolbar>
                    <Typography>kandy wallmart</Typography>
                </Toolbar>
            </AppBar>
            <Container>
                {children}
            </Container>
            <footer>
                <Typography>
                    All rights reserved.kandy wallmart.
                </Typography>
            </footer>
        </div>
    )
}

export default Layout
