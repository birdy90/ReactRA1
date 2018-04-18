'use strict';

const ExtractYearHandler = Component => props => {
  let newList = props.list.map(item => {
    let date = new Date(Date.parse(item.date));
    let year = date.getFullYear();
    return {...item, year: year};
  });
  return (
    <Component list={newList} />
  )
};

const ExtractYearHandler2 = (Component) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }
    
    render() {
      let newList = this.props.list.map(item => {
        let date = new Date(Date.parse(item.date));
        let year = date.getFullYear();
        return {...item, year: year};
      });
      return (
        <Component list={newList}/>
      );
    }
  }
};


const YearTable = props => {

    console.log('YearTable', props);

    return (
        <div>
            <h2>Year Table</h2>
            <table>
                <tr>
                    <th>Year</th>
                    <th>Amount</th>
                </tr>
                {props.list.map(item => (
                    <tr>
                        <td>{item.year}</td>
                        <td>{item.amount}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
};

const YearTableHandled = ExtractYearHandler2(YearTable);