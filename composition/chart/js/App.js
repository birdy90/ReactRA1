function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function compareNumbers(a, b) {
  return a - b;
}

const colors = ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C'];
const series = ['France', 'Italy', 'England', 'Sweden', 'Germany'];
const labels = ['cats', 'dogs', 'horses', 'ducks', 'cows'];
let max = 0;
let sum = 0;

const chartTypes = [
  {
    itemStyle: (data) => ({
      backgroundColor: data.color,
      opacity: data.item / max + .05,
      zIndex: data.item,
      height: data.item / max * 100 + '%'
    })
  },
  {
    seriesType: 'stacked',
    itemStyle: (data) => ({
      backgroundColor: data.color,
      opacity: 1,
      zIndex: data.item,
      height: data.item / sum * 100 + '%'
    })
  },
  {
    seriesType: 'layered',
    itemStyle: (data) => ({
      backgroundColor: data.color,
      opacity: data.item / max + .05,
      zIndex: data.item,
      height: data.item / max * 100 + '%',
      right: ((data.sortedSerie.indexOf(data.item) / (data.serie.length + 1)) * 100) + '%'
    })
  },
  {
    labels: series,
    type: 'horizontal',
    height: 'auto',
    itemStyle: (data) => ({
      backgroundColor: data.color,
      opacity: data.item / max + .05,
      zIndex: data.item,
      width: data.item / max * 100 + '%'
    })
  },
];

class App extends React.Component {

  state = {
    data: []
  };

  componentDidMount() {
    this.populateArray();
    setInterval(this.populateArray.bind(this), 2000);
  }

  populateArray() {
    const series = 5;
    const serieLength = 5;

    let data = new Array(series).fill(new Array(serieLength).fill(0));
    data = data.map(serie => serie.map(item => getRandomInt(0, 20)));
    max = data.reduce((max, serie) => Math.max(max, serie.reduce((serieMax, item) => Math.max(serieMax, item), 0)), 0);

    this.setState({ data });
  }

  render() {
    const { data, series } = this.state;

    return (
      <section>
        {chartTypes.map(type => (
          <div className={`Charts ${type.type || ''}`}>
            { data.map((serie, serieIndex) => (
              <Chart key={serieIndex}
                     index={serieIndex}
                     type={type}
                     data={serie} />
            )) }
          </div>
        ))}

        <div className="Legend">
          { labels.map((label, labelIndex) => (
            <div>
              <span className="Legend--color" style={{ backgroundColor: colors[labelIndex % colors.length]  }} />
              <span className="Legend--label">{ label }</span>
            </div>
          )) }
        </div>
      </section>
    );1
  }
}

const Chart = ({index, data, type}) => {
  let sortedData = data.slice(0);
  sortedData.sort(compareNumbers);
  sum = data.reduce((carry, current) => carry + current, 0);
  let label = type.labels !== undefined ? type.labels: labels;
  console.log(type.labels !== undefined ? type.labels: labels);
  console.log(index);
  label = label[index];

  return (
    <div className={`Charts--serie ${type.seriesType || ''}`}
         style={{height: type.height || 250}} >
      <label>{ label }</label>
      { data.map((item, itemIndex) => {
        let styleData = {
          item,
          serie: data,
          sortedSerie: sortedData,
          color: colors[itemIndex],
        };
        return <ChartItem key={itemIndex} item={item} color={colors[itemIndex]} type={type} style={type.itemStyle(styleData)} />
      })}
    </div>
  );
}

const ChartItem = ({item, color, type, style}) => {

  return (
    <div className={`Charts--item ${type.seriesType || ''}`}
         style={ style } >
      <b style={{ color: color }}>{ item }</b>
    </div>
  );
};