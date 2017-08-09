'use strict';

class Toolbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: props.filters,
      selected: props.selected,
      onSelectFilter: props.onSelectFilter
    };
  }

  render(props) {
    return (
      <div className="toolbar">
        {this.renderFilters()}
      </div>
    );
  }

  renderFilters = () => {
    return this.state.filters.map((filter, i) => {
      const className = filter === this.state.selected ? "filter-selected" : "filter";
      return (
        <button
          className={className}
          onClick={() => {
            this.setState({selected: filter});
            this.state.onSelectFilter(filter);
          }}
          key={`filter-${i}`} >
          {filter}
        </button>
      );
    });
  };
}

