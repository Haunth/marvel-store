<template>
  <el-main>
    <div class="header__check--order">
      <span>
        <i class="el-icon-edit"></i>
        Kiểm tra đơn hàng
      </span>
    </div>
    <el-breadcrumb separator-class="el-icon-d-arrow-right">
      <el-breadcrumb-item  :to="{ path: '/' }">Trang Chủ</el-breadcrumb-item>
      <el-breadcrumb-item  :to="{path:'/gioi-thieu'}">Kiểm tra đơn hàng</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="main__check--order">
      <el-form :inline="true" :model="formCheckOrder">
        <span>Hãy nhập mã đơn hàng</span>
        <el-form-item>
          <el-input v-model="formCheckOrder.id" placeholder="Mã số: (VD 123456789)"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button>XEM NGAY</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-main>
</template>

<script>
export default {
  name: 'check_order',
  data() {
    return {
      formCheckOrder: {
        id: '',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/stylesheets/Page/CheckOrder.scss';
</style>
