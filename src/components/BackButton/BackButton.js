import {Button} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const BackButton = () => {

    return (
        <Button variant="contained"
                color={'primary'}
                component={NavLink}
                to={'/'}
                startIcon={<ArrowBackIcon/>}
        >
            Back
        </Button>
    )
}

export default BackButton;