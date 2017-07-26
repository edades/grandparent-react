import React, { Component } from 'react';
import BoxChild from './BoxChild';

class BoxParent extends Component{
	render(){
		return(
			<div>
				{
					/*onClick le pasa un String como parametro a la función this.props.goAction
					que es el nombre del prop <BoxParent goAction= /> */

					/*goParent es el props de BoxChild y recibe una función que es igual prop que
					está usando su padre goAction. (El String como parametro se pasa desde el mismo componenente)
					*/
				}
				<h1 onClick={() => this.props.goAction('Box Parent en la casa')}>Box Parent</h1>
				<BoxChild goParent={this.props.goAction}/>
			</div>
		);
	}
}

export default BoxParent;