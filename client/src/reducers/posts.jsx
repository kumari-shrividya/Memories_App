import Posts from "../component/Posts/Posts";

//reducer state=post[]
export default (posts=[],action)=>{
    switch(action.type){

        case "FETCH_ALL":
            return action.payload
        case "CREATE":
            return [...posts,action.payload];
        case 'LIKE':
        case "UPDATE":
            return posts.map((post)=>post._id === action.payload._id? action.payload:post)
        case 'DELETE':
            return posts.filter((post)=>post._id!==action.payload)
        // case 'LIKE':
          //  return  posts.map((post)=>post._id === action.payload._id? action.payload:post)
        default:
            return posts
    }
}