import React, { useContext, useState, useEffect } from 'react';
import { Container, Row, Col, Form, Modal, Button, Dropdown } from 'react-bootstrap';
import { Context } from '../../main';
import { createDevice, fetchTypes, fetchBrands } from '../../http/deviceApi';
import { observer } from 'mobx-react-lite';

const CreateDevice = observer(({ show, onHide }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null);
    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data));
        fetchBrands().then(data => device.setBrands(data));
    }, []);

    const { device } = useContext(Context);

    const addInfo = () => {
        setInfo([...info, { title: '', description: '', number: Date.now() }]);
    };

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number));
    };

    const selectFile = e => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
        if (!allowedTypes.includes(selectedFile.type)) {
            console.error("Invalid file type");
            return;
        }
        setFile(selectedFile);
    }
};


    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? { ...i, [key]: value } : i));
    };
    
    const addDevice = () => {
    if (!name || !price || !device.selectedBrand || !device.selectedType || !file) {
        console.error("Missing required fields");
        return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', Number(price));
    formData.append('img', file);
    formData.append('brandId', device.selectedBrand.id);
    formData.append('typeId', device.selectedType.id);
    formData.append('info', JSON.stringify(info));

    createDevice(formData).then(() => onHide()).catch(error => {
        console.error("Error creating device:", error);
    });
};


    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить новое устройство
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className='mt-3 mb-2'>
                        <Dropdown.Toggle>{device.selectedType.name || "Выберите тип"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type => (
                                <Dropdown.Item onClick={() => device.setSelectedType(type)} key={type.id}>
                                    {type.name}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className='mt-2 mb-2'>
                        <Dropdown.Toggle>{device.selectedBrand.name || "Выберите бренд"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand => (
                                <Dropdown.Item onClick={() => device.setSelectedBrand(brand)} key={brand.id}>
                                    {brand.name}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className='mt-3'
                        placeholder='Введите название устройства'
                    />
                    <Form.Control
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        className='mt-3'
                        placeholder='Введите стоимость'
                        type='number'
                    />
                    <Form.Control
                        className='mt-3'
                        onChange={selectFile}
                        type='file'
                        name='img'
                    />
                    <hr />
                    <Button variant='outline-dark' onClick={addInfo}>
                        Добавить новое свойство
                    </Button>
                    {info.map(i => (
                        <Row className='mt-3' key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                    value={i.title}
                                    onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                    placeholder='Введите название характеристики'
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    value={i.description}
                                    onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                    placeholder='Введите описание характеристики'
                                />
                            </Col>
                            <Col md={4}>
                                <Button
                                    variant='outline-danger'
                                    onClick={() => removeInfo(i.number)}
                                >
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                    ))}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
                <Button variant='outline-success' onClick={addDevice}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateDevice;
