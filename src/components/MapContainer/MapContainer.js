import React,{useRef,useState,useEffect} from "react";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import {MapContainer, TileLayer, useMap} from 'react-leaflet';
import marker from '../../../node_modules/leaflet/dist/images/marker-icon.png';
import markerShadow from '../../../node_modules/leaflet/dist/images/marker-shadow.png';
import {useSelector,useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';


const defaultIcon = new L.icon({
  iconUrl: marker,
  shadowUrl:markerShadow,
  iconSize: [15, 25],
  iconAnchor: [2, 1],
  shadowAnchor: [2, 1],
  shadowSize: [15, 24],
  popupAnchor: [1, -2]
});


const mapStyles = {
    marginTop: '50px',
    width: '500px',
    padding:'30px',
    height: '330px',
};



var ATTRIBUTION='Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
'Imagery © <a href="http://mapbox.com">Mapbox</a>' ;
const MAPBOX_TOKEN = 'pk.eyJ1IjoiamVhZnJlZXp5IiwiYSI6ImNrYmpicjczYjBucjIyeGxzNGRjNHMxejEifQ.bY_8hqCiG-LBMG1xXreqdA';
const URL= `https://api.mapbox.com/styles/v1/jeafreezy/ckorl31xc4b5m17o86qk3s26s/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_TOKEN}`;


const MapActions = ()=>{

  const map = useMap();
  const history = useHistory();
  const state = useSelector(state=>state.map);

  useEffect(()=>{

        
        const {fromLatitude,fromLongitude,toLongitude,toLatitude} = state.trip;
        const startLat=fromLatitude;
        const startLong=fromLongitude;
        const stopLat=toLatitude;
        const stopLong=toLongitude;
      // add the shortest route on the map
      if(state.route.features.length < 1){

        alert('No routes found')
        history.goBack()

      }else{

          map.addLayer(new L.GeoJSON(state.route,{style:{color:'blue',stroke:3} ,onEachFeature(feature,layer){

            const travelTime = feature.properties.travl_time;
            const destination = feature.properties.destinatin;
            const startingTime  = feature.properties.starting_t;
            const endingTime  = feature.properties.ending_t;
            const route = feature.properties.routes;
            const distance = feature.properties.distance;

            layer.bindTooltip(`<ul>
            
            <li>Travel Time: ${travelTime}</li>
            <li>Distance: ${distance} KM</li>
            <li>Next stop: ${destination}</li>
            <li>Start Time: ${startingTime}</li>
            <li>End Time: ${endingTime}</li>
              <li>Route: ${route}</li>
          
        
          
          </ul>`).openTooltip()
          
        }}))

        map.fitBounds(new L.GeoJSON(state.route).getBounds())

        //add the starting and destination on the map

        map.addLayer( new L.Marker([startLat,startLong],{icon:defaultIcon}).bindTooltip('Origin').openTooltip())
        map.addLayer(new L.Marker([stopLat,stopLong],{icon:defaultIcon}).bindTooltip('Destination').openTooltip())

      }},[]);

  return null
}


const MapView = ()=> {

    const [position,setPosition] = useState([27.919006933098263,76.42596915364265]);
    const ZOOM = 9;
    
    return (
    

      <MapContainer center={position} zoom={ZOOM} style={mapStyles}>

        <TileLayer
          attribution={ATTRIBUTION}
          url={URL}
        ></TileLayer>
        <MapActions />

      </MapContainer>
      
        
      
    );
}


export default MapView;