const SET_REPOS = 'repos-reducer/SET_REPOS';
const SET_IS_FETCHING = 'repos-reducer/SET_IS_FETCHING';
const SET_CURRENT_PAGE = 'repos-reducer/SET_CURRENT_PAGE';
const SET_FETCH_ERROR = 'repos-reducer/SET_FETCH_ERROR';

const defaultState = {
    items: [],
    isFetching: true,
    currentPage: 1,
    perPage: 10,
    totalCount: 0,
    isFetchError: false
}

export const reposReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_REPOS: {
            return {
                ...state,
                items: action.payload.items,
                totalCount: action.payload.total_count,
                isFetching: false
            }
        }
        case SET_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.payload
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.payload
            }
        }
        case SET_FETCH_ERROR: {
            return {
                ...state,
                isFetchError: action.payload
            }
        }
        default: {
            return state
        }
    }
}

export const setRepos = (repos) => ({type: SET_REPOS, payload: repos});
export const setIsFetching = (bool) => ({type: SET_IS_FETCHING, payload: bool});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, payload: page});
export const setFetchError = (bool) => ({type: SET_FETCH_ERROR, payload: bool});