import mapboxgl from '!mapbox-gl'
mapboxgl.accessToken = 'pk.eyJ1IjoicmFzaGlkYWxhbTk2NzgiLCJhIjoiY2t6NWZubW5mMHFhdjJ4cDQ1MzJ5ZmJraiJ9.cBLFlGWujN5Rsb2IpvtGCg';
import tw from "tailwind-styled-components"
import {useEffect} from 'react'

const Map = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
          center: [-74.50, 40],
          zoom: 3,
          });
      }, []);

  return (
      <Wrapper id='map'></Wrapper>
  )
};

export default Map;
const Wrapper= tw.div`
    flex-1
`;

