import { Fragment, useRef, useState } from "react";

const VideoPlayer = ({ url }: { url: string }) => {
    const videoRef: any = useRef();

    const [isPlaying, setIsPlaying] = useState(false);
    const [isBuffering, setIsBuffering] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [precentage, setPercentage] = useState(0)

    const handlePlay = () => {
        setIsPlaying(true);
    };

    const handlePause = () => {
        setIsPlaying(false);
    };

    const handleLoadedMetadata = () => {
        if (videoRef.current) {
            setDuration(videoRef.current.duration);
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            setCurrentTime(videoRef.current.currentTime);
            setPercentage((videoRef.current.currentTime / duration) * 100)
        }
    };

    const handleWaiting = () => {
        setIsBuffering(true);
    };

    const handleCanPlay = () => {
        setIsBuffering(false);
    };

    return (
        <Fragment>
            <video
                src={url}
                controls
                ref={videoRef}
                onPlay={handlePlay}
                onPause={handlePause}
                onLoadedMetadata={handleLoadedMetadata}
                onTimeUpdate={handleTimeUpdate}
                onWaiting={handleWaiting}
                onCanPlay={handleCanPlay}
            />
            <div className="video-info">
                <p>Total Duration: {duration.toFixed(2)} seconds</p>
                <p>Current Time: {currentTime.toFixed(2)} seconds</p>
                <p>Is Playing: {isPlaying ? "Yes" : "No"}</p>
                <p>Is Buffering: {isBuffering ? "Yes" : "No"}</p>
                <p>Video Played: {precentage.toFixed(2)} %</p>
            </div>
        </Fragment>
    );
};

export default VideoPlayer;
