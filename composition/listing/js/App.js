'use strict';

const App = ({items}) => (
  <main>
    {items.map(item => {
          return <ColoredItem type={item.type} item={item} />;
    })}
  </main>
);

const colors = {
  unisex: 'black',
  male: 'blue',
  female: 'orange'
};

const ColoredItem = ({type, item}) => {
  return <Item color={colors[type]} item={item} />;
};