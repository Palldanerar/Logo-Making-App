import React from 'react'
import { Button } from './ui/button'
import { Download } from 'lucide-react'

const Header = () => {
  return (
    <div className='p-3 border shadow-sm flex justify-between items-center'>
        <h3>Logo-Making-App</h3>
        <Button className="flex gap-2"> <Download className='h-5 w-5'/> Download</Button>
    </div>
  )
}

export default Header