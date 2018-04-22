import React from 'react';

import { Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';


export default (props) =>{
	return (
		<div>
			<Sparklines svgHeight={200} svgWidth={200} data={props.data}>
			<SparklinesReferenceLine type='avg' />
  			<SparklinesLine color={props.color} />
			</Sparklines>
		</div>
	)
}