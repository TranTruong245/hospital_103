// 'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faEnvelope, faLocationDot, faMagnifyingGlass, faPhone } from "@fortawesome/free-solid-svg-icons"

export default function AppFooter(){
    return(
        <footer 
            className="footer-fixed-bottom w-full bg-sky-300 text-center text-lg-start text-muted text-white p-4" 
        >
        
            <section className="">
                <div className="container text-center text-md-start mt-5">
                <div className="row mt-3">
                    <div className="col-md-6 mb-4 text-white">
                    <h6 className="text-uppercase fw-bold mb-4">
                        <i className="fas fa-gem me-3"></i>Đại Học Bách Khoa Hà Nội
                    </h6>
                    
                    <p><i className="mr-2"><FontAwesomeIcon icon={faLocationDot} /></i>Địa chỉ: Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội</p>
                    <p><i className="mr-2"><FontAwesomeIcon icon={faPhone} /></i>Liên hệ: 012348723628</p>
                    <p><i className="mr-2"><FontAwesomeIcon icon={faEnvelope} /></i>Email: dhbkhn@sis.hust.edu.vn</p>

                    </div>
                    <div className="col-md-4 mx-auto mb-4 text-white">
                    <h6 className="text-uppercase fw-bold mb-4">Bệnh Viện Quân Y 103</h6>
                    <p><i className="mr-2"><FontAwesomeIcon icon={faLocationDot} /></i>Địa chỉ: Số 261 Đường Phùng, Phường Phúc La, Hà Đông, Hà Nội</p>
                    <p><i className="mr-2"><FontAwesomeIcon icon={faPhone} /></i>Liên Hệ: 011312124214</p>
                    <p><i className="mr-2"><FontAwesomeIcon icon={faEnvelope} /></i>
                        Email:hospital103@benhvien103.com
                    </p>
                    </div>               
                </div>
                
                </div>
            </section>
        </footer>
    )
}