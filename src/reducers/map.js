import {ADD_TRIP_AND_ROUTE,REMOVE_TRIP,REMOVE_ROUTE} from '../actions/types';

const initialState = {
    trip:JSON.parse(localStorage.getItem('trip')),
    route:JSON.parse(localStorage.getItem('route'))
}

export default function (state=initialState,action){

  const { type, payload } = action;


    switch(type){

        case ADD_TRIP_AND_ROUTE:

            localStorage.setItem('route',JSON.stringify(payload[0]))
            localStorage.setItem('trip',JSON.stringify(payload[1]))

            return {
                ...state,
                trip:payload[1],
                route:payload[0]
            };
        
        case REMOVE_ROUTE,REMOVE_TRIP:
            
        localStorage.removeItem('trip');
        localStorage.removeItem('route');

        return{
            
            ...state,
            route:payload,
            trip:payload
        }
        default:

            return state
    };

}