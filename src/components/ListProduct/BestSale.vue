<template>
  <el-main>
    <div class="header__product">
      <span>
        <i class="el-icon-menu"></i>
        {{dataSale.title}}
      </span>
    </div>
    <el-breadcrumb separator-class="el-icon-d-arrow-right">
      <el-breadcrumb-item  :to="{ path: '/' }">Trang Chủ</el-breadcrumb-item>
      <el-breadcrumb-item  :to="{path:'/mat-hang-giam-gia'}">{{dataSale.title}}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="main__product">
        <div class="one__product" v-for="productSale in dataSale.list" :key="productSale">
          <div class="main__section--product">
            <div class="top__product">
              <img :src="productSale.url" alt />
              <div class="dropdown__product">
                <div class="btn-hover">
                  <el-button class="btn view-detail">Xem thêm</el-button>
                </div>
              </div>
            </div>
            <div class="info__product">
              <div class="info__product--left">
                <span class="name--product">{{productSale.name}}</span>
                <div class="price">
                  <span class="price__buy">{{productSale.price}} đ</span>
                  <span class="price__main"
                  :class="dataSale.status">
                  {{productSale.priceMain}}đ
                  </span>
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
export default {
  name: 'best_sale',
  data() {
    return {
      dataSale: {
        title: 'Mặt hàng giảm giá',
        status: 'sale',
        list: [
          {
            url:
            'http://tabinoshop.com/wp-content/uploads/2018/04/mo-hinh-marvel-biet-doi-sieu-anh-hung-3-800x800.jpg',
            name: 'Mô hình trưng bày ',
            price: '300.000',
            priceMain: '375.000',
          },
          {
            url:
            'https://balono1.vn/wp-content/uploads/2019/03/z1291966781562_caddd1d5e9de0bfd0cd33484f8d612eb-600x400.jpg',
            name: 'Balo Marvel Chất',
            price: '350.000',
            priceMain: '475.000',
          },
          {
            url:
            'https://uptee.net/wp-content/uploads/2019/05/Marvel-studios-mau-den-600x600.jpg',
            name: 'Áo thun Marvel',
            price: '370.000',
            priceMain: '490.000',
          },
          {
            url:
            'https://bizweb.dktcdn.net/thumb/large/100/098/550/files/moc-khoa-gang-tay-thanos-infinity-war-marvel-avengers-7cm-1.jpg?v=1531305877673',
            name: 'Móc khóa',
            price: '399.000',
            priceMain: '599.000',
          },
          {
            url:
            'http://tabinoshop.com/wp-content/uploads/2018/04/mo-hinh-marvel-biet-doi-sieu-anh-hung-3-800x800.jpg',
            name: 'Mô hình trưng bày ',
            price: '300.000',
            priceMain: '375.000',
          },
          {
            url:
            'https://uptee.net/wp-content/uploads/2019/05/Marvel-studios-mau-den-600x600.jpg',
            name: 'Áo thun Marvel',
            price: '370.000',
            priceMain: '490.000',
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/stylesheets/Page/Product.scss';
</style>
