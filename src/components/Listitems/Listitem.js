
const ListItem = ({children , item, todos, setTodos}) => {

  const {id, isComplated} = item

  const handleDeleteTodo = (todoId) => {
    const filteredTodo = todos.filter((todo) => todo.id !== todoId)
    setTodos(filteredTodo)

  }

  const handleEditTodo = (todoId)=>{
    const editText = prompt("Please edit text")
    const findTodos = todos.find(e => e.id === todoId)
    findTodos.text = editText
    setTodos([...todos])
    window.localStorage.setItem("todos", JSON.stringify([...todos]))
  }

  const handleChangeTodos = (todoId) => {
    const findedTodos = todos.find(e => e.id === todoId)
    findedTodos.isComplated = !findedTodos.isComplated
    setTodos([...todos])

    window.localStorage.setItem("todos", JSON.stringify([...todos]))
  }


  return (
    <li className="d-flex align-items-center mb-3">
      <span>id: {id}</span>
      <input onChange={() => handleChangeTodos(id) } defaultChecked={isComplated} className="mx-3 form-input-chackbox" type="checkbox"/>
      <span className={isComplated? "text-decoration-line-through mx-3" : "mx-3"}>{children}</span>
      <button onClick={() => handleEditTodo (id)} className="btn btn-primary mx-3">Edit</button>
      <button onClick={() => handleDeleteTodo(id)} className="btn btn-danger">Delete</button>
    </li>
  )
}


export default ListItem