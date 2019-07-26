import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	componentDidMount() {
		{
			/*this.pauseBtn.style.display = "none";*/
		}
		fetch("https://assets.breatheco.de/apis/sound/songs")
			.then(resp => resp.json())
			.then(songs => this.setState({ songs }));
	}

	play() {
		console.log("clicked");
	}

	render() {
		return (
			<div className="text-center mt-5">
				<h1>Paolas App!</h1>
				<div className="song">Song here</div>
				<div className="song">Song here</div>
				<div className="song">Song here</div>
				<div className="song">Song here</div>
				<div className="song">Song here</div>

				<div className="control">
					<div
						href="#"
						ref={elm => (this.playBtn = elm)}
						onClick={() => this.play()}>
						<i className="fas fa-play faicon" />
					</div>
					<div>
						Pause <i className="fas fa-pause faicon" />
					</div>
					<div>
						Next <i className="fas fa-forward faicon" />
					</div>
					<div>
						Reverse <i className="fas fa-backward faicon" />
					</div>
				</div>
			</div>
		);
	}
}
