import { Smile } from 'lucide-react'
import { Slider } from "@/components/ui/slider"
import React, { useContext, useEffect, useState } from 'react'
import ColorPickerController from './ColorPickerController';
import { UpdateStorageContext } from '@/context/UpdateStorageContext';
import IconListDialog from './IconListDialog';

const IconControlPanel = () => {

    // @ts-ignore
    const storageValue = JSON.parse(localStorage.getItem("value"))

    const [size, setSize] = useState(storageValue ? storageValue.iconSize : 280);
    const [rotate, setRotate] = useState(storageValue ? storageValue.iconRotate : 0);
    const [color, setColor] = useState(storageValue ? storageValue.iconColor : '#000');
    const [selectedIcon, setSelectedIcon] = useState(storageValue ? storageValue.icon : 'Anchor');
    const { setUpdateStorage } = useContext(UpdateStorageContext)


    useEffect(() => {

        const update = {
            ...storageValue,
            iconSize: size,
            iconRotate: rotate,
            iconColor: color,
            icon: selectedIcon
        }
        setUpdateStorage(update)
        localStorage.setItem('value', JSON.stringify(update));
    }, [size, rotate, color, selectedIcon])

    return (
        <div>
            <div>
                <IconListDialog selectedIcon={setSelectedIcon} />
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