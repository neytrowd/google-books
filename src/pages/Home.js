import React, {useEffect} from "react";
import Header from "../components/Header";
import Filter from "../components/Filter";
import CardList from "../components/CardList";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {LOAD_BOOKS, LOAD_MORE, LOADING} from "../redux/bookReducer";
import {Box, Button, Container} from "@material-ui/core";

const Home = () => {
    const dispatch = useDispatch();
    const {books, search, orderBy, subject} = useSelector(store => store.books);

    const load = async (startIndex) => {
        dispatch({type: LOADING, payload: true})
        let url = `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=30&startIndex=${startIndex}&orderBy=${orderBy}&subject=${subject}&key=AIzaSyCBj7WgwoaJTxdRgb2L8xa0y9vTdD2oiiY`
        let response = await axios.get(url);
        dispatch({type: LOADING, payload: false})
        return response.data.items;
    }

    const loadBooks = async () => {
        if (search) {
            let result = await load(0);
            dispatch({type: LOAD_BOOKS, payload: result})
        } else {
            dispatch({type: LOAD_BOOKS, payload: []})
        }
    }

    const loadMore = async () => {
        let result = await load(books.length);
        dispatch({type: LOAD_MORE, payload: result})
    }

    useEffect(() => {
        loadBooks(0)
    }, [search, orderBy, subject])

    return (
        <React.Fragment>
            <Header/>
            <Filter/>
            <CardList/>
            {books.length > 0 && (
                <Container maxWidth={'md'}>
                    <Box marginTop={'30px'} marginBottom={'30px'}>
                        <Button variant="contained"
                                color="primary"
                                fullWidth
                                onClick={loadMore}
                        >
                            Load More
                        </Button>
                    </Box>
                </Container>
            )}
        </React.Fragment>
    )
}

export default Home