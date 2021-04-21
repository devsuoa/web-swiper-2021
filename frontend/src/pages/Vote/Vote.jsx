import TinderCard from "react-tinder-card";
import styles from "./Vote.module.css";
export default function Vote() {
    const options = ["option 1", "option 2", "option 3"];

    function handleSwipe(direction) {
        console.log(direction);
    }

    return (
        <div className={styles.container}>
            <h1>Swipe Left for no or right for yep</h1>
            <div className={styles.cardContainer}>
                {options.map((o) => (
                    <TinderCard
                        key={o}
                        className={styles.card}
                        onCardLeftScreen={handleSwipe}
                    >
                        {o}
                    </TinderCard>
                ))}
            </div>
        </div>
    );
}
