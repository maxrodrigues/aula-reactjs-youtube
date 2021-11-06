import styles from "./Frase.module.css";

function Frase() {
    return (
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>
                Isso é o componente de uma frase
            </p>
        </div>
    );
}

export default Frase;
