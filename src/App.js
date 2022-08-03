import { useState } from "react";
import List from "./components/List/List"
import ListItem from "./components/Listitems/Listitem";
function App() {


  const [todos, setTodos] = useState( JSON.parse(window.localStorage.getItem("todos")) ||[])

  const handleInputValue = (evt) => {
    if(evt.code ==="Enter"){


      let newTodo = {
        id: todos.at(-1)?.id ? todos.at(-1).id +1 : 1,
        text: evt.target.value,
        isComplated: false
      }
      setTodos([...todos, newTodo]);

      evt.target.value = null

    }

  }
  window.localStorage.setItem("todos", JSON.stringify(todos))

  return (
    <div className="App container mt-5">
      <div>

      <input className="mx-4 mb-3" onKeyUp={handleInputValue} type="text" placeholder="Enter your todo.."/>
      {
        todos.length &&<List>
        {
         todos.map(e => (
           <ListItem todos ={todos} setTodos={setTodos} key={e.id} item = {e}>
             {e.text}
           </ListItem>
         ))
        }
       </List>
      }

      </div>
    </div>
  );
}

export default App;
