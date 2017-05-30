const Menu = data => {
  // if (!data.opened)
  //   data.opened = false;

  if (data.opened)
    return (
      <div className="menu menu-open">
        <div className="menu-toggle"><span></span></div>
        <nav>
          <Items items={data.items}></Items>
        </nav>
      </div>
    );
  else
    return (
      <div className="menu">
        <div className="menu-toggle"><span></span></div>
      </div>
    );
};

const Items = data => (
  <ul>
    {data.items.map(item =>
      <li><a href={item.href}>{item.title}</a></li>
    )}
  </ul>
);