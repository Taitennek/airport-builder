import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _map from 'lodash/map';

export default class RunwayList extends Component {
    _onRemoveRunwayPair = (event, runwayPair) => {
        event.preventDefault();

        this.props.onRemoveRunwayPair(runwayPair);
    };

    _buildRunwayListJsx() {
        const runwayListJsx = _map(this.props.runwayList, (runwayPair, i) => {
            const { runwayLeft, runwayRight } = runwayPair;

            return (
                <tr key={`runwayPairList-${i}`}>
                    <td>
                        <h4 className="hdg">{ `${runwayLeft.name}/${runwayRight.name}` }</h4>
                    </td>
                    <td>
                        <div>{ runwayLeft.name }</div>
                        <div>{ runwayRight.name }</div>
                    </td>
                    <td>
                        <div>{ runwayLeft.position.latitude }</div>
                        <div>{ runwayRight.position.latitude }</div>
                    </td>
                    <td>
                        <div>{ runwayLeft.position.longitude }</div>
                        <div>{ runwayRight.position.longitude }</div>
                    </td>
                    <td>
                        <div>{ runwayLeft.position.elevation }</div>
                        <div>{ runwayRight.position.elevation }</div>
                    </td>
                    <td>
                        <div>{ runwayLeft.ils }</div>
                        <div>{ runwayRight.ils }</div>
                    </td>
                    <td>
                        <button>Edit</button>
                        <button onClick={ (e) => this._onRemoveRunwayPair(e, runwayPair) }>
                            Delete
                        </button>
                    </td>
                </tr>
            );
        });

        return (
            <table>
                <thead>
                    <tr>
                        <th>Pair</th>
                        <th>Name</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                        <th>Elevation</th>
                        <th>Has ILS</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { runwayListJsx }
                </tbody>
            </table>
        );
    }

    render() {
        if (this.props.runwayList.length === 0) {
            return (
                <div>
                    Empty List
                </div>
            );
        }

        return (
            <div>
                { this._buildRunwayListJsx() }
            </div>
        );
    }
}

RunwayList.propTypes = {
    runwayList: PropTypes.array,
    onRemoveRunwayPair: PropTypes.func.isRequired
};
