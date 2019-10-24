<template>
  <el-main>
    <div class="header__myCart">
      <span>
        <i class="el-icon-shopping-cart-full"></i>
        Giỏ Hàng
      </span>
    </div>
    <el-breadcrumb separator-class="el-icon-d-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">Trang Chủ</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/gio-hang'}">Giỏ hàng của tôi</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="main__myCart">
      <el-steps :active="active" finish-status="success">
        <el-step title="GIỎ HÀNG CỦA TÔI"></el-step>
        <el-step title="THANH TOÁN"></el-step>
        <el-step title="HOÀN TẤT"></el-step>
      </el-steps>
      <el-table style="width: 100%" :data="dataCart">
        <el-table-column label="Tên sản phẩm" prop="name"></el-table-column>
        <el-table-column label="Số lượng">
          <el-input-number :model="num" size="small"
            @change="handleChange" :min="1" :max="10" >
          </el-input-number>
        </el-table-column>
        <el-table-column label="Đơn giá" prop="unitPrice"></el-table-column>
        <el-table-column label="Thành Tiền" prop="intoMoney"></el-table-column>
        <el-table-column align="right">
          <template>
            <el-button
              size="mini"
              type="danger"
            >Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
      <h3>
        Tổng tiền : 900.000đ
      </h3>
      <div class="btn__next">
        <el-button class="continued" @click="goHome()">Tiếp tục mua sắm</el-button>
        <el-button class="pay" @click="nextStep()">Tiến hành thanh toán</el-button>
      </div>
    </div>
  </el-main>
</template>

<script>
export default {
  name: 'my_cart',
  data() {
    return {
      active: 1,
      num: 1,
      dataCart: [
        {
          name: 'Mô hình trưng bày ',
          number: '2',
          unitPrice: '300.000 đ',
          intoMoney: '600.000 đ',
        },
        {
          name: 'Áo thun marvel',
          number: '1',
          unitPrice: '500.000 đ',
          intoMoney: '1.000.000 đ',
        },
      ],
    };
  },
  methods: {
    goHome() {
      this.$router.push('/');
    },
    nextStep() {
      this.$router.push('/thanh-toan');
    },
    handleChange(value) {
      console.log(value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/stylesheets/Page/MyCart.scss";
</style>
