import AddToDo from "./Components/Addtodo"
import Navbar from "./Components/navbar"
import Todos from "./Components/Todos"
import "./App.css"

const App = () => {
  return (
   <main>
      <h1 className="h1">TODO APP  </h1>
      <h3 className="h3">USING REACT + TYPESCRIPT </h3>
      <Navbar />
      <AddToDo />
      <Todos />
   </main>
  )
}

export default App