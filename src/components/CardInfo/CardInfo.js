import {Box, Container, Grid, Typography} from "@material-ui/core";
import BackButton from "../BackButton";
import {useLocation} from 'react-router-dom';
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

const CardInfo = () => {
    const location = useLocation();
    const [book, setBook] = useState({});
    const books = useSelector(store => store.books.books);

    useEffect(() => {
        let bookData = books.find(book => book.id === location?.state?.id);
        if (!!bookData) setBook(bookData);
    })

    return (
        <Container maxWidth={'md'}>
            <Box marginTop={'50px'}>
                <Box marginBottom={'40px'}>
                    <BackButton/>
                </Box>
                <Grid container spacing={6}>
                    <Grid item xs={12} sm={6} md={6}>
                        <Box>
                            <img
                                width={'80%'} height={'300px'}
                                src={book?.volumeInfo?.imageLinks?.thumbnail}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Category: {book?.volumeInfo?.categories?.join(' , ')}
                        </Typography>
                        <Box marginTop={'20px'} marginBottom={'20px'}>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Name of book: {book?.volumeInfo?.title}
                            </Typography>
                        </Box>
                        <Box marginTop={'20px'} marginBottom={'20px'}>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Author: {book?.volumeInfo?.authors?.join(' , ')}
                            </Typography>
                        </Box>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Description: {book?.volumeInfo?.description}
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default CardInfo;