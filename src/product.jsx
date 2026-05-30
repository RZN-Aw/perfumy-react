import img1 from "./assets/one.jpg"
import img2 from "./assets/two.jpg"
import img3 from "./assets/three.jpg"


function Product(){
    return(
<div class="products">
            
            <div class="box">
        
                        <img src={img1}></img>
                        <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>    
            </div>
            
            
            <div class="box">
                <img src={img2}></img>
                <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p> 
            </div>
            <div class="box">
                <img src={img3}></img>
                <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
            </div>
        </div>
    )
}
export default Product

