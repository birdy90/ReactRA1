'use strict';

const List = props => {
  return props.list.map(item => {
    switch (item.type) {
      case 'video':
        return (
          <WithPopularityVideo {...item} />
        );

      case 'article':
        return (
          <WithPopularityArticle {...item} />
        );
    }
  });
};
