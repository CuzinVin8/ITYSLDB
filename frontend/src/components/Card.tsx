export default function Card(props:{
	quote: string;
	imgurl: string;
	sketch: string;
	season: string;
	episode: string;
	character: string;
}){  

    return (
    <li className="p-5">
		<div className="rounded-lg p-5 bg-gray-800 h-full">
			<i>{props.sketch}</i>, Season: {props.season}, Ep: {props.episode}<br />
			<img src={props.imgurl} /><br />
			<div className="text-xl">{props.quote}"</div>
			<div className="text-right pt-2">{props.character}</div>
		</div>
	</li>
    )
}