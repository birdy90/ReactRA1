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

const Calendar = data => {
  let {date} = data;

  let year = date.getFullYear();
  let month = date.getMonth();
  let firstDate = new Date(year, month, 1);
  let lastDate = new Date(year, month + 1, 0);

  let firstDateDay = firstDate.getDay();
  let lastDateDay = lastDate.getDay();

  let dates = [];
  let dateFrom = firstDateDay === 1 ? firstDateDay : firstDateDay - 7;
  let dateTo = lastDate.getDate() + (8 - lastDateDay % 7);

  let week = [];
  for (let i = dateFrom, j = 1; i < dateTo; i++) {
    let tempDate = {
      date: (new Date(year, month, i)).getDate(),
      classNames: ''
    };

    if (i <= 0 || i > lastDate.getDate())
      tempDate.classNames += ` ui-datepicker-other-month`;
    if (i === date.getDate())
      tempDate.classNames += ` ui-datepicker-today`;

    week.push(tempDate);

    if (j === 7) {
      dates.push(week);
      week = [];
      j = 1;
    } else {
      j++;
    }
  }

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
      <Dates dates={dates}></Dates>
    </div>
  );
};

const Dates = data => (
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
    {data.dates.map(week => (
      <Week dates={week}></Week>
    ))}
    </tbody>
  </table>
);

const Week = data => (
  <tr>
    {data.dates.map(value => (
      <Day classNames={value.classNames} val={value.date}></Day>
    ))}
  </tr>
);

const Day = data => (
  <td className={data.classNames}>{data.val}</td>
);