const Tab = props => (
  <a className={`tabs__item ${props.isActive ? 'tabs__item-active': null}`} href={`#${props.url}`}>{props.title}</a>
);

const TabsComponent = props => {
  let tabs = [
    {url: "/", title: "Рефераты"},
    {url: "/creator", title: "Криэйтор"},
    {url: "/fortune", title: "Гадалка"},
  ];
  return (
    <nav className="tabs__items">
      {tabs.map((item, i) => <Tab key={`item${i}`} isActive={props.location.pathname === item.url} url={item.url} title={item.title} />)}
    </nav>
  );
};

const Tabs = ReactRouterDOM.withRouter(TabsComponent);

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="tabs">
          <Tabs />
          <div className="tabs__content">
            <Route path="/" exact component={Essay} />
            <Route path="/creator" component={Creator} />
            <Route path="/fortune" component={Fortune} />
          </div>
        </div>
      </Router>
    );
  }
}