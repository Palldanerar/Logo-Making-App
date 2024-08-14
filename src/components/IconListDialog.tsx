import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Smile } from 'lucide-react'
import { iconList } from '@/constant/icons';
import { icons } from 'lucide-react';


const IconListDialog = ({ selectedIcon }: any) => {

    const [openList, setOpenList] = useState(false);
    // @ts-ignore
    const storageData = JSON.parse(localStorage.getItem("value"))
    const [icon, setIcon] = useState(storageData ? storageData.icon : 'Anchor');

    const Icon = ({ name, color, size }: any) => {
        // @ts-ignore
        const LucideIcon = icons[name];
        if (!LucideIcon) {
            return;
        }
        return <LucideIcon color={color} size={size} />;
    };

    return (
        <div>
            <div>
                <label>Icons</label>
                <div onClick={() => { setOpenList(true) }} className='p-3 cursor-pointer bg-gray-200 rounded-md w-[50px] h-[50px] flex items-center justify-center'>
                    <Icon name={icon} color={'#000'} size={20} />
                </div>
            </div>
            <Dialog open={openList}>
                <DialogTrigger>Open</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Pick Your Icon</DialogTitle>
                        <DialogDescription className='overflow-auto h-[400px]'>
                            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 lg:grid-cols-5 p-6'>
                                {iconList.map((icon, index) => (
                                    <div className='p-3 border flex rounded-sm items-center justify-center' onClick={() => { selectedIcon(icon); setOpenList(false), setIcon(icon) }}>
                                        <Icon name={icon} color={'#000'} size={20} />
                                    </div>
                                ))}
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default IconListDialog