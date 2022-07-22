import {
  getProject,
  getCategory,
  getSubCategory
} from '@/services/api';

export default {
  namespace: 'global',

  state: {
  },

  effects: {
    *getProject({ payload, callback }, { call, put, select }) {
      const response = yield call(getProject, payload);
      callback && callback(response);
    },
    *getCategory({ payload, callback }, { call, put, select }) {
      const response = yield call(getCategory, payload);
      callback && callback(response);
    },
    *getSubCategory({ payload, callback }, { call, put, select }) {
      const response = yield call(getSubCategory, payload);
      callback && callback(response);
    }
  },

  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        collapsed: payload,
      };
    },
  }
};
