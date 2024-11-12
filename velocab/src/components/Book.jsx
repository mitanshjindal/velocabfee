import React, { useState, useEffect } from 'react';
import Awesomplete from 'awesomplete';
import 'awesomplete/awesomplete.css';
import './css/Book.css';
import b1 from "../assets/images/go_interecity.png";
import b2 from "../assets/images/xl_intercity.png";
import b3 from "../assets/images/luxury.png";
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { color } from 'framer-motion';

const Book = () => {
    const [pickup, setPickup] = useState('');
    const [dropoff, setDropoff] = useState('');
    const [distance, setDistance] = useState(null);
    const [prices, setPrices] = useState({ go: '-', xl: '-', luxury: '-' });
    const [loading, setLoading] = useState(false);
    const locationCache = {};
    const navigate = useNavigate();

    useEffect(() => {
        const pickupInput = document.getElementById("pickup");
        const dropoffInput = document.getElementById("dropoff");

        const pickupAwesomplete = new Awesomplete(pickupInput, {
            minChars: 3,
            maxItems: 5
        });

        const dropoffAwesomplete = new Awesomplete(dropoffInput, {
            minChars: 3,
            maxItems: 5
        });

        const fetchSuggestions = async (query, callback) => {
            if (locationCache[query]) {
                callback(locationCache[query]);
            } else {
                const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&countrycodes=IN&addressdetails=1&limit=5`;

                try {
                    const response = await fetch(url);
                    const data = await response.json();
                    if (data && data.length > 0) {
                        const suggestions = data.map(item => item.display_name);
                        locationCache[query] = suggestions;
                        callback(suggestions);
                    } else {
                        callback([]);
                    }
                } catch (error) {
                    console.error('Error fetching suggestions:', error);
                    callback([]);
                }
            }
        };

        const debounce = (func, delay) => {
            let debounceTimer;
            return function(...args) {
                clearTimeout(debounceTimer);
                debounceTimer = setTimeout(() => func.apply(this, args), delay);
            };
        };

        const debouncedFetchSuggestions = debounce(fetchSuggestions, 300);

        pickupInput.addEventListener("input", function() {
            const query = pickupInput.value;
            if (query.length > 2) {
                debouncedFetchSuggestions(query, suggestions => {
                    pickupAwesomplete.list = suggestions;
                });
            }
        });

        dropoffInput.addEventListener("input", function() {
            const query = dropoffInput.value;
            if (query.length > 2) {
                debouncedFetchSuggestions(query, suggestions => {
                    dropoffAwesomplete.list = suggestions;
                });
            }
        });
    }, []);

    const geocodeAddress = async (address) => {
        const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&countrycodes=IN`;
        const response = await fetch(url);
        const data = await response.json();
        if (data && data.length > 0) {
            return { lat: parseFloat(data[0].lat), lon: parseFloat(data[0].lon) };
        }
        return null;
    };

    const haversineDistance = (lat1, lon1, lat2, lon2) => {
        const R = 6371;
        const dLat = toRad(lat2 - lat1);
        const dLon = toRad(lon2 - lon1);
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                  Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
                  Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    };

    const toRad = (deg) => {
        return deg * (Math.PI / 180);
    };

    const resetPrices = () => {
        setPrices({ go: '-', xl: '-', luxury: '-' });
    };

    const showPrices = async () => {
        setLoading(true);
        setTimeout(async () => {
            await calculateDistance();
            setLoading(false);
        }, 2000);
    };

    const calculateDistance = async () => {
        if (pickup && dropoff) {
            const pickupCoords = await geocodeAddress(pickup);
            const dropoffCoords = await geocodeAddress(dropoff);
            if (pickupCoords && dropoffCoords) {
                const distance = haversineDistance(pickupCoords.lat, pickupCoords.lon, dropoffCoords.lat, dropoffCoords.lon);
                setDistance(distance.toFixed(2));
                const priceGo = distance * 9;
                const priceXL = distance * 13;
                const priceLuxury = distance * 18;
                setPrices({ go: priceGo.toFixed(2), xl: priceXL.toFixed(2), luxury: priceLuxury.toFixed(2) });
            } else {
                setDistance(null);
                resetPrices();
            }
        } else {
            setDistance(null);
            resetPrices();
        }
    };

    const handleRideSelect = (type, image) => {
        const selectedRide = { 
            type, 
            image, 
            from: pickup, 
            to: dropoff, 
            distance, 
            price: prices[type], 
            seats: type === 'go' ? '1-4' : type === 'xl' ? '1-6' : '1-4' 
        };
        navigate('/payment', { state: { selectedRide } });
    };

    return (
        <>
        <Navbar/>
        <div className="container-fluid">
            <h1 className="mt-4 text-black heading-left" style={{ fontWeight: 600 }}>Request a Ride <br />for Now or Later:</h1>
            <div className="row justify-content-center mt-5">
                <div className="yup col-md-4 p-5 text-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.75)' }}>
                    <form id="rideForm">
                        <div className="d-flex flex-row mb-4">
                            <input
                                type="text"
                                id="pickup"
                                className="form-control"
                                placeholder="Enter Pickup Location"
                                value={pickup}
                                onChange={(e) => setPickup(e.target.value)}
                                required
                            />
                        </div>
                        <div className="d-flex flex-row mb-4">
                            <input
                                type="text"
                                id="dropoff"
                                className="form-control rounded-1"
                                placeholder="Enter Drop-off Location"
                                value={dropoff}
                                onChange={(e) => setDropoff(e.target.value)}
                                required
                            />
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <button type="button" className="btn btn-primary btn-see-prices" onClick={showPrices}>
                                See Prices
                                {loading && <div className="spinner-border text-light" role="status"></div>}
                            </button>
                        </div>
                    </form>
                    {distance !== null && <div id="distanceOutput" className="text-dark">Distance: {distance} km</div>}
                </div>
            </div>

            <div className="container-fluid mt-5 w-75">
                
                <div className="row m-4 rounded-pill p-3">
                    <div className="col-3 d-flex justify-content-center align-items-center">
                        <img className="img-thumbnail" src={b1} alt="Go Intercity" height="200px" />
                    </div>
                    <div className="col-9 ps-4">
                        <div className="d-flex">
                            <div className="col-4">
                                <h5 className="fw-bold">Go Intercity</h5>
                            </div>
                            <div className="col-4">
                                <button className="btn btn-dark" onClick={() => handleRideSelect('go', b1)}>1-4 seats</button>
                            </div>
                        </div>
                        <p style={{color:'black'}}>Affordable Outstation rides in compact Cars</p>
                        <p className="ps-2 fw-bold" style={{color:'black'}}>Price: Rs. <span id="price-go">{prices.go}</span></p>
                    </div>
                </div>

                
                <div className="row m-4 rounded-pill p-3">
                    <div className="col-3 d-flex justify-content-center align-items-center">
                        <img className="img-thumbnail" src={b2} alt="XL Intercity" />
                    </div>
                    <div className="col-9 ps-4">
                        <div className="d-flex">
                            <div className="col-4">
                                <h5 className="fw-bold">XL Intercity</h5>
                            </div>
                            <div className="col-4">
                                <button className="btn btn-dark" onClick={() => handleRideSelect('xl', b2)}>1-6 seats</button>
                            </div>
                        </div>
                        <p style={{color:'black'}}>Outstation rides in spacious SUVs</p>
                        <p className="ps-2 fw-bold" style={{color:'black'}}>Price: Rs. <span id="price-xl">{prices.xl}</span></p>
                    </div>
                </div>

                
                <div className="row m-4 rounded-pill p-3">
                    <div className="col-3 d-flex justify-content-center align-items-center">
                        <img className="img-thumbnail" src={b3} alt="Luxury Intercity" />
                    </div>
                    <div className="col-9 ps-4">
                        <div className="d-flex">
                            <div className="col-4">
                                <h5 className="fw-bold">Luxury Intercity</h5>
                            </div>
                            <div className="col-4">
                                <button className="btn btn-dark" onClick={() => handleRideSelect('luxury', b3)}>1-4 seats</button>
                            </div>
                        </div>
                        <p style={{color:'black'}}>Outstation rides in Luxury Cars</p>
                        <p className="ps-2 fw-bold" style={{color:'black'}}>Price: Rs. <span id="price-luxury">{prices.luxury}</span></p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Book;