'use client'

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { Button } from "react-bootstrap"

export default function Doctor(){
    return(
        <div>
            <div className="flex flex-row mt-2">
            <Link href={'/'} className="hover-bold" ><u>Trang chủ {">"}</u> </Link>
            <Link href={'/doctor'}><u>Bác sĩ</u></Link>
            </div>
            
            <div className=" container md:mx-auto flex flex-row my-5">
                <div className=" mx-3">
                    <input className="form-control me-2" type="text" placeholder="Khoa" />
                </div>
                <div className="mx-3">
                    <input className="form-control me-2" type="text" placeholder="Tên bác sĩ"/>
                </div>
                <div className="mx-3">
                    <input className="form-control me-2" type="text" placeholder="Ca trực" />
                </div>
                <div className="mx-3">
                <Button variant="info" className="rounded-full text-black" type="submit" >
                    <FontAwesomeIcon icon={faMagnifyingGlass} size="sm" />Tìm kiếm</Button>
                </div>
                
            </div>

            <table className="table table-bordered table-hover">
                <thead className="table-success">
                <tr>
                    <th>#</th>
                    <th>Tên Bác Sĩ</th>
                    <th>Khoa</th>
                    <th>Ca trực</th>
                    <th>Ghi chú</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>John</td>
                    <td>Thần Kinh</td>
                    <td>10/10/2023</td>
                    <td>x1</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>John1</td>
                    <td>Thần Kinh1</td>
                    <td>10/10/2023</td>
                    <td>x1</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>July</td>
                    <td>Dooley</td>
                    <td>july@example.com</td>
                    <td>x1</td>
                </tr>
                </tbody>
            </table>
            <div className="flex flex-row-reverse">
                <Button className="text-black  mb-4" variant="info"><Link href={'/doctor/info'}>Xuất dữ liệu</Link></Button>
            </div>
        </div>
    )
}