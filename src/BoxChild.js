import React, { Component } from 'react';

class BoxChild extends Component{
	render(){
		return(
			<div>
				{
					/*El evento onClick llama a una función de su padre, a través de las props
					<BoxChild goParent= /> y le pasa un String por parametro que al final
					Recibirá el abuelo updateState*/
				}
				<h1 onClick={() => this.props.goParent('Box Child yeah')}> Box Child </h1>
			</div>
		);
	}
}

export default BoxChild;