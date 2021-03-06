import ava from 'ava';
import sinon from 'sinon';
import {
    ADD_FIX_TO_LIST_START,
    ADD_FIX_TO_LIST_SUCCESS,
    ADD_FIX_TO_LIST_ERROR,
    addFixToList
} from '../../../../src/assets/script/client/domain/fix/actions/FixActions';
import { FixUpdateTypeFixture } from '../_mocks/fixMocks';

const getStateStub = () => ({
    fixList: {
        payload: [
            {
                name: 'GRNPA',
                position: {
                    latitude: 'N36.26467677181758',
                    longitude: 'W114.51481791576114'
                }
            }
        ]
    }
});

ava('.addFixToList() dispatches a start action', async (t) => {
    const dispatchSpy = sinon.spy();

    await addFixToList({})(dispatchSpy, getStateStub);

    t.true(dispatchSpy.getCall(0).args[0].type === ADD_FIX_TO_LIST_START);
});

ava('.addFixToList() dispatches an error action when passed invalid data', async (t) => {
    const dispatchSpy = sinon.spy();

    await addFixToList(false)(dispatchSpy, getStateStub);

    t.true(dispatchSpy.callCount === 2);
    t.true(dispatchSpy.getCall(1).args[0].type === ADD_FIX_TO_LIST_ERROR);
});

ava('.addFixToList() dispatches a success action when passed valid data', async (t) => {
    const dispatchSpy = sinon.spy();

    await addFixToList(FixUpdateTypeFixture)(dispatchSpy, getStateStub);

    t.true(dispatchSpy.callCount === 2);
    t.true(dispatchSpy.getCall(1).args[0].type === ADD_FIX_TO_LIST_SUCCESS);
});
