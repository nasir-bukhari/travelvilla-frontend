import React from 'react'

const GEOApi = () => {
    // initializes state
    let [latitude, setLatitude] = React.useState(-33.7560119)
    let [longitude, setLongitude] = React.useState(150.6038367)
    let [address, setAddress] = React.useState('')

    // searches for new locations
    const updateCoordinates = (e) => {
        e.preventDefault()

        const encodedAddress = encodeURI(address)

        // fetches data from our api
        fetch(`https://google-maps-geocoding.p.rapidapi.com/geocode/json?language=en&address=${encodedAddress}`, {
            "method": "GET",
            "headers": {
            "x-rapidapi-host": "google-maps-geocoding.p.rapidapi.com",
            "x-rapidapi-key": "53a15eb743msh3cdbb02c5482110p1cf9d2jsn3127424c9011"
            }
        })
        .then(response => response.json())
        .then(response => {
            console.log(response.results);
            setLatitude(response.results[0].geometry.location.lat);
            setLongitude(response.results[0].geometry.location.lng);
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            The latitude is {latitude}
            The longitude is {longitude}

            <form onSubmit={(e) => updateCoordinates(e)}>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="address"
                        required
                        aria-describedby="addressHelp"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        />
                </div>
                <button className="btn mb-4 btn-primary" type='submit'>Search Location</button>
            </form>
        </div>
    )
}

export default GEOApi