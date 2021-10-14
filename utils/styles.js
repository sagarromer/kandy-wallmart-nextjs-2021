import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    navbar: {
        backgroundColor: '#d4fc79',
        '& a': {
            color: '#d4fc79',
            marginLeft: 10,
        },

    },
    main: {
        minHeight: '80vh',
    },
    footer: {
        textAlign: 'center',
    }
}
)

export default useStyles;
