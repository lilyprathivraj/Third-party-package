import ReactPlayer from "react-player";
import "./index.css";

const VideoPlayer = () => (
	<div className="video-container">
		<h1 className="heading">Video Player</h1>
		<div className="responsive-container">
			<ReactPlayer url="https://youtu.be/5WsUIeNAtbM?si=X6PaOzWC7jbBv76_" />
		</div>
	</div>
);

export default VideoPlayer;
