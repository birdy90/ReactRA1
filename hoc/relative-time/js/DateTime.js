'use strict';

const DateTime = props => {
  return (
    <p className="date">{props.date}</p>
  )
};

const DateTimePrettifier = Component => {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }
    
    render() {
      let date = Date.parse(this.props.date);
      let now = Date.now();
      let timeSpan = now - date;

      let minuteSpan = 60 * 1000;
      let hourSpan = 60 * minuteSpan;
      let daySpan = 24 * hourSpan;

      if (timeSpan < hourSpan) {
        date = `${Math.floor(timeSpan / minuteSpan)} минут назад`;
      } else if (timeSpan < daySpan) {
        date = `${Math.floor(timeSpan / hourSpan)} часов назад`;
      } else {
        date = `${Math.floor(timeSpan / daySpan)} дней назад`;
      }
      return <DateTime date={date}/>
    }
  }
};

const DateTimePretty = DateTimePrettifier(DateTime);