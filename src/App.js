import AppBar from "components/AppBar/AppBar"
import BoardBar from "components/BoardBar/BoardBar"
import BoardContent from "components/BoardContent/BoardContent"
import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.scss"

function App() {
  return (
    <div className="trello-app-master">
      <AppBar />
      <BoardBar />
      <BoardContent />
    </div>
  )
}

export default App
