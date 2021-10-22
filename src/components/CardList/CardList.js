import {Box, Container, Grid, Typography} from "@material-ui/core";
import CardItem from "../CardItem";
import {useSelector} from "react-redux";

const CardList = () => {
    const {books, loading} = useSelector(store => store.books);

    return (
        <Container maxWidth="md" component="main">
            <Box marginBottom={'20px'}>
                <Typography variant={'h5'} align={'center'}>Found {books.length} items</Typography>
            </Box>
            {
                loading
                    ? <Box marginTop={'50px'} marginBottom={'50px'}>
                        <Typography variant={'h4'} align={'center'}>Loading...</Typography>
                    </Box>
                    : <Grid container spacing={5}>
                        {books.map(item => <CardItem key={item.id} info={item}/>)}
                    </Grid>
            }
        </Container>
    )
}

export default CardList;