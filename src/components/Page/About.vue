<template>
  <el-main>
    <div class="header__about">
      <span>
        <i class="el-icon-menu"></i>
        Giới thiệu
      </span>
    </div>
    <el-breadcrumb separator-class="el-icon-d-arrow-right">
      <el-breadcrumb-item  :to="{ path: '/' }">Trang Chủ</el-breadcrumb-item>
      <el-breadcrumb-item  :to="{path:'/gioi-thieu'}">Giới Thiệu</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="main__about">
      <p>
        Vũ trụ Điện ảnh Marvel (tiếng Anh: Marvel Cinematic Universe hay viết tắt là MCU)
        là một thương hiệu truyền thông và một vũ trụ chia sẻ hư cấu,
        tập trung vào một loạt các bộ phim siêu anh hùng do
        Marvel Studios sản xuất độc lập và dựa trên các nhân vật
        trong những ấn phẩm của Marvel Comics
      </p>
      <br />
      <p>
        Thương hiệu mở rộng bao gồm những mảng truyện tranh,
        phim ngắn và phim truyền hình.
        Vũ trụ chia sẻ gần giống với Vũ trụ Marvel gốc trong truyện tranh,
        được thành lập bằng cách vượt qua những yếu tố cốt truyện, nội dung,
        diễn viên và nhân vật phổ biến. Clark Gregg xuất hiện nhiều nhất trong các
        thương hiệu khi đóng vai Phil Coulson, một nhân vật gốc thuộc MCU
      </p>
      <br />
      <p>
        MCU hiện tại có 4 giai đoạn.
        Giai đoạn 1 (còn được gọi là Avengers Assembled) bắt đầu với Người Sắt (2008)
        và kết thúc với Biệt đội siêu anh hùng (2012).
        Giai đoạn 2 bắt đầu với Người Sắt 3 (2013) và kết thúc với Người Kiến (2015).
        Giai đoạn 3 bắt đầu với Captain America: Nội chiến siêu anh hùng (2016)
        và sẽ kết thúc với Người Nhện: Xa Nhà (2019).
        Giai đoạn 4 dự kiến sẽ bao gồm 3 phim được lên kế hoạch phát hành vào năm 2020,
        3 phim vào năm 2021 và 3 phim vào năm 2022.
        Nhà sản xuất Kevin Feige cho biết MCU có thể sẽ
        không còn phân chia giai đoạn sau Avengers: Hồi kết (2019) nữa
      </p>
    </div>
  </el-main>
</template>

<script>
export default {
  name: 'about',
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/stylesheets/Page/About.scss';
</style>
