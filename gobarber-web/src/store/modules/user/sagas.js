import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;
    
    const profile = Object.assign(
      { name, email },
      rest.oldPassword ? rest : {}
    );
    
    const response = yield call(api.put, 'users', profile);

    toast.success('Perfil atualizado!');

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    toast.success('erro ao atualizar perfil, por favor verifique os dados!');
    yield put(updateProfileFailure());
  }
}

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)
]);