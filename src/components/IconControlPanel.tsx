import { Smile } from 'lucide-react'
import { Slider } from "@/components/ui/slider"
import React, { useContext, useEffect, useState } from 'react'
import ColorPickerController from './ColorPickerController';
import { UpdateStorageContext } from '@/context/UpdateStorageContext';

const IconControlPanel = () => {

    // @ts-ignore
    const storageValue = JSON.parse(localStorage.getItem("value"))

    const [size, setSize] = useState(storageValue ? storageValue.iconSize : 280);
    const [rotate, setRotate] = useState(storageValue ? storageValue.iconRotate : 0);
    const [color, setColor] = useState(storageValue ? storageValue.iconColor : '#000');
    const { setUpdateStorage } = useContext(UpdateStorageContext)


    useEffect(() => {

        const update = {
            ...storageValue,
            iconSize: size,
            iconRotate: rotate,
            iconColor: color,
            icon: "Smile"
        }
        setUpdateStorage(update)
        localStorage.setItem('value', JSON.stringify(update));
    }, [size, rotate, color])

    return (
        <div>
            <div>
                <label>Icons</label>
                <div className='p-3 cursor-pointer bg-gray-200 rounded-md w-[50px] h-[50px] flex items-center justify-center'>
                    <Smile />
                </div>
                <div className='py-3'>
                    <label className='p-2 flex justify-between my-2 text-sm'>Size <span>{size} px</span></label>
                    <Slider defaultValue={[size]} max={512} step={1} onValueChange={(e) => setSize(e[0])} />
                </div>
                <div className='py-3'>
                    <label className='p-2 flex justify-between my-2 text-sm'>Rotate <span>{rotate} °</span></label>
                    <Slider defaultValue={[rotate]} max={360} step={1} onValueChange={(e) => setRotate(e[0])} />
                </div>
                <div className='py-3'>
                    <label className='p-2 flex justify-between my-2 text-sm'>Border Color </label>
                    <ColorPickerController selectedColor={setColor} />
                </div>
            </div>
        </div>
    )
}

export default IconControlPanel