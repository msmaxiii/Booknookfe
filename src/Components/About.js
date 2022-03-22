import React from 'react'
import background from "../image/bookcase3.jpeg";
import DIRT from "../image/DIRT.jpeg";
import D_C_DEAD from "../image/D_C_DEAD.jpeg";
import A_SAFE_HOUSE from "../image/A_SAFE_HOUSE.jpeg";
import BLACK_DOG from "../image/BLACK_DOG.jpeg"
import BOMBSHELL from "../image/BOMBSHELL.jpeg";
import CONTRA_BAND from "../image/CONTRA_BAND.jpeg";
import FOUL_PLAY from "../image/FOUL_PLAY.jpeg";
import SKIN_GAME from "../image/SKIN_GAME.jpeg";
import TREASON from "../image/TREASON.jpeg"

const About =()=>{
return (
    <div style={{ backgroundImage: `url(${background})`, width:"100%", height:"1900px", backgroundRepeat: "no-repeat",backgroundSize: "cover" }}>
        <div> 

        <h1>Welcome to the Book Nook Author Showcase</h1> 
        <br/>      
        <h3>Stuart Woods</h3>
        <p1><i>  Stuart Woods is the author of more than seventy-five novels. He is a native of Georgia and began his writing career in the advertising industry. Chiefs, his debut in 1981, won the <b>Edgar Award</b>. An avid sailor and pilot, Woods lives in Florida, Maine, and Connecticut.</i></p1>

        </div>
<div id="box1">
       <div className ="B1" style={{ backgroundImage: `url(${TREASON})`,height:"240px",width:"160px",backgroundSize:"cover"}}>
       </div>

       <div className ="B2" style={{ backgroundImage: `url(${A_SAFE_HOUSE})`,height:"240px",width:"160px",backgroundSize:"cover"}}>
       </div>

       <div className ="B3" style={{ backgroundImage: `url(${BOMBSHELL})`,height:"240px",width:"160px",backgroundSize:"cover"}}>
       </div>
</div>
<div id="box2">
       <div className ="B4" style={{ backgroundImage: `url(${FOUL_PLAY})`,height:"230px",width:"140px",backgroundSize:"cover"}}>
       </div>

       <div className ="B5" style={{ backgroundImage: `url(${CONTRA_BAND})`,height:"230px",width:"140px",backgroundSize:"cover"}}>
       </div>

       <div className ="B6" style={{ backgroundImage: `url(${D_C_DEAD})`,height:"230px",width:"140px",backgroundSize:"cover"}}>
       </div>
</div>
<div id="box3">
       <div className ="B7" style={{ backgroundImage: `url(${DIRT})`,height:"280px",width:"140px",backgroundSize:"cover"}}>
       </div>

       <div className ="B8" style={{ backgroundImage: `url(${BLACK_DOG})`,height:"280px",width:"140px",backgroundSize:"cover"}}>
       </div>

       <div className ="B9" style={{ backgroundImage: `url(${SKIN_GAME})`,height:"280px",width:"140px",backgroundSize:"cover"}}>
       </div> 
    
</div>     
    </div>   
    

 )
}
export default About;