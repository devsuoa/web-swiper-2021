import { useState } from 'react'
import Input from '../../components/Input'
import './Home.css'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

export default function Home() {
    const [options, setOptions] = useState([])
    const [question, setQuestion] = useState('')
    const [option, setOption] = useState('')
    const history = useHistory()

    const handleSubmit = () => {
        axios.post(
            'http://localhost:3001/create',
            {
                question,
                options,
            },
        ).then(res => {
            history.push('/stats/' + res.data)
        }).catch(err => {
            alert(err)
        })
    }

    return (
        <div className="homeContainer">
            <h1 className="heading"> Swipe Poll </h1>
            <div>
                <Input
                    className="questionInput"
                    type="text"
                    placeholder="Type a question..."
                    value={question}
                    setValue={setQuestion}
                />

                <Input
                    className="optionInput"
                    type="text"
                    placeholder="Add an option..."
                    value={option}
                    setValue={setOption}
                />

                <button
                    className="addButton"
                    onClick={() => {
                        setOptions([...options, option])
                        setOption('')
                    }}
                >
                    Add
                </button>

                <ul>
                    {options.map((o) => (
                        <li
                            className="listItem"
                            key={o}
                            onClick={() =>
                                setOptions(
                                    options.filter((option) => o !== option),
                                )
                            }
                        >
                            {o}
                        </li>
                    ))}
                </ul>

                <button className="createButton" onClick={handleSubmit}>
                    Create Poll
                </button>
            </div>
        </div>
    )
}
