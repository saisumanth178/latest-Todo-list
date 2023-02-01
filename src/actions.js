export const IncAction=()=> async dispatch=>{
    dispatch({
        type:'Increment'
    })
}
export const DecAction=()=> async dispatch=>{
    dispatch({
        type:'Decrement'
    })
}