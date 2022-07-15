import React from 'react';
import AdminSignin from "./AdminSignin"
import Registers from "./Registers"
// import SignUp from "./SignUp"


const Home = () => {
  return (
    <div>
    <Registers />
    <AdminSignin />
    {/* <SignUp /> */}
    </div>
  )
}

export default Home;
