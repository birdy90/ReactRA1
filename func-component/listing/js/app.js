'use strict';

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://neto-api.herokuapp.com/etsy');
xhr.send(null);

xhr.onreadystatechange = function () {
    let DONE = 4; // readyState 4 means the request is done.
    let OK = 200; // status 200 is a successful return.
    if (xhr.readyState === DONE) {
        if (xhr.status === OK) {
            const jsonResponse = JSON.parse(xhr.responseText);
            ReactDOM.render(
                <Listing items={jsonResponse}/>,
                document.getElementById('root')
            );
        }
    }
};

let before = (currency, value) => `${currency}${value.toFixed(2)}`;
let after = (currency, value) => `${value.toFixed(2)} ${currency}`;

const currencyFormatSide = {'$': before, '€': before};
const formatReplacements = {'USD': '$', 'EUR': '€'};

const getFormat = (currency) => currencyFormatSide[currency] || after;
const getCurrency = (currency) => formatReplacements[currency] || currency;
const getPrice = (currency, value) => {
    currency = getCurrency(currency);
    return getFormat(currency)(currency, value);
};

const getquantityLevel = (quantity) => {
    quantity = parseInt(quantity);
    if (quantity < 10)
        return 'low';
    else if (quantity < 20)
        return 'medium';
    else
        return 'high';
};

const Listing = ({items}) => (
    <div className="item-list">
        {items.map(item => <Item item={item}/>)}
    </div>
);

Listing.defaultProps = {
    items: []
};

const Item = ({item}) => (
    <div className="item">
        <div className="item-image">
            <a href={item.url}>
                <img src={item.MainImage.url_570xN} />
            </a>
        </div>
        <div className="item-details">
            <p className="item-title">{item.title}</p>
            <Price value={item.price} currency={item.currency_code} />
            <Quantity quantity={item.quantity} />
        </div>
    </div>
);

const Price = ({value, currency}) => (
    <p className="item-price">
        {currency !== undefined ? getPrice(currency, parseInt(value)) : ''}
    </p>
);

const Quantity = ({quantity}) => {
    const className = `item-quantity level-${getquantityLevel(quantity)}`;
    return (
        <p className={className}>
            {quantity} left
        </p>
    );
};
