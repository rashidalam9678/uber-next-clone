import React ,{useEffect} from 'react';
import tw from 'tailwind-styled-components'
import {useRouter} from 'next/router'
import {signInWithPopup, onAuthStateChanged} from 'firebase/auth';
import {auth, provider} from '../firebase';


const Login = () => {
  const router = useRouter();
  useEffect(() => {
    onAuthStateChanged(auth,user=>{
      if(user){
        router.push('/')
      }
    })
  } ,[]);
  return (
    <Wrapper>
      <UberLogo src="https://i.ibb.co/n6LWQM4/Post.png" />
      <Title> Log in to access your account</Title>
      <HeadImage src="https://i.ibb.co/CsV9RYZ/login-image.png"/>
      <SignInButton onClick={()=>signInWithPopup(auth, provider)} > Sign In with Google</SignInButton>

    </Wrapper>
  );
};

export default Login;
const Wrapper = tw.div` bg-gray-200 flex h-screen w-full flex-col p-4`
const Title = tw.div` text-5xl text-gray-500 pt-4 pl-8 text-center`
const SignInButton = tw.button`bg-black  sm:mt-8 text-white py-4 font-normal mt-4 lg:mx-32 `
const UberLogo = tw.img`w-auto object-contain   h-10 self-start pl-8`;
const HeadImage = tw.img`w-full lg:h-4/6 sm: 5/6 object-contain `;