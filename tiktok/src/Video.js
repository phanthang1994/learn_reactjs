import video from "./Videos/video.mp4";
import { useRef, forwardRef, useImperativeHandle } from "react";

function Video(props, ref) {
    const videoRef = useRef()
    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play()
        },
        pause() {
            videoRef.current.pause()
        }
    }))
    return (
        <video
            ref={videoRef}
            src={video}
            width={280} />
    )

}

export default forwardRef(Video);
