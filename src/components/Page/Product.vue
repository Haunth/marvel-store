<template>
  <el-main>
    <div class="header__product">
      <span>
        <i class="el-icon-menu"></i>
        Sản phẩm
      </span>
    </div>
    <el-breadcrumb separator-class="el-icon-d-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">Trang Chủ</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/san-pham'}">Sản Phẩm</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="main__product">
      <div class="one__product" v-for="product in dataProducts" :key="product.id">
        <div class="main__section--product">
          <div class="top__product">
            <img :src="product.url" alt />
            <div class="dropdown__product">
              <div class="btn-hover">
                <el-button class="btn view-detail"
                @click="selectedProduct(product)">Xem chi tiết</el-button>
              </div>
            </div>
          </div>
          <div class="info__product">
            <div class="info__product--left">
              <span class="name--product" @click="selectedProduct(product)">{{product.name}}</span>
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
  </el-main>
</template>

<script>
// eslint-disable-next-line import/extensions
import { mapActions } from 'vuex';
// eslint-disable-next-line import/extensions
import formatPrice from '@/lib/common.js';
// eslint-disable-next-line import/extensions
import product from '@/lib/product.js';

export default {
  name: 'product',
  data() {
    return {
      row: 1,
      dataProducts: [
        {
          id: 1,
          name: 'Mô hình trưng bày',
          url:
            'http://tabinoshop.com/wp-content/uploads/2018/04/mo-hinh-marvel-biet-doi-sieu-anh-hung-3-800x800.jpg',
          price: 300000,
          sale: 1,
          count: 0,
        },
        {
          id: 2,
          name: 'Balo Marvel Chất',
          url:
            'https://balono1.vn/wp-content/uploads/2019/03/z1291966781562_caddd1d5e9de0bfd0cd33484f8d612eb-600x400.jpg',
          price: 300000,
          sale: 0.99,
          count: 0,
        },
        {
          id: 3,
          name: 'Áo thun Marvel',
          url:
            'https://uptee.net/wp-content/uploads/2019/05/Marvel-studios-mau-den-600x600.jpg',
          price: 300000,
          sale: 0.7,
          count: 2,
        },
        {
          id: 4,
          name: 'Móc khóa Marvel',
          url:
            'https://bizweb.dktcdn.net/thumb/large/100/098/550/files/moc-khoa-gang-tay-thanos-infinity-war-marvel-avengers-7cm-1.jpg?v=1531305877673',
          price: 300000,
          sale: 0,
          count: 2,
        },
        {
          id: 5,
          name: 'Áo thun Marvel',
          url:
            'https://uptee.net/wp-content/uploads/2019/05/Marvel-studios-mau-den-600x600.jpg',
          price: 300000,
          sale: 1,
          count: 2,
        },
        {
          id: 6,
          name: 'Móc khóa Marvel',
          url:
            'https://bizweb.dktcdn.net/thumb/large/100/098/550/files/moc-khoa-gang-tay-thanos-infinity-war-marvel-avengers-7cm-1.jpg?v=1531305877673',
          price: 300000,
          sale: 1,
          count: 2,
        },
        {
          id: 7,
          name: 'Mô hình trưng bày',
          url:
            'http://tabinoshop.com/wp-content/uploads/2018/04/mo-hinh-marvel-biet-doi-sieu-anh-hung-3-800x800.jpg',
          price: 305000,
          sale: 0,
          count: 2,
        },
        {
          id: 8,
          name: 'Balo Marvel Chất',
          url:
            'https://balono1.vn/wp-content/uploads/2019/03/z1291966781562_caddd1d5e9de0bfd0cd33484f8d612eb-600x400.jpg',
          price: 450000,
          sale: 1,
          count: 9,
        },
        {
          id: 9,
          name: 'Balo Marvel Chất',
          url:
            'https://balono1.vn/wp-content/uploads/2019/03/z1291966781562_caddd1d5e9de0bfd0cd33484f8d612eb-600x400.jpg',
          price: 300000,
          sale: 0.8,
          count: 0,
        },
        {
          id: 10,
          name: 'Móc khóa Marvel',
          url:
            'https://bizweb.dktcdn.net/thumb/large/100/098/550/files/moc-khoa-gang-tay-thanos-infinity-war-marvel-avengers-7cm-1.jpg?v=1531305877673',
          price: 350000,
          sale: 0.6,
          count: 0,
        },
      ],
    };
  },
  methods: {
    formatPrice,
    ...mapActions(['updateProductDetail']),
    selectedProduct(item) {
      this.updateProductDetail(item);
      product.updateProductData(item);
      this.$router.push('/chi-tiet-san-pham');
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/stylesheets/Page/Product.scss";
</style>
