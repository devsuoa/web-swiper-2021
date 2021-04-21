import { useState } from "react";
import styles from "./Home.module.css";
import { useHistory } from "react-router-dom";

export default function Home() {
    const [options, setOptions] = useState([]);
    const [question, setQuestion] = useState("");
    const [option, setOption] = useState("");
    const history = useHistory();

    return (
        <div className={styles.container}>
            <h1> Swipe Poll </h1>
            <div>
                <input
                    className={styles.questionInput}
                    type="text"
                    name="question"
                    placeholder="Type a question..."
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                />

                <input
                    className={styles.optionInput}
                    type="text"
                    name="add-option"
                    placeholder="Add an option..."
                    value={option}
                    onChange={(e) => setOption(e.target.value)}
                />

                <button
                    className={styles.button}
                    onClick={() => {
                        setOptions([...options, option]);
                        setOption("");
                    }}
                >
                    Add
                </button>

                <ul>
                    {options.map((o) => (
                        <li
                            key={o}
                            onClick={() =>
                                setOptions(
                                    options.filter((option) => o !== option)
                                )
                            }
                        >
                            {o}
                        </li>
                    ))}
                </ul>

                <button
                    className={styles.createButton}
                    onClick={() => history.push("/stats")}
                >
                    Create Poll
                </button>
            </div>
        </div>
    );
}
