import React from 'react';

export const routeSegmentWaypointLayout = (locals) => {
    if (!locals.inputs) {
        return null;
    }

    return (
        <ul className="hlist">
            <li>{ locals.inputs.name }</li>
            <li>{ locals.inputs.restrictions }</li>
        </ul>
    );
};