/******************************
 * Ваша реализация компонента
 *****************************/
const days = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
];

const months = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

const monthsRelative = [
  'Января',
  'Февраля',
  'Марта',
  'Апреля',
  'Мая',
  'Июня',
  'Июля',
  'Августа',
  'Сентября',
  'Октября',
  'Ноября',
  'Декабря',
];

/**
 * `data` лучше для компонентов называть `props`.
 * Это устоявшаяся терминология, читатель твоего кода сразу поймёт, что ты здесь имеешь ввизу.
 * Это касается всех твоих компонентов.
 *
 * В решении баг: как минимум июль сего года рисуется неверно. https://yadi.sk/i/OG1VBmDX3JrXWs
 */
const Calendar = props => {
  const {date} = props;

  /**
   * Что кроме `let` мы используем, когда наши переменные не будут изменяться?
   */
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

    /**
     * Крайне желательным даже в однострочных `if`-условиях является использование фигурных скобок.
     * Так куда проще читать код.
     */
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
        <div className="ui-datepicker-material-day">{days[date.getDay()]}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{date.getDate()}</div>
          <div className="ui-datepicker-material-month">{monthsRelative[date.getMonth()]}</div>
          <div className="ui-datepicker-material-year">{date.getFullYear()}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{months[date.getMonth()]}</span>&nbsp;<span className="ui-datepicker-year">{date.getFullYear()}</span>
        </div>
      </div>
      <Dates dates={dates} />
    </div>
  );
};

const Dates = props => (
  <table className="ui-datepicker-calendar">
    <colgroup>
      <col />
      <col />
      <col />
      <col />
      <col />
      <col className="ui-datepicker-week-end"/>
      <col className="ui-datepicker-week-end"/>
    </colgroup>
    <thead>
    <tr>
      <th scope="col" title="Понедельник">Пн</th>
      <th scope="col" title="Вторник">Вт</th>
      <th scope="col" title="Среда">Ср</th>
      <th scope="col" title="Четверг">Чт</th>
      <th scope="col" title="Пятница">Пт</th>
      <th scope="col" title="Суббота">Сб</th>
      <th scope="col" title="Воскресенье">Вс</th>
    </tr>
    </thead>
    <tbody>
    {
      /**
       * Если ты ничего не помещаешь вовнутрь элемента, то его лучше сделать, что называется, self-closing.
       * Это касается не только `Week`, но и остальных компонентов.
       */
      props.dates.map(week => (
        <Week dates={week} />
      ))}
    </tbody>
  </table>
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
const now = new Date(2017, 6, 5);

ReactDOM.render(
  <Calendar date={now} />,
  document.getElementById('root')
);
