<template>
    <div class="main__section">
      <div v-for="item in row" :key="item" class="main__product">
        <div v-for="product in data.products.slice(0,4)" :key="product.id" class="one__product">
          <div class="main__section--product">
            <div class="top__product">
              <img :src="product.url" alt />
              <div class="dropdown__product">
                <div class="btn-hover">
                  <el-button class="btn view-detail"
                  @click="selectedProduct(product)">Xem Chi Tiết</el-button>
                </div>
              </div>
            </div>
            <div class="info__product">
              <div class="info__product--left">
                <span class="name--product"
                @click="selectedProduct(product)">{{product.name}}</span>
                <div class="price">
                  <span class="price__buy">{{formatPrice(product.price * product.sale)}}</span>
                  <span class="price__main"
                    :class="'status-' + product.sale">{{formatPrice(product.price)}}</span>
                </div>
              </div>
              <div class="info__product--right">
                <el-button class="btn--cart">
                  <i class="el-icon-shopping-cart-2"></i>
                </el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2>
        <el-link @click="seeMore()">
          Xem Thêm
          <i class="el-icon-d-arrow-right"></i>
        </el-link>
      </h2>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
// eslint-disable-next-line import/extensions
import formatPrice from '@/lib/common.js';

// eslint-disable-next-line import/extensions
import product from '@/lib/product.js';

export default {
  name: 'BestSaleFilterSuggest',
  props: ['data'],
  components: {
  },
  computed: {
  },
  data() {
    return {
      row: 1,
      isShowSalePrice: true,
    };
  },
  mounted() {
    this.checkNumberRow();
  },
  methods: {
    formatPrice,
    ...mapActions(['updateProductDetail']),
    checkNumberRow() {
      if (
        this.data.status === 'sale'
        || this.data.status === 'filter') {
        this.row = 1;
      } else {
        this.row = 2;
      }
    },
    seeMore() {
      if (this.data.status === 'sale') {
        this.$router.push('/mat-hang-giam-gia');
      } else if (this.data.status === 'filter') {
        this.$router.push('/tim-kiem-nhieu-nhat');
      } else {
        this.$router.push('/goi-y-cho-ban');
      }
    },
    selectedProduct(item) {
      this.updateProductDetail(item);
      product.updateProductData(item);
      this.$router.push('/chi-tiet-san-pham');
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/stylesheets/Home/BestSaleFilterSuggest.scss";
</style>
