import { makeStyles } from '@mui/styles';

export default makeStyles({

    container:{

        padding: '0 5%',
        width: '100%',
        margin: 0,

    },

    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '50vh',
        padding: '5%',
        borderRadius: 10,
        color: 'white',
    },

    infoCard: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
    }
});

