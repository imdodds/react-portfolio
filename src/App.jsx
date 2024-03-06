import React from 'react'

import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Timeline from './components/Timeline'
import Footer from './components/Footer'

function App() {

  return (
      <div className='bg-white text-stone-900 min-h-screen font-inter max-w-5xl w-11/12 mx-auto'>
        <About></About>
        <Portfolio></Portfolio>
        <Timeline></Timeline>
        <Contact></Contact>
        <Footer></Footer>
      </div>
  )
}

export default App
