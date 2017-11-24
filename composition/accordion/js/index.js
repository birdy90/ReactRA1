'use strict';


class Accordion extends React.Component {

  state = this.props;

  toggler = (e) => {
    let index = parseInt(e.target.getAttribute('data-index'));
    data = data.map((item, itemIndex) => ({...item, index: index, open: index === itemIndex}));
    this.setState(data);
  };

  render() {
    return (
      <div id="accordian">
        <main className="main">
          <h2 className="title">React</h2>
          {data.map((item, itemIndex) => (
            <Block {...item} index={itemIndex} toggler={this.toggler} />
          ))}
        </main>
      </div>
    )
  }
}

const Block = (props) => (
  <section className={`section ${props.open ? 'open': ''}`}>
    <button>toggle</button>
    <h3 className="sectionhead"
        onClick={props.toggler.bind(this)}
        data-index={props.index} >
      {props.header}
    </h3>
    <div className="articlewrap">
      <div className="article">{props.text}</div>
    </div>
  </section>
);

ReactDOM.render(<Accordion data={data} />, document.getElementById('root'));