import newsTypes from './types';
import BlogList from 'src/content/blogs';

const initialState = {
	data: null,
	isLoading: false,

	allNews: BlogList,
	allNewsError: null,

	news:null,
	newsError: null,
};

const newsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case newsTypes.START_SELECT_NEWS:
			return { 
				...state,
				loading: true,
			};
		case newsTypes.SUCCESS_SELECT_NEWS:
			return {
				...state,
				loading: false,
				news: payload
			};
		case newsTypes.FAIL_SELECT_NEWS:
			return {
				...state,
				loading: false,
				news: null,
				newsError: payload,
			};

		default:
			return state;
	}
};

export default newsReducer;