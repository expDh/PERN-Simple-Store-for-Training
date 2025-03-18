import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image, Button ,Card} from 'react-bootstrap';
import star from '../assets/star.png'
import {useParams} from 'react-router-dom'
import { fetchOneDevice } from '../http/deviceApi';
const DevicePage = () => {
    const [device,setDevice] = useState({info:[]})
    const {id} = useParams()
    console.log(id)
    useEffect (()=>{
        fetchOneDevice(id).then(data =>setDevice(data))
    },[])
    // const device = { id: 1, name: 'RTX 3050', price: 25000, rating: 5, img: "https://avatars.mds.yandex.net/i?id=2a0000017a152406cea2fb57e78351e5bf51-4099495-images-thumbs&n=13" }
    // const description = [
    //     {id:1,title:"Видеопамять",description:'6gb'},
    //     {id:2,title:"Шина",description:'256'},
    //     {id:3,title:"Разъем",description:'HDMI'},
    //     {id:4,title:"Потребление",description:'100'},


    // ]

    return (
        <Container className='mt-3'>
            <Row>
                <Col md={4}>
                    <Image width={400} height={300} src={`${import.meta.env.VITE_API_URL}${device.img}`} />

                </Col>
                <Col md={4}>
                    <Row className='d-flex flex-column align-items-center'>
                        <h2 className="text-center">{device.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{ background: `url(${star}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64 }}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className='d-flex flex-column align-items-center justify-content-around'
                        style={{ width:300, height:300,fontSize:32,border:"5px solid lightgray"}}
                    >
                        <h3>От: {device.price} руб.</h3>
                        <Button variant='outline-dark'>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className='d-flex flex-cloumn mt-3'>
                <h1>Характеристики</h1>
                {device.info.map((info,index)=>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent',padding:10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
}

export default DevicePage;
