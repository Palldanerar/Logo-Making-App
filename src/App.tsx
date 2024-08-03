import React from 'react'
import { Button } from './components/ui/button'
import Header from './components/Header'
import Sidenav from './components/Sidenav'

const App = () => {
  return (
    <div>
      <Header />
      <div className='w-64 fixed'>
        <Sidenav selectedIndex={(value: any) =>console.log(value)} />
      </div>
      <div className='ml-64'>
        Body
      </div>
    </div>
  )
}

export default App