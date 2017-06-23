'use strict';

function Stars(params) {
    return <ul className="card-body-stars u-clearfix" title={params.count}><li title={params.count}>
        {Array(params.count).fill().map(item => (
            <Star />
        ))}
    </li></ul>;
}
