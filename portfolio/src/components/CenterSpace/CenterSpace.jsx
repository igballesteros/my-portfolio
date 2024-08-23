import centerStyles from "./CenterSpace.module.css"; // Import CSS module for styling
import textStyles from "./CanvasText.module.css";

function CenterSpace() {
    return (
        <div className={centerStyles.centerSpace}>
            <p className={textStyles.canvasText}>Hi! My name is <span style={{color: "red"}}>&nbsp;Ignacio Ballesteros</span></p>
            <p className={textStyles.canvasText}>I am a Software Developer.</p>
        </div>
    );
}

export default CenterSpace;