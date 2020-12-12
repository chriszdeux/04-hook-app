const todoReducer = ( state = initialState, action ) => {

  if (action?.type === 'add') {
    return [...state, action.payload]
  }
  return state
}



let myTodo = todoReducer()
console.log(myTodo)

const newItem = {
  id: 2,
  todo: 'buy underware to me :)',
  done: false
};

const addNewItem = {
  type: 'add',
  payload: newItem
}

myTodo = todoReducer(myTodo, addNewItem)
console.log(myTodo)