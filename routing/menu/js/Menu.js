const MenuItem = props => (
  <a className={`menu__item ${props.isActive ? 'menu__item-active': null}`} href={`#${props.url}`}>{props.title}</a>
);

const MenuComponent = props => {
  let menuItems = [
    {url:"/", title: "Главная"},
    {url:"/drift", title: "Дрифт-такси"},
    {url:"/timeattack", title: "Time Attack"},
    {url:"/forza", title: "Forza Karting"},
  ];
  return (
    <nav className="menu">
      {menuItems.map((item, i) => <MenuItem key={`item${i}`} isActive={props.location.pathname === item.url} url={item.url} title={item.title} />)}
    </nav>
  );
};

const Menu = ReactRouterDOM.withRouter(MenuComponent);