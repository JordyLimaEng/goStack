import { all } from 'redux-saga/effects'

import cart from './cart/sagas'

export default function* rootSaaga(){
  return yield all([cart])
}