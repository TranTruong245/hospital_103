'use client'

import { faCalendarDays, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { Button } from "react-bootstrap"

export default function Patient(){
    const handleInfo = ()=>{
     return(
        <>
        
        </>
     )   
    }
    return(
        <div>
            <div className="flex flex-row mt-2">
            <Link href={'/'} className="hover-bold" ><u>Trang chủ {">"}</u> </Link>
            <Link href={'/doctor'}><u>Bệnh nhân </u></Link>
            
            </div>
            <div className=" container mx-auto flex flex-row my-5">
                <div className="">
                    <input className="form-control me-2" type="text" placeholder="Mã bệnh nhân" />
                </div>
                <div className="mx-2">
                    <input className="form-control" type="text" placeholder="Tên bệnh nhân"/>
                </div>
                <div className="relative">
                    <input className="form-control" type="text" placeholder="Ngày nhập viện" />
                    <div className="absolute flex items-center justify-center top-0 bottom-0 right-2"><FontAwesomeIcon icon={faCalendarDays} /></div>
                </div> 
                <div className="relative mx-2">
                    <input className="form-control " type="text" placeholder="Ngày ra viện" />
                    <div className="absolute flex items-center top-0 bottom-0 right-2"><FontAwesomeIcon icon={faCalendarDays} /></div>
                </div>
                <div className="">
                <Button variant="info" className="rounded-full text-black" type="submit" >
                    <FontAwesomeIcon icon={faMagnifyingGlass} size="sm" />Tìm kiếm</Button>
                </div>
            </div>

            <table className="table table-bordered table-hover">
                <thead className="table-success">
                <tr>
                    <th>#</th>
                    <th>Mã bệnh nhân</th>
                    <th>Tên bệnh nhân</th>
                    <th>Ngày nhập viện</th>
                    <th>Ngày ra viện</th>
                    <th>Ghi chú</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>23</td>
                    <td>Trần Văn A</td>
                    <td>10/10/2023</td>
                    <td>chưa có</td>
                    <td>sốt</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>23</td>
                    <td>Trần Văn A</td>
                    <td>10/10/2023</td>
                    <td>chưa có</td>
                    <td>sốt</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>23</td>
                    <td>Trần Văn A</td>
                    <td>10/10/2023</td>
                    <td>chưa có</td>
                    <td>sốt</td>
                </tr>
                </tbody>
            </table>
            <div className="flex flex-row-reverse">
                <Button className="text-black  mb-4" variant="info" ><Link href={'/patient/info'}>Xuất dữ liệu</Link></Button>
            </div>
        </div>
    )
}