/******************************
 * Ваша реализация компонента
 *****************************/

/**
 * Очень круто, что вместо одного компонента ты создал два. Отрабатываешь композицию — молодец.
 */

const Menu = props => {
  // if (!props.opened)
  //   props.opened = false;
  /**
   * В целом, задача решена — меню рисуется, но код нужно переписать более оптимальным способом.
   *
   * Главная недоработка: общая структура у тебя повторяется как в случае `data.opened`, так и в случае `!data.opened`. Попробуй использовать conditional rendering не на уровне корневого элемента `.menu` компонента, как сейчас, а на уровне каждого конкретного элемента.
   * Также помни, что каждый элемент ты можешь положить в переменную и использовать или нет в зависимости от `data.opened`.
   */
  return (
    <div className={props.opened ? 'menu menu-open' : 'menu'}>
      <div className="menu-toggle"><span /></div>
      <Items items={props.opened ? props.items : null}/>
    </div>
  );
};

const Items = props => {
  if (!props.items) {
    return null;
  }

  return (
    <nav>
      <ul>
        {props.items.map(item =>
          <li><a href={item.href}>{item.title}</a></li>
        )}
      </ul>
    </nav>
  );
};

/******************************
 * Не вносить изменния ниже
 ******************************/
const items = [
  { title: 'Главная страница', href: '#home' },
  { title: 'О компании', href: '#about' },
  { title: 'Контакты', href: '#contact' }
];

const app = (
  <div>
    <Menu items={items} opened />
    <Menu items={items} />
  </div>
);

ReactDOM.render(
  app,
  document.getElementById('root')
);
