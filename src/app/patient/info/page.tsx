'use client'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from "react-bootstrap"

export default function InfoPatient(){
    const [isEditing, setIsEditing] = useState(false);
    const [isSeclectingImage, SetIsSeclectingImage] = useState(false);
    const handleEdit = () => {
        setIsEditing(!isEditing);
        handleSelect();
    }
    const handleSelect = () =>{
        SetIsSeclectingImage(true);
    }
    return(
        <div className="container my-5">
            <div className="flex flex-row">
                <div className="col ">
                    <div className=''>
                        <Image src={'/logohust.png'} alt="ah" height={171} width={180}></Image>
                    </div>
                    {isSeclectingImage && (
                        <div className='my-2 '>
                            <button className='border-2 rounded-3 px-3 py-1.5 bg-gray-400 hover:text-white  '>
                                Chọn ảnh
                            </button>
                        </div>
                    )}
                </div>
                <div className="col-md-8">
                    <ul>
                        <div className="flex flex-row">
                            <li className="col">Mã số bệnh nhân: </li>
                            <input className="border-bottom col-md-8" type="text" name="" id="" />
                        </div>
                        <div className="flex flex-row">
                            <li className="col">Tên bệnh nhân:  </li>
                            <input className="border-bottom col-md-8" type="text" name="" id="" />
                        </div>
                        <div className="flex flex-row">
                            <li className="col">Giới tính: </li>
                            <input className="border-bottom col-md-8" type="text" name="" id="" />
                        </div>
                        <div className="flex flex-row">
                            <li className="col">Ngày sinh: </li>
                            <input className="border-bottom col-md-8" type="text" name="" id="" />
                        </div>
                        <div className="flex flex-row">
                            <li className="col">Địa chỉ: </li>
                            <input className="border-bottom col-md-8" type="text" name="" id="" />
                        </div>
                        <div className="flex flex-row">
                            <li className="col">Liên hệ: </li>
                            <input className="border-bottom col-md-8" type="text" name="" id="" />
                        </div>
                        <div className="flex flex-row">
                            <li className="col">Số CCCD/CMND:  </li>
                            <input className="border-bottom col-md-8" type="text" name="" id="" />
                        </div>
                        <div className="flex flex-row">
                            <li className="col">Số BHYT: </li>
                            <input className="border-bottom col-md-8" type="text" name="" id="" />
                        </div>
                        <div className="flex flex-row">
                            <li className="col">Tên người thân:  </li>
                            <input className="border-bottom col-md-8" type="text" name="" id="" />
                        </div>
                        <div className="flex flex-row">
                            <li className="col">SĐT Người thân: </li>
                            <input className="border-bottom col-md-8" type="text" name="" id="" />
                        </div>
                        </ul>
                    <div className="flex flex-row my-3">
                    {isEditing ? (
                       
                    <div className='ml-auto'>
                        <button className='border-2 rounded-3 px-3 py-1.5 bg-cyan-400 hover:text-white  '>Lưu</button>
                    </div>
                    ) : (
                    <>
                        <div>
                        
                        <button className='border-2 rounded-3 px-3 py-1.5 bg-green-600 hover:text-white'>Lịch sử bệnh án</button>
                        </div>
                        <div>
            
                        <button className='border-2 rounded-3 px-3 py-1.5 bg-yellow-400 hover:text-white' onClick={handleEdit}>Sửa</button>
                        </div>
                    </>
                    )}
                    </div>
                </div>
            </div> 
        </div>
    )
}