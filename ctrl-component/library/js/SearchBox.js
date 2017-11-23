class SearchBox extends React.Component {

  changeHandler(e) {
    this.props.filterBooks(e.target.value);
  }

  render() {
    return (
      <input type="text" placeholder="Поиск по названию или автору" value={this.props.value} onChange={this.changeHandler.bind(this)}/>
    );
  }
}