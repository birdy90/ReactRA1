'use strict';

const Stars = (params) => {
  params.count = parseInt(params.count) || 1;
  params.count = Math.max(params.count, 1);
  params.count = Math.min(params.count, 5);
  const numbers = (new Array(params.count)).fill();
  return (
    <ul className="card-body-stars u-clearfix" title={params.count}>
      {numbers.map((item) => <li title={params.count}><Star /></li> )}
    </ul>
  );
};