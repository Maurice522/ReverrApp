export const chatintialState = []

export const chatreducer =(state,action)=>{
  if(action.type==="CHAT"){
    return action.payload
  }
  if(action.type==="CLEAR"){
    return null
  }
  if(action.type==="UPDATE"){
    console.log("Chat data added "+action.payload)
    return [
      ...state,
      action.payload
    ]
  }
  return state
}
