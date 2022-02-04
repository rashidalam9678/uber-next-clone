import Map from '../components/Map';
import tw from "tailwind-styled-components";
import RideSelector from '../components/RideSelector';
import Link from "next/link";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Confirm = () => {
    const [pickupCoordinates, setPickup] = useState();
    const [dropoffCoordiantes, setDropoff] = useState();
    const router = useRouter();
    const { pickup, dropoff } = router.query;
    const getPickupCoordinates = (pickup) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?limit=1&access_token=pk.eyJ1IjoicmFzaGlkYWxhbTk2NzgiLCJhIjoiY2t6NWZubW5mMHFhdjJ4cDQ1MzJ5ZmJraiJ9.cBLFlGWujN5Rsb2IpvtGCg`)
            .then((res) => res.json())
            .then((data) => {
                setPickup(data.features[0].center);
            })
    }
    const getDropoffCoordinates = (dropoff) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?limit=1&access_token=pk.eyJ1IjoicmFzaGlkYWxhbTk2NzgiLCJhIjoiY2t6NWZubW5mMHFhdjJ4cDQ1MzJ5ZmJraiJ9.cBLFlGWujN5Rsb2IpvtGCg`)
            .then((res) => res.json())
            .then((data) => {
                setDropoff(data.features[0].center);
            })
    }
    useEffect(() => {
        getPickupCoordinates(pickup);
        getDropoffCoordinates(dropoff);
    }, [pickup, dropoff]);

    return (
        <Wrapper>
            <Map pickupCoordinates={pickupCoordinates} dropoffCoordiantes={dropoffCoordiantes} />
            <SearchResultContainer>
                <RideContainer>
                    <RideSelector/>
                </RideContainer>
                <ConfirmButtonContainer>
                    <ConfirmButton>Confirm UberX</ConfirmButton>
                </ConfirmButtonContainer>
            </SearchResultContainer>
            

        </Wrapper>
    );
};

export default Confirm;

const Wrapper = tw.div`
flex flex-col h-screen`;
const SearchResultContainer = tw.div`
flex flex-col flex-1 `;
 const RideContainer = tw.div`
 flex-1 `;
 const ConfirmButtonContainer = tw.div` border-t-2`;
 const ConfirmButton = tw.div`
 flex justify-center items-center bg-black text-white my-4 mx-4 cursor-pointer p-4 text-xl`;

