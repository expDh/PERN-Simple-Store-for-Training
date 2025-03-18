import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../main";
import { Card, Row, Col } from "react-bootstrap";

const BrandBar = observer(() => {
    const { device } = useContext(Context);

    return (
        <Row className="d-flex flex-wrap justify-content-start ">
            {device.brands.map(brand => (
                <Col 
                    key={brand.id} 
                    xs={12} sm={6} md={4} lg={3} 
                    className=" d-flex justify-content-start"
                    style={{ width: 'auto' }}
                >
                    <Card
                        style={{
                            cursor: 'pointer',
                            width: '150px', 
                            height: '40px', 
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', 
                            borderRadius: '8px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center', 
                            textAlign: 'center',
                            marginBottom:'10px'
                        }}
                        onClick={() => device.setSelectedBrand(brand)}
                        border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                    >
                        {brand.name}
                    </Card>
                </Col>
            ))}
        </Row>
    );
});

export default BrandBar;
