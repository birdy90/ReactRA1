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

const WithPopularityHandler = (Component) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }
    
    render() {
      let content = null;
      if (this.props.views < 100) {
        content = (
          <New>
            <Component {...this.props} />
          </New>
        );
      } else if (this.props.views >= 1000) {
        content = (
          <Popular>
            <Component {...this.props} />
          </Popular>
        );
      } else {
        content = <Component {...this.props} />;
      }
      return content;
    }
  }
};