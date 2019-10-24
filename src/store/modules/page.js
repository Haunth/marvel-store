const state = {
  productDetail: {},
};

const getters = {
  // eslint-disable-next-line no-shadow
  productDetail(state) {
    return state.productDetail;
  },
};

const actions = {
  updateProductDetail({ commit }, productDetail) {
    commit('UPDATE_PRODUCT_DETAIL', productDetail);
  },
};

const mutations = {
  // eslint-disable-next-line no-shadow
  UPDATE_PRODUCT_DETAIL(state, productDetail) {
    state.productDetail = productDetail;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
