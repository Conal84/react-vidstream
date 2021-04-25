import _ from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_STREAMS':
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    // Fetch, Create and Edit all get a single record response from our API
    // We then want to add that record to our state object
    case 'FETCH_STREAM':
      return { ...state, [action.payload.id]: action.payload };
    case 'CREATE_STREAM':
      return { ...state, [action.payload.id]: action.payload };
    case 'EDIT_STREAM':
      return { ...state, [action.payload.id]: action.payload };
    case 'DELETE_STREAM':
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
