import React from 'react';
	

export class ClassComponent extends React.Component {
	//constructor( props ) {
	//	super(props);
	//}

	render() {
		let nameList = ['Павел', 'Полина', 'Петр', 'Пелагея'];
		let domNameList = nameList.map((el, idx) => <li key={'idn_'+idx}>{ el }</li>);

		let objList = {
			1: {val: 'one'},
			2: {val: 'two'},
			3: {val: 'three'}
		}
		let domObjList = Object.values(objList).map((el, idx) => <li key={'ido_'+idx}>{ el['val'] }</li>)
		//let domObjList = Object.keys(objList).map(idx => <li key={'id_'+idx} style={{maxWidth: '25%'}}>{ objList[idx].val }</li>)

		const {myClassName = '', text = ''} = this.props;
		return (
		<div>
			<h2>{text}: <span className={myClassName}> Class Component</span></h2>
			<div style={{flexDirection: 'row', display: 'flex', justifyContent: 'space-around'}}>
				<div style={{textAlign: 'left', maxWidth: '35%', flexDirection: 'row'}}>
					<h4 className={myClassName}>Name list</h4>
					<ul>
						{domNameList}
					</ul>
				</div>
				<div style={{textAlign: 'left', maxWidth: '35%', flexDirection: 'row'}}>
					<h4 className={myClassName}>Object list</h4>
					<ol>
						{domObjList}
					</ol>
				</div>

			</div>
		</div>

		)
	}
}