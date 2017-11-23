class FontSelector extends React.Component {
  render() {
    return (
      <div className="font-picker">
        Выберите шрифт
        {this.props.fonts.map(item => (
          <div key={item.name} className="grid center font-item">
            <input type="radio" name="font" value={item.name} id={item.name} onChange={() => this.props.onSelect(item)}/>
            <label htmlFor={item.name} className="grid-1">
              <PictureFont text={item.name} path={item.path}/>
            </label>
          </div>
        ))}
      </div>
    );
  }
}