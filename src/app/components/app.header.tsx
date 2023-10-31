'use client'

import { faBars, faCircleUser, faFlag, faMagnifyingGlass, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useState } from "react"
import { Button, Container, Nav, Navbar } from "react-bootstrap"
import Image from 'next/image'
import router from "next/router"
export default function AppHeader(){
  const [currentLanguage, setCurrentLanguage] = useState('vi'); // Sử dụng state để lưu trạng thái ngôn ngữ hiện tại

  const toggleLanguage = () => {
    if (currentLanguage === 'vi') {
      setCurrentLanguage('en');
    } else {
      setCurrentLanguage('vi');
    }
  };
    return(
        <header className="head-fixed-top w-full bg-gradient-to-r from-sky-400 to-sky-100 text-white">
            <div className="flex flex-row align-center ">
                <div className="mt-4 ml-5">
                    <div className="flex flex-row">
                        <div>                 
                            <Image src="/logohust.png" alt="logohust" height={75} width={53.26}></Image>
                        </div>
                        <div className="ml-4">                        
                            <Image src="/logohospital.png" alt="logohust"  height={75} width={76.01}></Image>
                        </div>
                    </div>      
                </div>
                <div className=" col md-2 mt-4 ml-20">
                    <h2 className="text-uppercase fw-bold mb-4 ml-7 text-2xl">
                        Bệnh viện quân y 103
                    </h2>
                    <ul>
                        <li>Chuyên nghiệp - hiệu quả - an toàn - hợp tác</li>                        
                    </ul>
                </div >
                <div className="flex flex-row-reverse md-1 mt-4">
                    <div className="flex flex-row">
                        <div><Button variant="info" className="rounded-full text-black">Đăng nhập <FontAwesomeIcon className="text-black" icon={faCircleUser} size="sm" /></Button></div>
                        <div className="mx-4">
                        <Button variant="info" className="rounded-full text-black" onClick={toggleLanguage}>
                          {currentLanguage === 'vi' ? (   
                            <>
                              <span>Tiếng Việt</span>
                              <FontAwesomeIcon icon={faFlag} size="sm" className="ml-1" />
                              
                            </>
                          ) : (
                            <>
                              <span>English</span>
                              <FontAwesomeIcon icon={faFlag} size="sm" className="ml-1" />          
                            </>
                          )}
                        </Button>
                        </div>
                    </div>
                   
                </div>
            
            </div>
            <div className="flex flex-row-reverse my-3">
                <div className="mx-3">
                    <button type="submit" className="border-2 rounded-full bg-sky-300 px-3 py-1.5 hover:bg-sky-500 hover:text-black ease-in-out duration-300">
                      Tìm kiếm
                    </button>
                </div>
                
                <div className="relative">
                  <div>
                    <input className="form-control me-2" type="text" />
                  </div>
                  <div className="absolute top-0 left-2 bottom-0 flex items-center text-black ">
                    <FontAwesomeIcon icon={faMagnifyingGlass} size="xl"className="transition-opacity duration-300 ease-in-out opacity-50" />
                  </div>
                </div>
              
            </div>
            <Navbar className="bg-sky-400 ">
              <ul className="container-fluid flex felx-row items-center uppercase text-sm">
                <li className="me-auto hover:text-gray-800">
                  <Link href="/">Trang chủ</Link>
                </li>
                <li className="me-auto hover:text-gray-800">
                  <Link href="/introduce" >Giới thiệu</Link> 
                </li>
                <li className="me-auto hover:text-gray-800">
                  <Link href="/news-events" >Tin tức - Sự kiện</Link>
                </li>
                <li className="me-auto hover:text-gray-800">
                  <Link href="/doctor"  >Bác sĩ</Link>  
                </li>
                <li className="me-auto hover:text-gray-800">
                  <Link href="/patient" >Bệnh nhân</Link>
                </li>
                <li className="me-auto hover:text-gray-800">
                  <Link href="/records">Nhập hồ sơ</Link>  
                </li>
                <li className="me-auto hover:text-gray-800">
                  <Link href="/utilities">Tiện ích</Link>
                </li>
                <li className="me-auto hover:text-gray-800 ">
                  <Link href="/utilities" >
                    <FontAwesomeIcon icon={faBars} size="xl" />
                  </Link>
                </li>
              </ul>
             </Navbar>
        </header>
    )
}