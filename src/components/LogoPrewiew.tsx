import { UpdateStorageContext } from '@/context/UpdateStorageContext';
import React, { useContext, useEffect, useState } from 'react'
import { LayoutGrid, icons } from 'lucide-react'

const LogoPrewiew = () => {

    const [storageValue, setStorageValue] = useState();
    const { updateStorage } = useContext(UpdateStorageContext)

    useEffect(() => {
        // @ts-ignore
        const storageData = JSON.parse(localStorage.getItem("value"))
        setStorageValue(storageData)
    }, [updateStorage])

    const Icon = ({ name, color, size, rotate }: any) => {
        const LucideIcon = icons[name];
        if (!LucideIcon) {
            return;
        }
        return <LucideIcon color={color} size={size} style={{ transform: `rotate(${rotate}deg)` }} />;
    };

    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <div className='w-[500px] h-[500px] bg-gray-200 outline-dotted outline-gray-300' style={{ padding: storageValue?.bgPadding }}>
                <div className='w-full h-full flex justify-center items-center' style={{ borderRadius: storageValue?.bgRounded, background: storageValue?.bgColor }}>
                    <Icon name={storageValue?.icon} color={storageValue?.iconColor} size={storageValue?.iconSize} rotate={storageValue?.iconRotate} />
                </div>
            </div>
        </div>
    )
}

export default LogoPrewiew