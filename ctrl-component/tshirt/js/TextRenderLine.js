class TextRenderLine extends React.Component {



  render() {
    return (
      <div className="type-text">
        <textarea name="text" id="font-text" cols="30" rows="2" placeholder="Введите текст для футболки" onChange={e => this.props.onChange(e.target.value)} />
      </div>
    );
  }
}
