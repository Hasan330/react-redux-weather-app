import { FETCH_WEATHER } from '../actions/index'

export default function(state= [], action){

	switch(action.type){
		case FETCH_WEATHER:
			console.log("Action received: ", action.payload.data);
			
			//Never mutate state	
			return [action.payload.data, ...state];  // return  state.concat([action.payload.data]); (Equivalents)
	}

	return state;
}