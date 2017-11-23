/******************************
 * Ваша реализация компонента
 *****************************/

/**
 * Немного избыточная структура в связке с `currencyFormatSide`,
 * почему бы не сделать отображение из знака валюты напрямую в функцию?
 * Только учти, что в этом случае обе функции нужно вынести в переменные.
 */
let before = (currency, value) => `${currency}${value.toFixed(2)}`;
let after = (currency, value) => `${value.toFixed(2)}${currency}`;

const defaultCurrencyFormat = after;
const currencyFormatSide = {
    '£': before,
    '$': before,
    '€': after,
    '₽': after
};

const getFormat = (currency) => {
    /**
     * Формально здесь ты всё делаешь правильно, но на практике применяется другая запись,
     * потому что короче:
     * ```
     *   const format = currencyFormatSide[currency] || defaultCurrencyFormat;
     * ```
     */
    return currencyFormatSide[currency] || defaultCurrencyFormat;
};

const getPrice = (currency, value) => getFormat(currency)(currency, value);

const ShopItem = props => {
    const {item} = props;

    return (
        <div className="main-content">
          <h2>{item.brand}</h2>
          <h1>{item.title}</h1>
          <h3>{item.description}</h3>
          <div className="description">
              {item.descriptionFull}
          </div>
          <div className="highlight-window  mobile">
            <div className="highlight-overlay" />
          </div>
          <div className="divider" />
          <div className="purchase-info">
            <div className="price">{getPrice(item.currency, item.price)}</div>
            <button>Добавить в корзину</button>
          </div>
        </div>
    );
};


/******************************
 * Не вносить изменния ниже
 ******************************/
const item = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 399.02,
    currency: '€',
};

ReactDOM.render(<ShopItem item={item} />, document.getElementById('root'));