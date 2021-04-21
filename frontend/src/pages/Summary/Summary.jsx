import styles from "./Summary.module.css";

export default function Stats() {
    const code = "ABCDE";

    const options = [
        { name: "option 1", votes: 1 },
        { name: "option 2", votes: 2 },
        { name: "option 3", votes: 3 },
    ];

    return (
        <div className={styles.container}>
            <h1>Code: {code}</h1>
            <h1>Summary</h1>
            <ul>
                {options.map((o) => (
                    <li key={o.name}>
                        {o.name}: {o.votes} votes
                    </li>
                ))}
            </ul>
        </div>
    );
}
