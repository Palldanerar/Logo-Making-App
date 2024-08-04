import React, { useState } from 'react'
import ColorPicker, { useColorPicker } from 'react-best-gradient-color-picker'

const ColorPickerController = ({ hideControls = false, selectedColor }: any) => {

    const [color, setColor] = useState(hideControls ? 'rgba(96,93,93,1)' : 'linear-gradient(90deg, rgba(96,93,93,1) 0%, rgba(255,255,255,1) 100%)');
    const { valueToHex } = useColorPicker(color, setColor)

    return (
        <div>
            <ColorPicker value={color} onChange={(e) => { setColor(e), selectedColor(e) }} hideControls={hideControls} hideEyeDrop hideAdvancedSliders hideColorGuide hideInputType />
        </div>
    )
}

export default ColorPickerController