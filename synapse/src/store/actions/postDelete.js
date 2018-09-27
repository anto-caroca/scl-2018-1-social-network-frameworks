export const deletePublication = (id) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    
    firestore.collection('publications').delete({id
    }).then(() => {
      dispatch({ type: 'DELETE_POST_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'DELETE_POST_ERROR' }, err);
    });
  }
};




