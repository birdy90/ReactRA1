'use strict';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: props.filters,
      projects: props.projects,
      selected: 'All'
    };
  }

  render() {
    return (
      <div>
        <Toolbar
          filters={this.state.filters}
          selected={this.state.selected}
          onSelectFilter={(filter) => {
            this.setState({selected: filter});
            console.log(filter);
          }}/>
        <Portfolio
          projects={this.state.selected === 'All' ? this.state.projects : this.state.projects.filter(t => t.category === this.state.selected)}/>
        <div>
          {this.selected}
        </div>
      </div>
    )
  }
}