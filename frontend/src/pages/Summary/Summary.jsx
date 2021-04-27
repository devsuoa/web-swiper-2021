import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import './Summary.css'
import { io } from 'socket.io-client'

export default function Stats() {
    const { code } = useParams()
    const [data, setData] = useState()
    const history = useHistory()

    useEffect(() => {
        axios
            .get('http://localhost:3001/' + code)
            .then((res) => {
                setData(res.data)
                const socket = io('http://localhost:3001/', {
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
    }, [code, history])

    return (
        <div className="summaryContainer">
            <h1>Code: {code}</h1>
            <h1>{data?.question}</h1>
            <ul>
                {data?.results.map((o) => (
                    <li className="listItem" key={o.name}>
                        {o.name}:{' '}
                        <span className="votes">{o.votes} votes </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
