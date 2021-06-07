import './App.css'
import Header from './components/Header/Header'
import LeftNav from './components/LeftNav/LeftNav'
import MainContent from './components/Main/MainContent'

function App() {
  return (
    <div className="app">
      <Header />
      <LeftNav />
      <MainContent />
    </div>
  )
}

export default App
