const FontSelector = ({fonts, selectedFont, onSelect}) => {
    return (
        <div className="font-picker">
            Выберите шрифт
            <div className="grid center font-item">
              <input type="radio" name="font" value="abc1" id="abc1" />
              <label for="abc1" className="grid-1">
                <PictureFont />
              </label>
            </div>
        </div>
    )
};