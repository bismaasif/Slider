import './Heroslider.css';

const Heroslider=()=>{
    return(
        <>
<div class="container_slider">
            <div className="wrapper">
                <div className="slide_holder">
                    <div id="slide_image_1">
                        <div className="text"><h2><p>SKY DIVING - AN EXTREME SPORT </p></h2>  </div>
                        
                        <button className="btn">CONTACT US</button>
                    </div>
                    <div id="slide_image_2">
                    <div className="text2"><h2><p>If you surrender to the wind, you can ride it. </p></h2>  </div>
                    </div>
                    <div id="slide_image_3">
                        <div className="div">
                            <h3 className="text3"><b>Explore more about us!</b></h3>
                            <p className="text4"><a href="https://www.skydivedubai.ae/">https://www.skydivedubai.ae/</a></p>
                        </div>
                    </div>
                </div>
                <div className="btn_holder">
                <a href="#slide_image_1" className="dots"></a>
                <a href="#slide_image_2" className="dots"></a>
                <a href="#slide_image_3" className="dots"></a>
            </div>


            </div>
           
 
</div>
        </>
        )
}
export default Heroslider;