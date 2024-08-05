import styles from "./Paragraph.module.css";

console.log(styles);

function ParagraphModule(){
    return (
        <div>
            <p className={styles.paragraph}>Hello, this is a paragraph.</p>
         </div>
    );
}

export default ParagraphModule;