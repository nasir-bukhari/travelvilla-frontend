import {ADD_TRIP_AND_ROUTE,REMOVE_TRIP,REMOVE_ROUTE} from './types';
import axios from 'axios';

const GEOSERVER_URL= 'http://localhost:8080/geoserver/wfs?service=WFS&version=1.0.0&request=GetFeature&typeName=routeplanner:shortest_path&outputformat=application/json&viewparams='

export const addTrip =(payload)=>async(dispatch)=>{
    
    const {fromID,toID} = payload;

    const ROUTE_ID = `source:${fromID};target:${toID}`;

    const response  = await axios.get(GEOSERVER_URL + ROUTE_ID);
    
    dispatch({

            type:ADD_TRIP_AND_ROUTE,
            payload:[response.data,payload]
    })

   
}


export const removeTrip =()=>{

    return {

        type:REMOVE_TRIP,
        payload:{}
    }
}


export const removeRoute  = () =>{
    
    return{
        type:REMOVE_ROUTE,
        payload:{}
    }
}