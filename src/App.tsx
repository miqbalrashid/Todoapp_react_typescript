import AddToDo from "./components/addtodo"
import Navbar from "./components/navbar"
import Todos from "./components/Todos"
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