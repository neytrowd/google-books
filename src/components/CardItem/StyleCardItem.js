import {makeStyles} from "@material-ui/core/styles";

const StyleCardItem = makeStyles((theme) => ({
    text:{
        textDecoration: 'none'
    },
    name: {
        fontWeight: 'bold',
        margin: '8px 0'
    }
}));

export default StyleCardItem;