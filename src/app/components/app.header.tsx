'use client'

import Link from "next/link"
import { Button, Container, Nav, Navbar } from "react-bootstrap"

export default function AppHeader(){
    return(
        <header className="w-full h-60 bg-gradient-to-r from-sky-400 to-sky-100 text-white">
            <div className="flex flex-row align-center ">
                <div className="mt-4 ml-5">
                    <div className="flex flex-row">
                        <div>
                            <img  src="logohust.png" alt="logohust" height={75} width={53.26}  />
                        </div>
                        <div className="ml-4">
                            <img src="logohospital.png" alt="logohospital" height={75} width={76.01} />
                        </div>
                    </div>
                    
                </div>
            
                <div className=" col md-2 mt-4 ml-20">
                    <h6 className="text-uppercase fw-bold mb-4 ml-7 ">
                
                        Bệnh viện quân y 103
                       
                    </h6>
                    <ul>
                        <li>Đường dây nóng</li>
                        <li>Đăng kí khám theo yêu cầu </li>
                        <li>Số 261 Đường Phùng Hưng, Phường Phúc La, Hà Đông, Hà Nội</li>
                        <li>Mail</li>
                    </ul>
                </div >
                <div className="flex flex-row-reverse md-1 mt-4">
                    <div className="flex flex-row">
                        <div>
                            đăng nhập
                        </div>
                        <div className="mx-4">
                            VN
                        </div>
                    </div>
                   
                </div>
            
            </div>
            <div className="flex flex-row-reverse">
                <div className="mr-5 ">
                    <Button variant="primary" type="submit" >Tìm kiếm</Button>
                </div>
                <div>
                    <input className="form-control me-2" type="text" placeholder="tìm kiếm" />
                </div>
                
            </div>
            <Navbar className="bg-sky-400">
      <Container className="text-white">
        <Navbar.Brand>
            <Link href="/" className='navbar-brand text-white' >Trang chủ</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href="/introduce" className='nav-link text-white'>Giới thiệu</Link>  
          </Nav>
          <Nav className="me-auto">
            <Link href="/news-events" className='nav-link text-white'>Tin tức - Sự kiện</Link>
          </Nav>
          <Nav className="me-auto">
            <Link href="/doctor" className='nav-link text-white' >Bác sĩ</Link>  
          </Nav>
          <Nav className="me-auto">
            <Link href="/patient" className='nav-link text-white'>Bệnh nhân</Link>
          </Nav>
          <Nav className="me-auto">
            <Link href="/records" className='nav-link text-white'>Nhập hồ sơ</Link>  
          </Nav>
          <Nav className="me-auto">
            <Link href="/utilities" className='nav-link text-white'>Tiện ích</Link>
          </Nav>
          <Nav className="me-auto">
            <Link href="/utilities" className='nav-link text-white'>App</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </header>
    )
}