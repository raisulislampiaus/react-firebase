import React from 'react'
import './Home.css'
import piaus from '../img/ecommerce-2140603_960_720.webp'
import Product from '../components/product/Product'

function Home() {
    return (
        
        <div className="home">
            <div className="home__container">
               <img className="home__img" src={piaus} alt='' />

               <div className="home__raw">
               <Product 
                     id="1"
                     title="this awesome"
                     price={34.88}
                     image="https://cdn.pixabay.com/photo/2016/03/18/01/09/cupcake-1264214_960_720.png"

                    />
                    
                    <Product 
                     id="2"
                     title="this awesome"
                     price={34.88}
                     image="https://cdn.pixabay.com/photo/2020/05/11/21/57/bake-5160388_960_720.jpg"

                    />
                    
                    
               </div>

               <div className="home__raw">
               <Product 
                     id="3"
                     title="this awesome"
                     price={34.88}
                     image="https://cdn.pixabay.com/photo/2018/06/18/02/03/horse-3481756_960_720.jpg"

                    />
                    <Product 
                     id="4"
                     title="this awesome"
                     price={34.88}
                     image="https://cdn.pixabay.com/photo/2016/03/18/01/09/cupcake-1264214_960_720.png"

                    />
                    <Product 
                     id="5"
                     title="this awesome"
                     price={34.88}
                     image="https://media.istockphoto.com/photos/navy-blue-retro-dress-with-short-sleeves-isolated-on-white-picture-id934408078?s=612x612"

                    />
                    <Product 
                     id="6"
                     title="this awesome"
                     price={34.88}
                     image="https://cdn.pixabay.com/photo/2016/03/18/01/09/cupcake-1264214_960_720.png"

                    />
               </div>

               <div className="home__raw">
               <Product 
                     id="7"
                     title="this awesome"
                     price={34.88}
                     image="https://media.istockphoto.com/photos/navy-blue-long-womans-shirt-isolated-on-white-background-picture-id823256466?s=612x612"

                    />
               </div>
            </div>
         
            
        
        
        </div>
        
    )
}

export default Home
