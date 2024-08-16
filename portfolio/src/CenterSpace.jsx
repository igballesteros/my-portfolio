import centerStyles from "./CenterSpace.module.css"; // Import CSS module for styling
import textStyles from "./CanvasText.module.css";

function CenterSpace() {
    return (
        <div className={centerStyles.centerSpace}>
            <p className={textStyles.canvasText}>Hello! My name is Ignacio Ballesteros!</p>
        </div>
    );
}

export default CenterSpace;