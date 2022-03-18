import React from 'react'
import background from "../image/bookcase3.jpeg";
import DIRT from "../image/DIRT.jpeg";
// import D.C. DEAD from "../image/D C DEAD.jpeg";
// import A SAFE HOUSE from "../image/A SAFE HOUSE.jpeg"
// import BLACK DOG from '../image/BLACK DOG.jpeg';
// import BOMBSHELL from "../image/BOMBSHELL.jpeg";
// import CONTRA BAND from "../image/CONTRA BAND.jpeg";

const About =()=>{
return (
    <div style={{ backgroundImage: `url(${background})`, width:"100%", height:"1200px", backgroundRepeat: "no-repeat",backgroundSize: "cover" }}>
        
        <div> 
        <h1>Welcome to the Book Nook Author Showcase</h1>       
        <h1>Stuart Woods</h1>
        <p>  Stuart Woods is the author of more than seventy-five novels. He is a native of Georgia and began his writing career in the advertising industry. Chiefs, his debut in 1981, won the Edgar Award. An avid sailor and pilot, Woods lives in Florida, Maine, and Connecticut.</p>
       </div>

       <div className ="B1" style={{ backgroundImage: `url(${DIRT})`,height: "230px",width:"140px",backgroundSize: "cover",marginLeft: '100px'}}>
      
       </div>

       {/* <div className ="B1" style={{ backgroundImage: `url(${DIRT})`,height: "230px",width:"140px",backgroundSize: "cover",marginLeft: '100px'}}>
      
       </div> */}
       {/* <div className ="B1" style={{ backgroundImage: `url(${DIRT})`,height: "230px",width:"140px",backgroundSize: "cover",marginLeft: '100px'}}>
      
       </div> */}
          
       <div className ="B2" style={{ backgroundImage: `url(${DIRT})`,height: "230px",width:"140px",backgroundSize: "cover",marginTop:"130px",marginLeft: '100px'}}>
       </div>

       {/* <div className ="B2" style={{ backgroundImage: `url(${DIRT})`,height: "230px",width:"140px",backgroundSize: "cover",marginTop:"130px",marginLeft: '100px'}}>
       </div> */}

       {/* <div className ="B2" style={{ backgroundImage: `url(${DIRT})`,height: "230px",width:"140px",backgroundSize: "cover",marginTop:"130px",marginLeft: '100px'}}>
       </div> */}

       <div className ="B3" style={{ backgroundImage: `url(${DIRT})`,height: "230px",width:"140px",backgroundSize: "cover",marginTop:"120px",marginLeft: '100px'}}>
       </div>

       {/* <div className ="B3" style={{ backgroundImage: `url(${DIRT})`,height: "230px",width:"140px",backgroundSize: "cover",marginTop:"120px",marginLeft: '100px'}}>
       </div> */}

       {/* <div className ="B3" style={{ backgroundImage: `url(${DIRT})`,height: "230px",width:"140px",backgroundSize: "cover",marginTop:"120px",marginLeft: '100px'}}>
       </div> */}
    
       


        </div>

    // </div>
    
)

}
export default About;