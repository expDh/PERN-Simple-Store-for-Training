import React, { useState } from 'react';
import { Container, Row, Col, Image, Button ,Card} from 'react-bootstrap';
import CreateType from '../components/modals/CreateType';
import CreateBrand from '../components/modals/CreateBrand';
import CreateDevice from '../components/modals/CreateDevice';



const Admin = () => {
    const [brandVisible,setBrandVisible] = useState(false)
    const [typeVisible,setTypeVisible] = useState(false)
    const [deviceVisible,setDeviceVisible] = useState(false)

    return (
        <Container className='d-flex flex-column'>
            <Button variant={'outline-dark'} className='mt-4 p-2' onClick={()=> setTypeVisible(true)}>Добавить тип</Button>
            <Button variant={'outline-dark'} className='mt-4 p-2' onClick={()=> setBrandVisible(true)}>Добавить бренд</Button>
            <Button variant={'outline-dark'} className='mt-4 p-2' onClick={()=> setDeviceVisible(true)}>Добавить устройство</Button>
            <CreateDevice show={deviceVisible} onHide={()=> setDeviceVisible(false)}/>
            <CreateBrand show={brandVisible} onHide={()=> setBrandVisible(false)}/>
            <CreateType show={typeVisible} onHide={()=> setTypeVisible(false)}/>
        </Container>
    );
}

export default Admin;
