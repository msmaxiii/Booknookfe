import React from 'react'
import background from "../image/bookcase3.jpeg";

const About =()=>{
return (
    <div style={{ backgroundImage: `url(${background})`,objectFit:"cover", width:"100%", height:"100%", backgroundRepeat: "no-repeat" }}>
        
        <div> 
        <h1>Welcome to the Book Nook Author Showcase</h1>       
        <h1>Stuart Woods</h1>
        <p>Stuart Woods is the author of more than seventy-five novels. He is a native of Georgia and began his writing career in the advertising industry. Chiefs, his debut in 1981, won the Edgar Award. An avid sailor and pilot, Woods lives in Florida, Maine, and Connecticut.</p>
       </div>
           
    </div>
    
)

}
export default About;