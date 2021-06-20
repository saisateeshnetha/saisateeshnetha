import React from 'react'

function Welcome()
 {
    let name = 'Sai';

    const getMyName = () =>{
         return 'sai sateesh';
    }

   let user = {firstname:'sai',lastname:'sateesh'};
  const styles = {backgroundColor:'red' , padding:'15px' , fontWeight:'bold', fontstyle:'italic'};

    return ( 
        <div>
            <div>
               <h1> This is welcome {name} </h1> 
               <p style={styles}> This some descreation about Welcome Component </p> 
            </div>
            <div>
               <h2>This is sub heading -{getMyName()}</h2>
               <h3>{user.firstname+" "+user.lastname}</h3>
            </div>
        </div>
    )
}

export default Welcome;