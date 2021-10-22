import {Box, Typography} from "@material-ui/core";

const Header = () => {

    return (
        <Box
            textAlign={'center'}
             marginTop={'30px'}
             marginBottom={'30px'}
        >
            <Typography variant={'h4'}>
                Search for books
            </Typography>
        </Box>
    )
}

export default Header;