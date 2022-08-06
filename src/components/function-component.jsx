import React from "react";

export function FunctionComponent({myClassName = '', v1 = '', swtch = '', clor = ''}) {
//export function FunctionComponent(props) {
	//const {myClassName = '', v1 = '', swtch = '', clor = ''} = props;
	//const {myClassName = '', v1 = '', s1} = props;

	//console.log(s1);
	
	//const Component = <h1 className={props.myClassName}>Function Component ({props.myClassName})</h1>;
	//
	//if ( s1.swtch === 1 ){
	//	Component = <h1 className={myClassName}>Function Component { v1 }<br/>({myClassName})</h1>;
	//} else {
	//	Component = <h1>Function Component { v1 }<br/>(header-color Red)</h1>;
	//}

	//const Component = function (){
	//	if (s1.swtch === 1 ){
	//		return <h1 className={myClassName}>Function Component { v1 }<br/>({myClassName})</h1>;
	//	} else {
	//		return <h3>Function Component { v1 }<br/>(header-color Red)</h3>;
	//	}
	//}()

	//const Component = () => ( (s1.swtch === 1 ) 
	const Component = () => ( (swtch === 1 ) 
		?
			<h1 className={myClassName}>Function Component { v1 }<br/>( <span style={{color: clor}}>{myClassName}</span> )</h1>
		:
			<div>Function Component { v1 }<br/>( <span style={{color: clor}}>header-color</span> Red )</div>
		
	);
	
	console.log(Component());

	return Component();
}