/******************************
 * Ваша реализация компонента
 *****************************/

const defaultCurrencyFormat = 'after';

const currencyFormats = {
  'before': (currency, value) => `${currency}${value.toFixed(2)}`,
  'after': (currency, value) => `${value.toFixed(2)}${currency}`
};

const currencyFormatSide = {
  '£': 'before',
  '$': 'before',
  '€': 'after',
  '₽': 'after'
};

const getFormat = (currency) => {
  const format = currency in currencyFormatSide ? currencyFormatSide[currency] : defaultCurrencyFormat;
  // вторая проверка на случай, если в currencyFormatSide окажется неопределённый формат
  return format in currencyFormats ? currencyFormats[format]: currencyFormats[defaultCurrencyFormat];
};

const getPrice = (currency, value) => getFormat(currency)(currency, value);

/**
 * `data` лучше для компонентов называть `props`.
 * Это устоявшаяся терминология, читатель твоего кода сразу поймёт, что ты здесь имеешь ввизу.
 */
const ShopItem = props => {
  /**
   * Что кроме `let` мы используем, когда наши переменные не будут изменяться?
   * Кроме того, твой пример будет выглядеть ещё лучше,
   * если следующей строчкой ты деструктурируешь `item`. Не придётся писать везде `item.*`.
   */
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
        {
          /**
           * Задачка со звёздочкой:
           * ты знаешь, что знак валюты при указании цены для разных стран пишется либо
           * после цены, либо до. Сейчас у тебя знак валюты безапеляционно выводится до цены.
           * Давай поддержим вариант написание для `£`, `$`, `€`, `₽`.
           */

          /**
           * И небольшой баг: если поменять цену товара на, например, `399.02`,
           * твоё отображение сломается. Давай это починим.
           */
        }
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
  currency: '£',
};

ReactDOM.render(<ShopItem item={item} />, document.getElementById('root'));
