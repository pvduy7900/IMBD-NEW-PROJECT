import React, { useState, useEffect } from 'react'
import "./HomePage.css"
import api from '../../apiService'
import SliderMovie from "../SliderMovie/SliderMovie"
import { useHistory } from 'react-router-dom'

const HomePage = () => {
    const [loading, setLoading] = useState(false)
    const [popularList, setPopularList] = useState([])
    const [topRated, setTopRated] = useState([])
    const [upComing, setUpComing] = useState([])
    const [errorMessage, setErrorMessage] = useState("")
    const history = useHistory()

    const handleClickImage = (id) => {
        history.push(`/movie/${id}`)
    }


    useEffect(() => {
        const fetchPopular = async () => {
            try {
                let url = `/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
                const res = await api.get(url)
                setPopularList(res.data.results)
                console.log(res.data)
            } catch (error) {
                setErrorMessage(error.message)
            }
        }
        const fetchTopRated = async () => {
            try {
                let url = `/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`
                const res = await api.get(url)
                setTopRated(res.data)
            } catch (error) {
                setErrorMessage(error.message)
            }
        }
        const fetchUpcoming = async () => {
            try {
                let url = `/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}`
                const res = await api.get(url)
                setUpComing(res.data)
            } catch (error) {
                setErrorMessage(error.message)
            }
        }
        setLoading(true)
        fetchPopular()
        // fetchTopRated()
        // fetchUpcoming()
        setLoading(false)
    }, [])

    return (
        <div>
            {loading ? <h1>sth</h1>
                : <>
                    <h1>Top Popular Movies</h1>
                    <SliderMovie popularList={popularList} handleClickImage={handleClickImage} />
                    <h1>Top Rated Movies</h1>
                    <h1>Upcoming Movies</h1>
                </>
            }

        </div>
    )
}

export default HomePage
