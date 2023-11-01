'use client'
import { faBriefcase, faCircleInfo, faHospital, faLaptopCode, faUserDoctor } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { Card } from 'react-bootstrap'
export default function InfoDetailDoctor(){
    return(
        <div className="my-3">
            <div className="relative w-full  h-40 bg-gradient-to-t from-sky-400 to-sky-100  my-3 ">
                <div className=' flex flex-row'>
                
                <div className='col'>
                    <Image src='/avt.jpg' alt='avt' width={180} height={180} className='absolute top-5 mx-3 rounded-full '></Image>
                </div>
                <div className='col-md-9  my-20' >
                    <b >Trần Công Trường</b>
                </div>
                </div>
               
            
            </div>
            
            <div className="container-fluid">
                <div className="border-t border-gray-300 my-5 "></div>
            </div>
            <div className=' flex flex-row container'>
                <div className='col'>
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title><FontAwesomeIcon icon={faCircleInfo} size="xl" className='mx-2' />Giới thiệu</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
                </Card>      
                </div>
                <div className='col'>
                    <div>
                        <div>
                        <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title><FontAwesomeIcon icon={faBriefcase} size="xl"className='mx-2'  />Chức vụ</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                        </Card>   
                        </div>
                        <div className='mt-3'>
                        <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title><FontAwesomeIcon icon={faUserDoctor} size="xl" className='mx-2' />Chuyên Khoa</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                        </Card>   
                        </div>
                    </div>
                
                </div>
                <div className='col'>
                    <div>
                        <div>
                        <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title><FontAwesomeIcon icon={faHospital} size="xl" className='mx-2' />Nơi công tác</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                        </Card>   
                        </div>
                        <div className='mt-3'>
                        <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title><FontAwesomeIcon icon={faLaptopCode} size="xl" className='mx-2' />Kinh Nghiệm</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                        </Card>   
                        </div>
                    </div>
                </div>
            
            </div>
            
           
            
        </div>
    )
}