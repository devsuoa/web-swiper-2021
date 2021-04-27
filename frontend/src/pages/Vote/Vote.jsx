import axios from 'axios'
import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import TinderCard from 'react-tinder-card'
import './Vote.css'
export default function Vote() {
    const { code } = useParams()
    const [data, setData] = useState()
    const history = useHistory()

    useEffect(() => {
        axios
            .get(process.env.REACT_APP_API + code)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                alert(err)
                history.push('/')
            })
    }, [])

    const handleSwipe = (direction, card) => {
        console.log(direction)
        if (direction === 'right') {
            axios.post(process.env.REACT_APP_API + code, {
                option: card,
            })
        }
    }

    return (
        <div className="voteContainer">
            <h2>Swipe Left for no or Right for yes</h2>
            <h1>{data?.question}</h1>
            <div className="cardContainer">
                {data?.options.map((o) => (
                    <TinderCard
                        key={o}
                        className="card"
                        onCardLeftScreen={(direction) =>
                            handleSwipe(direction, o)
                        }
                        preventSwipe={['up', 'down']}
                    >
                        {o}
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}
