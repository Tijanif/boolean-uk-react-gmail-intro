import './App.css'

import flaticonWelcomeImage from './assets/images/flaticon-welcome-image.png'
import backArrow from './assets/icons/back-arrow.png'
import downloadButton from './assets/icons/download-button.png'
import rateStarButton from './assets/icons/rate-star-button.png'
import rubbishButton from './assets/icons/rubbish-bin-delete-button.png'
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
