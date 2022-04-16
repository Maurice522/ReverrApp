export const articleintialState = []

export const articlereducer =(state,action)=>{
  if(action.type==="CHAT"){
    return action.payload
  }
  if(action.type==="CLEAR"){
    return null
  }
  if(action.type==="UPDATE"){
    console.log("article data added "+action.payload)
    return [
      ...state,
      action.payload
    ]
  }
  return state
}
