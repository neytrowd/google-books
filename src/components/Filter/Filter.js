import Box from "@material-ui/core/Box";
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Select from '@material-ui/core/Select';
import SearchIcon from '@material-ui/icons/Search';
import StyleFilter from "./StyleFilter";
import {useDispatch, useSelector} from "react-redux";
import {useRef} from "react";
import {CATEGORY, SEARCH} from "../../redux/bookReducer";

const Filter = () => {
    const classes = StyleFilter();
    const dispatch = useDispatch();
    const searchRef = useRef(null);
    const {search, orderBy, subject} = useSelector(store => store.books);
    const categories = ['art', 'biography', 'computers', 'history', 'medical', 'poetry'];

    const formHandler = (e) => {
        dispatch({
            type: e.target.name.toUpperCase(),
            payload: e.target.value
        })
    }

    const searchHandler = () => {
        dispatch({
            type: SEARCH,
            payload: searchRef.current.value
        })
    }

    // const categoryHandler = (e) => {
    //     let category = e.target.value;
    //     if (category === 'all') {
    //         category = categories.filter(item => item !== 'all').join(',');
    //     }
    //     dispatch({
    //         type: CATEGORY,
    //         payload: category
    //     })
    // }

    return (
        <Container maxWidth={"md"}>
            <Box marginTop={'20px'}
                 display={'flex'}
                 justifyContent={'space-between'}
                 flexWrap={'wrap'}

            >
                <FormControl variant="outlined" className={classes.search}>
                    <InputLabel htmlFor="search">Search</InputLabel>
                    <OutlinedInput
                        id="search"
                        name={'search'}
                        defaultValue={search}
                        labelWidth={70}
                        inputRef={searchRef}
                        onKeyDown={event => event.keyCode === 13 && formHandler(event)}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton edge="end" onClick={searchHandler}>
                                    <SearchIcon/>
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>

                <FormControl variant="outlined" className={classes.category}>
                    <InputLabel>Categories</InputLabel>
                    <Select
                        defaultValue={subject}
                        label="Categories"
                        name={'subject'}
                        onChange={formHandler}
                    >
                        <MenuItem value={'*'}>All</MenuItem>
                        {categories.map(item => (
                            <MenuItem key={item} value={item}>{item}</MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl variant="outlined" className={classes.category}>
                    <InputLabel>Sorting</InputLabel>
                    <Select
                        defaultValue={orderBy}
                        label="Sorting"
                        name={'order_by'}
                        onChange={formHandler}
                    >
                        <MenuItem value={'relevance'}>Relevance </MenuItem>
                        <MenuItem value={'newest'}>Newest</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </Container>
    )
}

export default Filter;