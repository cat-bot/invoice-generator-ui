import './App.css'
import Nav from './Nav.tsx'


function App() {

  return (
    <div>
      <Nav />
      <div className="w-full p-2 lg:w-5xl lg:p-4 m-auto bg-teal-100">
        <h1>My app</h1>
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
      </div>
    </div>
  )
}

export default App
