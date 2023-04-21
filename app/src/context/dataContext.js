import React, {useReducer} from "react";

let initialState = {
    
  counter: 0,
  showMenssage: false

}

const reducer = (state, action) => {
    
  switch (action.type) {
       
    case "aumentar":
            
      return { ...state, counter: state.counter + action.payload} 
    
    case "diminuir":
            
      return { ... state, counter: state.counter - action.payload}

    case "zerar":

      return { ... state , counter: 0  }
       
    case "mostrar":

      return { ... state, showMenssage: !state.showMenssage }

      default:
        
    return state
       
  }


}
  
export const DataContext = React.createContext();

export const Fornecedor = ({children}) => {
   const [state , dispatch] = useReducer(reducer,initialState)
    return (
         
      <DataContext.Provider value={{state,dispatch}}>
             
       {children}

    </DataContext.Provider>

  )


}