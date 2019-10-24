<template>
  <el-container>
    <el-main class="header__top">
      <div class="header__top--left">
        <i class="el-icon-phone"></i>
        <span>Hotline: 0338444456</span>
      </div>
      <div class="header__top--right">
        <el-link>
          <i class="el-icon-edit"></i>
          <span @click="checkOrder()">Kiểm Tra Đơn Hàng</span>
        </el-link>
        <el-link>
          <i class="el-icon-shopping-cart-full"></i>
          <span @click="myCart()">Giỏ Hàng</span>
        </el-link>
        <el-link>
          <i class="el-icon-s-custom"></i>
          <span>Đăng Nhập</span>
        </el-link>
        <el-link>
          <i class="el-icon-key"></i>
          <span>Đăng Ký</span>
        </el-link>
      </div>
    </el-main>
    <el-main class="header__main">
      <div class="header__main--logo" @click="home()">
        <img src="@/assets/images/logoStore.png" alt />
      </div>
      <div class="header__main--search">
        <el-form :model="formSearch">
          <el-input v-model="formSearch.name" placeholder="Tìm Kiếm"></el-input>
          <el-button type="primary" icon="el-icon-search">Search</el-button>
        </el-form>
      </div>
      <div class="header__main--cart" @click="myCart()">
        <el-badge :value="10">
          <i class="el-icon-shopping-cart-full"></i>
        </el-badge>
      </div>
    </el-main>
    <el-main class="header__menu">
      <el-link @click="home()">TRANG CHỦ</el-link>
      <el-link @click="about()">GIỚI THIỆU</el-link>
      <el-link @click="product()">SẢN PHẨM</el-link>
      <el-link @click="news()">TIN TỨC</el-link>
      <el-link @click="contact()">LIÊN HỆ</el-link>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'header',
  data() {
    return {
      formSearch: {
        name: '',
      },
    };
  },
  methods: {
    checkOrder() {
      this.$router.push('/kiem-tra-don-hang');
    },
    myCart() {
      this.$router.push('/gio-hang');
    },
    home() {
      this.$router.push('/');
    },
    about() {
      this.$router.push('/gioi-thieu');
    },
    product() {
      this.$router.push('/san-pham');
    },
    news() {
      this.$router.push('/tin-tuc');
    },
    contact() {
      this.$router.push('/lien-he');
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/stylesheets/Layout/Header.scss";
</style>
