import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    navbar: {
        backgroundColor: '#d4f',
        '& a': {
            color: '#fff9',
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
