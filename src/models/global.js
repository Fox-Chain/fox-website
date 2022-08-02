import {
  getProject,
  getCategory,
  getSubCategory,
  getTeam,
  getDocs,
  uploadFile
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
    },
    *getTeam({ payload, callback }, { call, put, select }) {
      const response = yield call(getTeam, payload);
      callback && callback(response);
    },
    *getDocs({ payload, callback }, { call, put, select }) {
      const response = yield call(getDocs, payload);
      callback && callback(response);
    },
    *uploadFile({ payload, callback }, { call, put, select }) {
      const response = yield call(uploadFile, payload);
      callback && callback(response);
    },
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
