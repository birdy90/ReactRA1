'use strict';

const MessageHistory = ({list}) => {
  if (list === undefined || list.length === 0) return null;
  return (
    <div>
      {list.map(item => {
        let Tag = Typing;
        switch (item.type) {
          case 'message':
            Tag = Message;
            break;
          case 'response':
            Tag = Response;
            break;
        }
        return <Tag from={item.from} message={item} />;
      })}
    </div>
  );
};