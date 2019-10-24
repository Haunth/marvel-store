<template>
  <el-main>
    <div class="header__donePay">
      <span>
        <i class="el-icon-shopping-cart-full"></i>
        Hoàn tất thanh toán
      </span>
    </div>
    <el-breadcrumb separator-class="el-icon-d-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">Trang Chủ</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/hoan-tat'}">Hoàn tất thanh toán</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="main__donePay">
      <el-steps :active="active" finish-status="success">
        <el-step title="GIỎ HÀNG CỦA TÔI"></el-step>
        <el-step title="THANH TOÁN"></el-step>
        <el-step title="HOÀN TẤT"></el-step>
      </el-steps>
      <div class="header__main--donePay">
        <i class="el-icon-check"></i>
        <span>Success !</span>
        <p>Đơn hàng của bạn đã được mua thành công</p>
      </div>
      <div class="form__bill">
        <el-button icon="el-icon-printer" class="print--bill">In đơn hàng</el-button>
        <div class="info__bill">
          <h1>Mã đơn hàng của bạn là : #1000123546</h1>
          <span>Ngày đặt :</span>
          <span>22/07/1997</span>
          <p>Phương thức thanh toán : Ship CODE</p>
          <p>THÔNG TIN ĐƠN HÀNG</p>
          <el-table style="width: 100%" :data="dataCart">
            <el-table-column label="Stt" type="index"></el-table-column>
            <el-table-column label="Tên sản phẩm" prop="name"></el-table-column>
            <el-table-column label="Số lượng" prop="number"></el-table-column>
            <el-table-column label="Đơn giá" prop="unitPrice"></el-table-column>
            <el-table-column label="Thành Tiền" prop="intoMoney"></el-table-column>
            <el-table-column align="right">
              <template>
                <el-button size="mini" type="danger">Delete</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="footer__main--donePay">
          <el-button>Tiếp tục mua hàng</el-button>
          <el-button>Đơn hàng của tôi</el-button>
        </div>
      </div>
    </div>
  </el-main>
</template>

<script>
export default {
  name: 'done_pay',
  data() {
    return {
      active: 3,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/stylesheets/Page/DonePay.scss";
</style>
