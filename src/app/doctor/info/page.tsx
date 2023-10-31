'use client'

import { Button } from "react-bootstrap"
import Image from 'next/image'
import Link from "next/link"
export default function InfoDoctor(){
    return(
        <div className="container-fluid my-3">
            <div className="flex flex-row mt-2">
            <Link href={'/'} className="hover-bold" ><u>Trang chủ {">"}</u> </Link>
            <Link href={'/doctor'}><u>Bác sĩ {">"}</u></Link>
            <Link href={'/doctor/info'}><u>Thông tin</u></Link>
            </div>
            <div className="flex flex-row mt-3">
                <div className="col">     
                  <Image src={'/logohust.png'} alt="ah" height={171} width={180}></Image>
                </div>
                <div className="col-md-8">
                    <ul>
                        <div className="flex flex-row">
                            <li className="col">Khoa: </li>
                            <input className="border-bottom col-md-8" type="text" name="" id="" />
                        </div>
                        <div className="flex flex-row">
                            <li className="col">Tên bác sĩ:  </li>
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
                            <li className="col">Lịch làm việc:  </li>
                            <input className="border-bottom col-md-8" type="text" name="" id="" />
                        </div>
                        <div className="flex flex-row">
                            <li className="col">Ca trực: </li>
                            <input className="border-bottom col-md-8" type="text" name="" id="" />
                        </div>
                       </ul>
                    <div className="flex flex-row my-3">
                        <div><Button className="text-black mx-1 btn btn" variant="success" href="/doctor/info/info_detail">Giới thiệu</Button></div>
                        <div><Button className="text-black mx-1" variant="warning">Sửa</Button></div>
                        <div><Button className="text-black mx-1" variant="info">Lưu</Button></div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}