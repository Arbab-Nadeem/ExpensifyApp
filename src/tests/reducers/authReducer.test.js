import authReducer from '../../reducers/authReducer';

test('Should set uid for login', () => {
	const action = {
		type: 'LOGIN',
		uid: '12434fj3k345k5',
	};
	const state = authReducer({}, action);
	expect(state.uid).toBe(action.uid);
});
test('Should clear uid for logout', () => {
	const action = { type: 'LOGOUT' };
	const state = authReducer({ uid: 'anything' }, action);
	expect(state).toEqual({});
});
test('Should set the authReducer default state', () => {
	const state = authReducer(undefined, { type: '@@INIT' });
	expect(state).toEqual({});
});
