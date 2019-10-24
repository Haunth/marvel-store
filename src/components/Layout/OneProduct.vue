<template>
<div>
  <div v-for="product in data.list.slice(0,4)" :key="product" class="one__product">
    <div class="main__section--product">
      <div class="top__product">
        <img :src="product.url" alt />
        <div class="dropdown__product">
          <div class="btn-hover">
            <el-button class="btn view-detail">Xem thêm</el-button>
          </div>
        </div>
      </div>
      <div class="info__product">
        <div class="info__product--left">
          <span class="name--product">{{product.name}}</span>
          <div class="price">
            <span class="price__buy">{{product.price}} đ</span>
            <span class="price__main" :class="data.status">{{product.priceMain}}đ</span>
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

</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>
