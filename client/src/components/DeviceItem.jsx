import React from 'react';
import { Container,Row,Col,Card,Image } from 'react-bootstrap';
import star from '../assets/star.png'
import {useNavigate} from "react-router-dom"
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItem = ({device}) => {

    
    const navigate = useNavigate()
    
    return (
        <Col md ={3} className='mt-4'>
            <Card style={{ width:200,cursor:'pointer'}} border={'light'} onClick={()=> navigate(DEVICE_ROUTE + '/'+ device.id)}>
                <Image width={200} height={120} src={`${import.meta.env.VITE_API_URL}${device.img}`}/>
                <div className='text-black-50 mt-1 d-flex justify-content-between align-items-center'>
                    <div>{device.name}</div>
                    <div className='d-flex align-items-center'>
                        <div>{device.rating}</div>
                        <Image src={star} style={{width:"16px",height:'16px'}}/>
                    </div>
                </div>
                <div >{device.price} руб.</div>
                

            </Card>
        </Col>
        
    );
}

export default DeviceItem;







