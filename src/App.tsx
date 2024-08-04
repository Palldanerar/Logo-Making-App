import React, { useState } from 'react'
import { Button } from './components/ui/button'
import Header from './components/Header'
import Sidenav from './components/Sidenav'
import IconControlPanel from './components/IconControlPanel'
import BackgroundController from './components/BackgroundController'
import LogoPrewiew from './components/LogoPrewiew'
import { UpdateStorageContext } from './context/UpdateStorageContext'

const App = () => {

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [updateStorage, setUpdateStorage] = useState({})

  return (
    <UpdateStorageContext.Provider value={{updateStorage, setUpdateStorage}}>
      <div>
        <Header />
        <div className='w-64 fixed'>
          <Sidenav selectedIndex={(value: any) => setSelectedIndex(value)} />
        </div>
        <div className='ml-64 grid grid-cols-1 md:grid-cols-6 fixed'>
          <div className='md:col-span-2 border h-screen shadow-sm p-5 overflow-auto'>
            {selectedIndex == 0 ? <IconControlPanel /> : <BackgroundController />}
          </div>
          <div className='md:col-span-3'>
            <LogoPrewiew />
          </div>
          <div className=''>
            Ads banner
          </div>
        </div>
      </div>
    </UpdateStorageContext.Provider>
  )
}

export default App