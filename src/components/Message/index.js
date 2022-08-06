import './styles.css';

export const Message = ({text, addText, onMessageClick}) => {
//export const Message = (props) => {
	//console.log(props);
	//const text = props.text;
	//const { text } = props;
	//const { text, addText, onMessageClick } = props;

	return (<h5 className='header-blue' onClick={onMessageClick}>
		Message: {text}.<br/>
		Add text: <span className='sub-header'>
			{addText}
		</span>
	</h5>)

	//return (<h5 className='header-blue'>
		//Message: {text}.<br/>Add text: <span style={{fontWeight:300}}>{addText}</span></h5>)
		//Message: {props.text}.<br/>Add text: {props.addText}
	//</h5>);
}
