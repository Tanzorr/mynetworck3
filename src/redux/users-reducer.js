

let initialState ={
    users: [],
    pageSize:6,
    totalUsersCount:0,
    currentPage:1,
    isFetching:false,
    followingInProgress:[2,3,4,5]
};



const usersReducer =(state=initialState , action)=> {
    switch (action.type){
        case FOLLOW :
                   return {
                       ...state,
                       users: updeatObjecrInArray(state.users, action.userId,"id", {followed: true})
                   };
           default:
               return state
           }
       };





export default usersReducer;