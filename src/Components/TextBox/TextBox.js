import styles from "./TextBox.module.css"
import copy from "./copy_button.png"
import play from "./play_button.png"

function TextBox(props) {
    const generateFunctions = (buttons,copy,play) => {
        return buttons.map((item) =>
            <div key={item} >
                <img src={eval(item)} className={styles.button}/>
            </div>)
    }
    

    return (
        <div className={styles.container}>
            <div className={styles.buttons}>
                {generateFunctions(props.buttons,copy,play)}
            </div>
            <div className={styles.textbox}>
                <textarea className={styles.textarea}></textarea>
            </div>
        </div>
    );
}

export default TextBox;