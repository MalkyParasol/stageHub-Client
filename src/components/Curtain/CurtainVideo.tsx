import Curtain from "../../assets/curtain.mp4"
import "./CurtainVideo.css"

const onEnd = ()=>{
    alert("ended!!!!!!!!");
}
const CurtainVideo =()=>{
    return<>
    <video autoPlay muted playsInline onEnded={onEnd}>
    <source src={Curtain} type="video/mp4"/>
    </video>
    </>
}

export default CurtainVideo;