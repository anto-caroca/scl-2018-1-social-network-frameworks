const initState = {}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_POST_SUCCESS':
      console.log('create post success');
      return state;
    case 'CREATE_POST_ERROR':
      console.log('create post error');
      return state;
    case 'DELETE_POST_SUCCESS':
      console.log('delete post success');  
       return state;
    case 'DELETE_POST_ERROR':
      console.log('delete post error');  
       return state;
       
    default:
      return state;
  }
};

export default projectReducer;