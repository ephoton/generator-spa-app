import { combineActions, createAction, handleAction, Action } from 'redux-actions';
import { Dispatch, AnyAction } from 'redux';
import * as moment from 'moment';
import * as _ from 'lodash';

import { Api } from './../../config';

export interface StateInfo {
  loading: boolean;
  data: {}[],
  formData: FormDataInfo;
};

export type PayloadInfo = {
  [K in keyof StateInfo]: StateInfo[K];
}

export type FormDataInfo = {
  date: string;
}

export const defaultState: PayloadInfo = {
  loading: false,
  data: [],
  formData: {
    date: moment().add(-1, 'days').format('YYYYMMDD'),
  }
};

const defaultPayload = defaultState;

export const changeDate = createAction('change_date', (date: string) => ({
  formData: {
    date
  }
}));

const changeList = createAction('change_list', (data: any[], formData: FormDataInfo) => ({
  data,
  formData
}));

export const updateList = (formData: FormDataInfo) => {
  return (dispatch: Dispatch) => {
    Api.common.getUsers.then(({ data: res}) => {
      const data = res.data || [];

      dispatch(changeList(data, formData));
    });
  };
};

const reducer = handleAction<StateInfo, PayloadInfo>(combineActions(changeDate, changeList), {
  next: (state: StateInfo, { payload }: Action<PayloadInfo>) => {
    return _.merge({}, state, payload);
  },
  throw: (state: StateInfo, action: Action<PayloadInfo>) => {
    console.error('in  throw: ', state, action);
    return {} as any;
  }
}, defaultState);

export default reducer;
