
import * as api from '../api/index.jsx'

//action creators use of redux-thunk
export const getPosts=()=>async (dispatch)=>{

    try{
        const {data} = await api.fetchPosts()
          console.log('fetch',data)

        dispatch({ type:'FETCH_ALL',payload:data}) 
    }
    catch(err){
        console.log(err.message)

    }


}

export const createPost=(post)=>async(dispatch)=>{
    try{

        const {data}=await api.createPost(post)
        dispatch({type:'CREATE',payload:data})
    }
    catch(err){
        console.log(err)
    }
}

//edit
export const updatePost=(id,post)=>async(dispatch)=>{

    try{
        const {data}=await api.updatePost(id,post)
        dispatch({type:"UPDATE",payload:data})

    }catch(err){
        console.log(err)
    }
}

//delete 

export const deletePost=(id)=>async(dispatch)=>{
    try{
        await api.deletePost(id)
        dispatch({type:'DELETE',payload:id})

    }catch(err){
        console.log(err)
    }
}

//like

export const likePost=(id,post)=>async(dispatch)=>{

    try{
        const {data}=await api.likePost(id)
        dispatch({type:"LIKE",payload:data})

    }catch(err){
        console.log(err)
    }
}
