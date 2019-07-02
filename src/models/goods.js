import { getGoodsList, getTypeList, confirmOrder } from '@/services/goods';
import { Toast } from 'antd-mobile';
import router from 'umi/router';
import _ from 'lodash';

export default {
  namespace: 'goodsData',

  state: {
    searchData: [
      {
        label: '品牌车型',
        value: 1,
        children: [
          {
            label: '比亚迪',
            value: 11
          }, {
            label: '吉利',
            value: 12
          }, {
            label: '长城',
            value: 13
          }
        ]
      }, {
        label: '安装方位',
        value: 2,
        children: [
          {
            label: '前减',
            value: 21
          }, {
            label: '后减',
            value: 22
          }, {
            label: '全套',
            value: 23
          }
        ]
      }
    ],
    menuData: [],
    list: [],
    currentUser: {},
    currentPage: 0,
  },

  effects: {
    // 获取分类列表
    *getTypeList({ payload, callback }, { call, put }) {
      const result = yield call(getTypeList, payload);
      if (result.status === 'success') {
        yield put({
          type: 'save',
          payload: { menuData: result.data },
        });
        callback && callback(result)
      } else {
        Toast.fail(result.message, 1);
        console.log('result', result)
      }
    },

    // 获取商品列表
    *getGoodsList({ payload, callback }, { call, put, select }) {
      const result = yield call(getGoodsList, payload);
      const oldList = yield select(({ goodsData }) => goodsData.list);
      console.log('oldList', result, oldList)
      result.data.list.map((item, index) => {
        let isHave = _.findIndex(oldList, ii => ii.ID === item.ID)
        if (isHave == -1) {
          oldList.push(item)
        }
      })
      if (result.status === 'success') {
        yield put({
          type: 'save',
          payload: { list: oldList, currentPage: result.data.currentPage },
        });
      } else {
        Toast.fail(result.message, 1);
      }
      callback && callback(result)
    },

    // 修改商品数量
    *changeGoodsState({ payload }, { call, put, select }) {
      const oldList = yield select(({ goodsData }) => goodsData.list);
      const { isClear, goodsLists } = payload
      if (isClear) {
        _.map(oldList, item => {
          item.number = 0
        })
      }
      yield put({
        type: 'save',
        payload: { list: oldList },
      });
    },

    // 获取商品列表
    *confirmOrder({ payload, callback }, { call, put }) {
      const result = yield call(confirmOrder, payload);
      if (result.status === 'success') {
        Toast.success('下单成功 !!!', 1);
        setTimeout(() => {
          callback && callback(result)
        }, 900);
      } else {
        Toast.fail(result.message, 1);
        callback && callback(result)
      }
    },

    *fetch(_, { call, put }) {
      const response = yield call(queryUsers);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *fetchCurrent(_, { call, put }) {
      const response = yield call(queryCurrent);
      yield put({
        type: 'saveCurrentUser',
        payload: response,
      });
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    saveCurrentUser(state, action) {
      return {
        ...state,
        currentUser: action.payload || {},
      };
    },
    changeNotifyCount(state, action) {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          notifyCount: action.payload.totalCount,
          unreadCount: action.payload.unreadCount,
        },
      };
    },
  },
};
