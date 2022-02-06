import tw from "tailwind-styled-components";
import {carList} from '../data/carList'
import {useState, useEffect} from 'react';



const RideSelector = (props) => {
    const [rideDuration, setrideDuration]=useState(0);
    const {pickupCoordinates, dropoffCoordinates} = props;
    useEffect(() => {
        rideDuration=fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?geometries=geojson&access_token=pk.eyJ1IjoicmFzaGlkYWxhbTk2NzgiLCJhIjoiY2t6NWZubW5mMHFhdjJ4cDQ1MzJ5ZmJraiJ9.cBLFlGWujN5Rsb2IpvtGCg`)
        .then((res) => res.json())
        .then((data) => {
            setrideDuration(data.routes[0].duration/100);
        })
    },[pickupCoordinates, dropoffCoordinates]);
  return (
      <Wrapper>
          <Title>Choose a ride or swipe up for more</Title>
          <CarList>

                {carList.map((car, index) => {
                    return(
                <Car key={index}>
                    <CarImage src={car.imgUrl} />
                    <CarDetails>
                          <CarName>{car.service}</CarName>
                          <Time>5 min away</Time>
                    </CarDetails>
                    <CarPrice>{'$' + (rideDuration*car.multiplier).toFixed(2)}</CarPrice>
                </Car>
                    )
                })}

          </CarList>
      </Wrapper>
  );
};

export default RideSelector;
const Wrapper = tw.div`
flex flex-col overflow-y-scroll `;
const Title = tw.div`
text-gray-600 text-center text-sm py-3 border-b `;
const CarList = tw.div``;
const Car = tw.div`
flex items-center  border-b p-4 px-8`;
const CarImage = tw.img`
h-14 mr-12`;
const CarDetails = tw.div`
flex  flex-1 flex-col `;
const CarName = tw.div`font-medium text-sm`;
const Time = tw.div`text-xs text-blue-500`;
const CarPrice = tw.div`text-sm `;