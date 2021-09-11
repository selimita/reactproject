import React from "react";
import '../style.css';

const Progress = ({done}) => {
	const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 200);
	
	return (
		<div className="progress">
			<div className="progress-done" style={style}>
            {done}%
			</div>
		</div>
	)
}

const ProgressBar = () => (
	<>
        <div className="progress-area col-10 mx-auto">
            <h1 className="mx-auto text-center">our <strong>skills</strong></h1>
            <div className="bars col-md-6 mx-auto">
                <div>
                    <p>HTML</p>
                    <Progress done="95"/>
                </div>
                <div>
                    <p>CSS</p>
                    <Progress done="90"/>
                </div>
                <div>
                    <p>PHP</p>
                    <Progress done="80"/>
                </div>
                <div>
                    <p>WordPress</p>
                    <Progress done="85"/>
                </div>
                <div>
                    <p>React</p>
                    <Progress done="65"/>
                </div>
            </div>
            
            {/* <Progress done="80"/>
            <Progress done="95"/>
            <Progress done="75"/>
            <Progress done="65"/> */}
        </div>
	</>
);
export default ProgressBar;
	
// ReactDOM.render(<App />, document.getElementById('app'));