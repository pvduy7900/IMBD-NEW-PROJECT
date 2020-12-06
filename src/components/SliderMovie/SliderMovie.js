import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { Row, Card } from 'react-bootstrap'

const SliderMovie = ({ popularList, handleClickImage }) => {
    let size = 5
    let newPopularList = []
    for (let i = 0; i < popularList.length; i += size) {
        newPopularList.push(popularList.slice(i, i + size))
    }

    return (
        <Carousel>
            {newPopularList.map((array) => (
                <Carousel.Item>
                    <Row className="d-flex flex-nowrap">
                        {array.map((item) => (
                            <Card className="heyhey" key={item.id}>
                                <Card.Img
                                    onClick={()=>handleClickImage(item.id)}
                                    className="img-carousel"
                                    src={"https://image.tmdb.org/t/p/w300" + item.backdrop_path}
                                    alt={item.title}
                                />
                            </Card>
                        ))}
                    </Row>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default SliderMovie
