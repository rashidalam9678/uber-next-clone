import tw from "tailwind-styled-components";
import Link from "next/link";
import { useState, useEffect } from 'react';

const Search = () => {
    const [pickup, setPickup]=useState("");
    const [dropoff, setDropoff]=useState("");
   
    return (
        <Wrapper>
            <Link href='/'>
                <ButtonContainer>
                    <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
                </ButtonContainer>
            </Link>
            <InputContainer>
                <FromToIcons>
                    <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" />
                    <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
                    <Square src="https://img.icons8.com/windows/50/000000/square-full.png" />
                </FromToIcons>
                <InputBoxes>
                    <Input
                        value={pickup} onChange={(e)=>setPickup(e.target.value)}
                        placeholder="Enter pickup location" />
                    <Input 
                        value={dropoff} onChange={(e)=>setDropoff(e.target.value)}
                        placeholder="Where to?" />
                </InputBoxes>
                <PlusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png" />
            </InputContainer>
            <SavedPlaces>
                <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png" />
                Saved Places
            </SavedPlaces>

            
            <Link
            href={{
              pathname: '/Confirm',
              query: { pickup:pickup, dropoff:dropoff },
            }}
          >
              <ConfirmLocation>Confirm Lacation</ConfirmLocation>
          </Link>

            

        </Wrapper>
    );
};

export default Search;

const Wrapper = tw.div`
bg-gray-200 h-screen`;
const ButtonContainer = tw.div`
bg-white px-4`;
const BackButton = tw.img`
h-12 hover:bg-gray-200 rounded-full cursor-pointer`;
const InputContainer = tw.div`
bg-white flex items-center px-4 mb-2
`;
const FromToIcons = tw.div`
w-10 flex flex-col items-center mr-2`;
const Circle = tw.img`
w-2.5 `;
const Line = tw.img`
h-10`;
const Square = tw.img`
w-3`;
const InputBoxes = tw.div`
flex flex-col flex-1 mr-2`;
const Input = tw.input`
bg-gray-200 my-2 p-2 rounded-2 border-none outline-none`;
const PlusIcon = tw.img`
bg-gray-200 h-10 w-10 rounded-full ml-4`;
const SavedPlaces = tw.div`
bg-white px-4 flex items-center py-2`;
const StarIcon = tw.img`
w-10 h-10 rounded-full bg-gray-400 p-2 mr-4`;
const ConfirmLocation = tw.a`
bg-black text-white mx-4 py-2 mt-4 flex items-center justify-center cursor-pointer
`;