const New = props => (
  <div className='new'>
    {props.children}
  </div>
);

const Popular = props => (
  <div className='popular'>
    {props.children}
  </div>
);

const WithPopularityHandler = (Component) => props => {
  let content = null;
  if (props.views < 100) {
    content = (
      <New>
        <Component {...props} />
      </New>
    );
  } else if (props.views >= 1000) {
    content = (
      <Popular>
        <Component {...props} />
      </Popular>
    );
  } else {
    content = <Component {...props} />;
  }
  return content;
};