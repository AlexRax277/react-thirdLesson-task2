import './Listing.css';
import React from 'react';
import PropTypes from 'prop-types';

class Listing extends React.Component {
    constructor(items) {
        super();
        this.items = items;
    }

    titleCut(str) {
        if(str === undefined) {
            return 'Woodland Fairy'
        } else {
            if (str.length > 50) {
                const newStr = str.substr(0, 50) + '...';
                return newStr;
            } else {
                return str;
            }
        }  
    }

    priceFilter(pr, cur) {
        if(pr === undefined) {
            return '$10.00'
        } else {
            if(cur === 'USD') {
                return ('$' + pr);
            } else if(cur === 'EUR') {
                return ('€' + pr);
            } else {
                return (pr + ' ' + cur);
            }
        }
    }

    levelFunc(qua) {
        if(qua <= 10 || qua === undefined) {
            return 'item-quantity level-low';
        } else if(qua <= 20) {
            return 'item-quantity level-medium';
        } else if(qua > 20) {
            return 'item-quantity level-high';
        } 
    }


    render() {
        return (
            <ul className='my-list'>
                { this.items.items.map((element) => {return (
                    <li className="item-list" key={ element.listing_id }>
                    <div className="item">
                        <div className="item-image">
                            <a href={ element.url }>
                                <img src={ element.MainImage ? element.MainImage.url_570xN : "https://img1.etsystatic.com/156/0/12814579/il_570xN.1173240751_50hv.jpg"} alt={ element.title } />
                            </a>
                        </div>
                        <div className="item-details">
                            <p className="item-title">{ this.titleCut(element.title) }</p>
                            <p className="item-price">{ this.priceFilter(element.price, element.currency_code) }</p>
                            <p className={ this.levelFunc(element.quantity) }>{ element.quantity } left</p>
                        </div>
                    </div>
                </li>
                )}) }
            </ul>
        )
    }
}

Listing.defaultProps = {
    items: [],
    el: <li className="item-list">
            <div className="item">
                <div className="item-image">
                    <a href="https://www.etsy.com/listing/292754135/woodland-fairy">
                        <img src="https://img1.etsystatic.com/156/0/12814579/il_570xN.1173240751_50hv.jpg" alt='123'/>
                    </a>
                </div>
                <div className="item-details">
                    <p className="item-title">Woodland Fairy</p>
                    <p className="item-price">$3.99</p>
                    <p className="item-quantity level-medium">12 left</p>
                 </div>
            </div>
        </li>
};

Listing.propTypes = {
    items: PropTypes.array,
    listing_id: PropTypes.number,
    url: PropTypes.string,
    MainImage: PropTypes.object,
    url_570xN: PropTypes.string,
    title: PropTypes.string, 
    currency_code: PropTypes.string, 
    price: PropTypes.string, 
    quantity: PropTypes.number 
}

export default Listing;
