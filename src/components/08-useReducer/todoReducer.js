export const myReducer = ( state = [], action ) => {
  switch ( action.type ) {
    case 'add':
      return [...state, action.payload];
      // return [action.payload, ...state]
      
    case 'del':
      return state.filter(todo => todo.id !== action.payload)

    case 'toggle':
      return state.map( todo => 
        
        ( todo.id === action.payload )
          ? { ...todo, done: !todo.done }
          : todo
      )  
    default: return state;
    
  }
}