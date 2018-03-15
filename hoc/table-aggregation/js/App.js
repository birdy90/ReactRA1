'use strict';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    componentDidMount() {
        axios.get('https://api.myjson.com/bins/l2s9l').then(response => {
            this.setState(response.data);
        });
    }

    render() {
        return (
            <div id="app">
                <MonthTableHandled list={this.state.list} />
                <YearTableHandled list={this.state.list} />
                <SortTable list={this.state.list} />
            </div>
        );
    }
};