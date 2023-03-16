import React from 'react'
import hero from './hero.json'
import Form from '../Form'
import Lottie from 'lottie-react'
import { Row, Col, Card } from 'react-bootstrap'

const index = () => {
  return (
    <div className='h-100'>
      <Row>
        <Col style={{padding:'100px 200px', }}>
            <h1 className='fw-normal'>Wellcome to <span style={{color:'#9466FF'}} className='fw-bold'>myTrainingWebsite</span></h1>
            <Lottie animationData={hero} loop={true} />
        </Col>
        <Col style={{padding:'100px', backgroundColor: '#9466FF'}} className='item-center'>
            <Card className='w-full p-3'>
                <h1 className='text-center fw-bold'>Regsitrasi Akun</h1>
                <Form />
            </Card>
        </Col>
      </Row>
    </div>
  )
}

export default index
