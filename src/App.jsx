import React from 'react'
import PostList from './components/InfinitePostList'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Microblog App</h1>
      </header>
      <main>
        <PostList />
      </main>
    </div>
  )
}

export default App