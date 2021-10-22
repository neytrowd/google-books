import {makeStyles} from "@material-ui/core/styles";

const StylesFilter = makeStyles((theme) => ({
    search:{
        minWidth: '100%',
        marginBottom: '25px'
    },

    category: {
        minWidth: '100%',
        marginBottom: '25px'
    },

    [theme.breakpoints.up('md')]: {
        search:{
            minWidth: 250,
        },

        category: {
            minWidth: 250,
        },
    },
}));

export default StylesFilter;