import React from 'react'
import './style.css'
import { Alert, Card, Badge } from 'react-bootstrap'

const CardItem = (props) => {
return (
    <>
    {
        props.meals.length > 0 ? ( props.meals.map((meal)=>{
            return (
                <div className="col col-12" key={meal.id}>
                <Card className='row flex-row my-4'>
                    <div className="col col-lg-4 col-12 img-holder">
                        <Card.Img src={meal.image} alt='meal' />
                    </div>
                    {/* ./ image */}
                    <Card.Body className='col col-lg-8 col-12'>
                        <Card.Title className='d-flex align-items-center justify-content-between mb-4'>
                            <h3> {meal.title} </h3>
                            <Badge bg="dark"> {meal.price} </Badge>
                        </Card.Title>
                        {/* ./ card-title */}
                        <Card.Text> {meal.describtion}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
            )
        })
        ) : <Alert className='alert-dark' > <h5 className='text-center'>no items found</h5> </Alert>
        
    }
    </>
)
}

export default CardItem
