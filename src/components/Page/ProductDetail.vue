<template>
  <el-main>
    <div class="header__productDetail">
      <span>
        <i class="el-icon-menu"></i>
        Chi tiết sản phẩm
      </span>
    </div>
    <el-breadcrumb separator-class="el-icon-d-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">Trang Chủ</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/chi-tiet-san-pham'}">Chi tiết sản phẩm</el-breadcrumb-item>
    </el-breadcrumb>
    <h2>{{productDetail.name}}</h2>
    <hr>
    <div class="main__productDetail">
      <div class="main__left">
        <div class="main__left--avatar">
          <img :src="productDetail.url" alt="">
        </div>
        <div class="main__left--footer">
        </div>
      </div>
      <div class="main__right">
        <span class="trademark">Thương hiệu : Marvel Hunter</span> <br>
        <span class="kind">Loại sản phẩm : MÔ HÌNH</span>
        <span class="info">Mã sản phẩm: MH 370</span>
        <span class="info">Kích thước : 50x50</span>
        <span class="info">Chất liệu : Thép không rỉ</span>
        <p class="price__buy">{{formatPrice(productDetail.price * productDetail.sale)}}</p>
        <div class="price__discount">
          <p class="price__origin">{{formatPrice(productDetail.price)}}</p>
          <p class="discount">-{{sale}}</p>
        </div>
        <el-button>
          Thêm vào giỏ hàng
        </el-button>
      </div>
    </div>
  </el-main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

// eslint-disable-next-line import/extensions
import formatPrice from '@/lib/common.js';
// eslint-disable-next-line import/extensions
import product from '@/lib/product.js';

export default {
  name: 'product_detail',
  computed: {
    ...mapGetters(['productDetail']),
  },
  data() {
    return {
      sale: 0,
    };
  },
  mounted() {
    this.LoadData(this.productDetail);
  },
  methods: {
    formatPrice,
    ...mapActions(['updateProductDetail']),
    LoadData() {
      if (product.isProduct()) {
        this.updateProductDetail(product.productData());
      } else {
        console.log('hau beo vl');
      }
      const productSelected = product.productData();
      if (productSelected.sale === 0) {
        this.sale = `${100}%`;
      } else if (productSelected.sale === 1) {
        this.sale = `${0}%`;
      } else {
        this.sale = `${productSelected.sale * 100}%`;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$colorMain: #de3737cc;
.header__productDetail{
  border-bottom: 3px solid $colorMain;
  text-transform: uppercase;
  margin-top: 0;
  span {
    background: $colorMain none repeat scroll 0 0;
    color: #fff;
    display: inline-block;
    font-size: 18px;
    line-height: 40px;
    padding: 0 8% 0 25px;
    position: relative;
    text-transform: uppercase;
    &::before {
      border-color: transparent #f2f2f2 transparent transparent;
      border-style: solid;
      border-width: 0 25px 40px 0;
      content: "";
      position: absolute;
      right: 0;
    }
  }
}
.el-breadcrumb{
  margin: 30px 30px;
  font-size: 12px;
  span.el-breadcrumb__inner.is-link{
    color: $colorMain !important;
  }
}
h2{
  text-align: center;
  font-size: 40px;
  color: $colorMain;
}
.main__productDetail{
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  .main__left{
    width: 40%;
    padding-right: 5px;
    .main__left--avatar{
      width: 100%;
      height: 450px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .main__left--footer{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      img{
        width: 20%;
        height: 100px;
      }
    }
  }
  .main__right{
    width: 60%;
    padding-left: 5px;
    .trademark{
      font-size: 30px;
      font-weight: 600;
    }
    .kind{
      font-size: 25px;
      font-weight: 400;
      margin-top: 25px;
      display: block;
    }
    .info{
      display: block;
      font-size: 18px;
      margin-top: 25px;
    }
    .price__buy{
      color: $colorMain;
      padding: 0;
      font-size: 20px;
    }
    .price__discount{
      display: flex;
      width: 20%;
      align-items: center;
      .price__origin{
        padding: 0;
        margin-right: 20px;
        font-size: 20px;
        color: #00000057;
        text-decoration: line-through;
        margin-bottom: 25px;
        margin-top: 0;
      }
      .discount{
        border: 1px solid $colorMain;
        border-radius: 5px;
        padding: 5px;
        font-size: 12px;
        margin-bottom: 25px;
        margin-top: 0;
      }
    }
    .el-button{
      background: $colorMain;
      border-color: $colorMain;
      color: #ffffff;
      transition: all 0.3s;
      &:hover{
        color: #000000;
        background: transparent;
      }
    }
  }
}
</style>
