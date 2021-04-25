import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import styles from './Summary.module.css'
import { io } from 'socket.io-client'

export default function Stats() {
    const { code } = useParams()
    const [data, setData] = useState()
    const history = useHistory()

    useEffect(() => {
        axios
            .get(process.env.REACT_APP_API + code)
            .then((res) => {
                setData(res.data)
                const socket = io(process.env.REACT_APP_API, {
                    query: {
                        code: code,
                    },
                })

                socket.on('data', (data) => {
                    console.log(data)
                    setData(data)
                })
            })
            .catch((err) => {
                alert(err)
                history.push('/')
            })
    }, [])

    return (
        <div className={styles.container}>
            <h1>Code: {code}</h1>
            <h1>{data?.question}</h1>
            <ul>
                {data?.results.map((o) => (
                    <li className={styles.listItem} key={o.name}>
                        {o.name}:{' '}
                        <span className={styles.votes}>{o.votes} votes </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
