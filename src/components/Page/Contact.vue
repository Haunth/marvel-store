<template>
  <el-main>
    <div class="header__contact">
      <span>
        <i class="el-icon-menu"></i>
        Liên hệ
      </span>
    </div>
    <el-breadcrumb separator-class="el-icon-d-arrow-right">
      <el-breadcrumb-item  :to="{ path: '/' }">Trang Chủ</el-breadcrumb-item>
      <el-breadcrumb-item  :to="{path:'/lien-he'}">Liên hệ</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="main__contact">
      <h1>THÔNG TIN CỬA HÀNG</h1>
      <h3>CỬA HÀNG MARVEL-STORE</h3>
      <P>
        <i class="el-icon-location-outline"></i>
        <span>Địa chỉ : </span>
        28/34 Phương Mai, Đống Đa, Hà Nội
      </P>
      <p>
        <i class="el-icon-house"></i>
        <span>Gmail : </span>
        hau.nt2271997@gmail.com
      </p>
      <p>
        <i class="el-icon-phone"></i>
        <span>Điện thoại : </span>
        0338444456
      </p>
    </div>
  </el-main>
</template>

<script>
export default {
  name: 'contact',
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/stylesheets/Page/Contact.scss';
</style>
