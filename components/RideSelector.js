import tw from "tailwind-styled-components";
import {carList} from '../data/carList'


const RideSelector = () => {
  
  return (
      <Wrapper>
          <Title>Choose a ride or swipe up for more</Title>
          <CarList>

                {carList.map((car, index) => {
                    return(
                <Car >
                    <CarImage src={car.imgUrl} />
                    <CarDetails>
                          <CarName>{car.service}</CarName>
                          <Time>5 min away</Time>
                    </CarDetails>
                    <CarPrice>20 $</CarPrice>
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