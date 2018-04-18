'use strict';

const ExtractMonthHandler = Component => props => {
  let newList = props.list.map(item => {
    let date = new Date(Date.parse(item.date));
    let locale = "en-us";
    let month = date.toLocaleString(locale, { month: "short" });
    return {...item, month: month};
  });
  return (
    <Component list={newList} />
  )
};

const ExtractMonthHandler2 = (Component, selectData) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }
    
    render() {
      let newList = this.props.list.map(item => {
        let date = new Date(Date.parse(item.date));
        let locale = "en-us";
        let month = date.toLocaleString(locale, {month: "short"});
        return {...item, month: month};
      });
      return (
        <Component list={newList}/>
      )
    }
  }
};

const MonthTable = props => {

    console.log('MonthTable', props);

    return (
        <div>
            <h2>Month Table</h2>
            <table>
                <tr>
                    <th>Month</th>
                    <th>Amount</th>
                </tr>
                {props.list.map(item => (
                    <tr>
                        <td>{item.month}</td>
                        <td>{item.amount}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
};

const MonthTableHandled = ExtractMonthHandler2(MonthTable);