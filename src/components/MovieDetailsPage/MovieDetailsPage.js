import React, { useEffect, useState } from 'react'
import "./MovieDetailsPage.css"
import api from '../../apiService'
import { useParams } from 'react-router-dom'

const MovieDetailsPage = () => {
    const [errorDetailPage, setErrorDetailPage] = useState("")
    const [detailData, setDetailData] = useState([])
    // const [newParam, setNewParam] = useState(param)
    const params = useParams()
    console.log(params)
    useEffect(() => {
        const getDetailMovie = async (params) => {
            try {
                let url = `movie/${params.id}?api_key=${process.env.REACT_APP_API_KEY}`
                console.log(url)
                const res = await api.get(url)
                if (res.status === 200) setDetailData(res.data)
                console.log("hey", res.data)
                console.log("hey hey", detailData)
            } catch (error) {
                setErrorDetailPage(error.message)

            }
        }
        getDetailMovie(params)
    }, [params])

    useEffect(() => {
        console.log(params)
    }, [])

    return (
        <div>
            <div><img src={"https://image.tmdb.org/t/p/w500" + detailData.poster_path} /></div>
            <div>
                <div>{detailData.genres.map((item) => { return <button key={item.id}>{item.name}</button> })}</div>
                <div>{detailData.original_title}</div>
                <div>{detailData.adult === true ? <p>18+</p> : <p>Under 18</p>}</div>
                <div className="break-line"></div>
                <div>Budget: ${detailData.budget}</div>
                <div>Revenue: ${detailData.revenue}</div>
                <div>Release Day: {detailData.release_date}</div>
                <div>Run Time: {detailData.runtime} minutes</div>
                <div className="break-line"></div>
                <div>Trailer</div>
            </div>
        </div>
    )
}

export default MovieDetailsPage
