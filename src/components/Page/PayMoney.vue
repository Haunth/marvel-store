<template>
  <el-main>
    <div class="header__payMoney">
      <span>
        <i class="el-icon-money"></i>
        Thanh Toán
      </span>
    </div>
    <el-breadcrumb separator-class="el-icon-d-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">Trang Chủ</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/thanh-toan'}">Thanh Toán</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="main__payMoney">
      <el-steps :active="active" finish-status="success">
        <el-step title="GIỎ HÀNG CỦA TÔI"></el-step>
        <el-step title="THANH TOÁN"></el-step>
        <el-step title="HOÀN TẤT"></el-step>
      </el-steps>
    </div>
    <div class="main__payMoney--info">
      <h2>Địa chỉ giao hàng - Thanh toán</h2>
      <div class="header__info">
        <el-button>Đăng ký tài khoản mua hàng</el-button>
        <el-button>Đăng nhập</el-button>
      </div>
      <h3>Mua hàng không cần tài khoản</h3>
      <el-form ref="form" :model="form">
        <el-form-item label="Họ và tên">
          <el-input v-model="form.name" placeholder="Họ và tên"></el-input>
        </el-form-item>
        <el-form-item label="Số điện thoại">
          <el-input v-model="form.sdt" placeholder="Số điện thoại"></el-input>
        </el-form-item>
        <el-form-item label="Email">
          <el-input v-model="form.email" placeholder="Nhập email"></el-input>
        </el-form-item>
        <el-form-item label="Địa chỉ">
          <el-input v-model="form.address" placeholder="Nhập địa chỉ"></el-input>
        </el-form-item>
        <el-form-item label="Thành phố">
          <el-select v-model="form.region" placeholder="Chọn thành phố">
            <el-option  value="Hà Nội"></el-option>
            <el-option   value="Vĩnh Phúc"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Quận huyện Thị Xã">
          <el-select v-model="form.region" placeholder="Chọn quận huyện">
            <el-option  value="Ba Đình"></el-option>
            <el-option  value="Vĩnh Yên"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Ghi chú đơn hàng">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
      </el-form>
      <h5>Phí vận chuyển: 20.000đ</h5>
      <p>Thành tiền: 2.000.000đ</p>
      <el-button class="btn-pay">Đặt hàng</el-button>
    </div>
  </el-main>
</template>

<script>
export default {
  name: 'pay_money',
  data() {
    return {
      active: 2,
      form: {
        name: '',
        sdt: '',
        email: '',
        address: '',
        desc: '',
      },
    };
  },
  methods: {
    goHome() {
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/stylesheets/Page/PayMoney.scss";
</style>
