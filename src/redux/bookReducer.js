export const LOAD_BOOKS = 'LOAD';
export const SEARCH = 'SEARCH';
export const SORT = 'ORDER_BY';
export const CATEGORY = 'SUBJECT';
export const LOAD_MORE = 'LOAD_MORE';
export const LOADING = 'LOADING';

const initial = {
    books: [],
    search: '',
    loading: false,
    orderBy: 'relevance',
    subject: '*',
}

const bookReducer = (state = initial, action) => {
    switch (action.type) {
        case LOAD_BOOKS: {
            return {
                ...state,
                books: [...action.payload]
            }
        }
        case LOAD_MORE: {
            return {
                ...state,
                books: [...state.books, ...action.payload]
            }
        }
        case SEARCH: {
            return {
                ...state,
                search: action.payload
            }
        }
        case CATEGORY: {
            return {
                ...state,
                subject: action.payload
            }
        }
        case SORT: {
            return {
                ...state,
                orderBy: action.payload
            }
        }
        case LOADING: {
            return {
                ...state,
                loading: action.payload
            }
        }
        default:
            return state;
    }
}

export default bookReducer;