/******************************
 * Ваша реализация компонента
 *****************************/
const days = [
  {full: 'Воскресенье', short: 'Вс'},
  {full: 'Понедельник', short: 'Пн'},
  {full: 'Вторник', short: 'Вт'},
  {full: 'Среда', short: 'Ср'},
  {full: 'Четверг', short: 'Чт'},
  {full: 'Пятница', short: 'Пт'},
  {full: 'Суббота', short: 'Сб'},
];
const shortDays = days.map(item => item.short);
const tempDay = shortDays.shift();
shortDays.push(tempDay);

const months = [
  {normal: 'Январь', relative: 'Января'},
  {normal: 'Февраль', relative: 'Февраля'},
  {normal: 'Март', relative: 'Марта'},
  {normal: 'Апрель', relative: 'Апреля'},
  {normal: 'Май', relative: 'Мая'},
  {normal: 'Июнь', relative: 'Июня'},
  {normal: 'Июль', relative: 'Июля'},
  {normal: 'Август', relative: 'Августа'},
  {normal: 'Сентябрь', relative: 'Сентября'},
  {normal: 'Октябрь', relative: 'Октября'},
  {normal: 'Ноябрь', relative: 'Ноября'},
  {normal: 'Декабрь', relative: 'Декабря'},
];

const ColGroupClasses = ['', '', '', '', '', 'ui-datepicker-week-end', 'ui-datepicker-week-end'];

const Calendar = props => {
  const {date} = props;

  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDate = new Date(year, month, 1);
  const lastDate = new Date(year, month + 1, 0);

  const firstDateDay = firstDate.getDay();
  const lastDateDay = lastDate.getDay();

  const dates = [];
  const dateFrom = firstDateDay === 0 ? -5 : 2 - firstDateDay;
  const dateTo = lastDateDay === 0 ? lastDate.getDate() + 1: lastDate.getDate() + 7 - lastDateDay + 1;

  let week = [];
  for (let i = dateFrom, j = 1; i < dateTo; i++, j++) {
    const tempDate = {
      date: (new Date(year, month, i)).getDate(),
      classNames: ''
    };

    if (i <= 0 || i > lastDate.getDate()) {
      tempDate.classNames += ` ui-datepicker-other-month`;
    }
    if (i === date.getDate()) {
      tempDate.classNames += ` ui-datepicker-today`;
    }

    week.push(tempDate);
    if (j === 7) {
      dates.push(week);
      week = [];
      j = 0;
    }
  }
  dates.push(week);

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{days[date.getDay()].full}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{date.getDate()}</div>
          <div className="ui-datepicker-material-month">{months[date.getMonth()].relative}</div>
          <div className="ui-datepicker-material-year">{date.getFullYear()}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{months[date.getMonth()].normal}</span>&nbsp;<span className="ui-datepicker-year">{date.getFullYear()}</span>
        </div>
      </div>
      <Dates dates={dates} />
    </div>
  );
};

/**
 * `colgroup` и `thead` можно вынести в отдельные компоненты,
 * причём не описывать каждый элемент, а использовать генерацию, например, в цикле.
 * Попробуешь?
 */
const Dates = props => (
  <table className="ui-datepicker-calendar">
    <ColGroup />
    <TableHeader days={days} />
    <TableBody dates={props.dates} />
  </table>
);

/**
 * Был вариант сделать вместо map именно цикл (в функции), что-то типа
 * (items => {
 *   for (let i=0 ...) {
 *     item.push(<col className={i>5?'ui-datepicker-week-end':''} />);
 *   }
 *   return items;
 * })([])
 * но такой вариант мне не понравился
 */
const ColGroup = props => (
  <colgroup>
    {ColGroupClasses.map(item => (
        <col className={item} />
    ))}
  </colgroup>
);

/**
 * Решил не делать новый массив (чтобы воскресенье было не первым), а дублирую приходящий
 */
const TableHeader = props => {
  // console.log('test'); // эта строка вызывается дважды
  return (
    <thead>
    <tr>
      {shortDays.map((item, index) => (
          <th scope="col">{item}</th>
      ))}
    </tr>
    </thead>
  )
};

const TableBody = props => (
  <tbody>
    {props.dates.map(week => (
      <Week dates={week} />
    ))}
  </tbody>
);


const Week = props => (
  <tr>
    {props.dates.map(value => (
      <Day classNames={value.classNames} val={value.date} />
    ))}
  </tr>
);

const Day = props => (
  <td className={props.classNames}>{props.val}</td>
);

/******************************
 * Не вносить изменния ниже
 ******************************/
const now = new Date(2017, 5, 5);

ReactDOM.render(
  <Calendar date={now} />,
  document.getElementById('root')
);