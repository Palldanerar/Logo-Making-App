import React, { useContext, useEffect, useState } from 'react'
import { Slider } from './ui/slider'
import ColorPickerController from './ColorPickerController';
import { UpdateStorageContext } from '@/context/UpdateStorageContext';

const BackgroundController = () => {

    // @ts-ignore
    const storageValue = JSON.parse(localStorage.getItem("value"))

    const [rounded, setRounded] = useState(storageValue ? storageValue.bgRounded : 0)
    const [padding, setPadding] = useState(storageValue ? storageValue.bgPadding : 0)
    const [color, setColor] = useState(storageValue ? storageValue.bgColor : "#fff");

    const { setUpdateStorage } = useContext(UpdateStorageContext)

    useEffect(() => {
        if (rounded || padding || color) {

            const update = {
                ...storageValue,
                bgRounded: rounded,
                bgPadding: padding,
                bgColor: color
            }

            setUpdateStorage(update)
            localStorage.setItem("value", JSON.stringify(update))
        }
    }, [rounded, padding, color])

    return (
        <div>
            <div className='py-3 '>
                <label className='p-2 flex justify-between my-2 text-sm'>Rounded <span>{rounded} px</span></label>
                <Slider defaultValue={[rounded]} max={512} step={1} onValueChange={(e) => setRounded(e[0])} />
            </div>
            <div className='py-3 '>
                <label className='p-2 flex justify-between my-2 text-sm'>Padding <span>{padding} px</span></label>
                <Slider defaultValue={[padding]} max={100} step={1} onValueChange={(e) => setPadding(e[0])} />
            </div>
            <div className='py-3 '>
                <label className='p-2 flex justify-between my-2 text-sm'>Background</label>
                <ColorPickerController hideControls={false} selectedColor={(v: any) => { setColor(v) }} />
            </div>
        </div>
    )
}

export default BackgroundController