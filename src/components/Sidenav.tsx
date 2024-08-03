import { Image, PencilRuler, Shield } from 'lucide-react'
import React, { useState } from 'react'

interface menuListInterface {
    id: Number,
    name: String,
    icon: any
}

const Sidenav = ({selectedIndex}: any) => {

    const menuList = [
        {
            id: 1,
            name: "Icon",
            icon: PencilRuler
        },
        {
            id: 2,
            name: "Background",
            icon: Image
        },
        {
            id: 3,
            name: "Upgrade",
            icon: Shield
        },
    ]

    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div className='border shadow-sm h-screen flex flex-col'>
            <div>
                {
                    menuList.map((menu: menuListInterface, index: any) => {
                        return (
                            <h2 onClick={() => {setActiveIndex(index); selectedIndex(index)}} className={`p-3  text-lg px-7 flex gap-2 text-gray-500 hover:bg-primary hover:text-white cursor-pointer my-2 ${activeIndex==index&&'bg-primary text-white'}`} key={index}>
                                <menu.icon />
                                {menu.name}
                            </h2>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Sidenav