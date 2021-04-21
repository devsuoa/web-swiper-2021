import axios from 'axios'
import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import TinderCard from 'react-tinder-card'
import styles from './Vote.module.css'
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
        <div className={styles.container}>
            <h1>Swipe Left for no or right for</h1>
            <h2>{data?.question}</h2>
            <div className={styles.cardContainer}>
                {data?.options.map((o) => (
                    <TinderCard
                        key={o}
                        className={styles.card}
                        onCardLeftScreen={(direction) =>
                            handleSwipe(direction, o)
                        }
                    >
                        {o}
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}
