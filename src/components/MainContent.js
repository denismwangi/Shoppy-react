import React from 'react'
import './mainContent.css';
import product_card from './Product_data';

const MainContent = () =>{
    console.log(product_card);

    const listItems = product_card.map((item) =>
    <div className="card" key={item.id}>
        <div className="card_img">
            <img src={item.thumb}/>


        </div>
        <div className="card-header">
            <h2>{item.product_name}</h2>
            <h2>{item.description}</h2>
            <p className="price">{item.price}<span>{item.currency}</span></p>
            <div className="btn">Add to cart</div>

        </div>

    </div>

    );
    return(
        <div className="main_content">
            <h3>Phones</h3>
            {listItems}

        </div>
    )
}

export default MainContent
