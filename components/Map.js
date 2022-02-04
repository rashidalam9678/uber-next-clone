import mapboxgl from '!mapbox-gl'
mapboxgl.accessToken = 'pk.eyJ1IjoicmFzaGlkYWxhbTk2NzgiLCJhIjoiY2t6NWZubW5mMHFhdjJ4cDQ1MzJ5ZmJraiJ9.cBLFlGWujN5Rsb2IpvtGCg';
import tw from "tailwind-styled-components"
import { useEffect } from 'react'

const Map = (props) => {
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
            center: [80.5937, 20.9629],
            zoom: 3,
        });
        if (props.pickupCoordinates) {
            addToMap(map, props.pickupCoordinates);
        }
        if (props.dropoffCoordiantes) {
            addToMap(map, props.dropoffCoordiantes);
        };
        if (props.pickupCoordinates && props.dropoffCoordiantes) {
            map.fitBounds([props.pickupCoordinates, props.dropoffCoordiantes]
                , { padding: 100 });
        }
    }, [props.pickupCoordinates, props.dropoffCoordiantes]);
    const addToMap = (map, coordiantes) => {
        const marker1 = new mapboxgl.Marker()
            .setLngLat(coordiantes)
            .addTo(map);
    }


    return (
        <Wrapper id='map'></Wrapper>
    )
};

export default Map;
const Wrapper = tw.div`
    flex-1
`;

