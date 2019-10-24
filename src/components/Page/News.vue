<template>
  <el-main>
    <div class="header__news">
      <span>
        <i class="el-icon-menu"></i>
        Tin tức
      </span>
    </div>
    <el-breadcrumb separator-class="el-icon-d-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">Trang Chủ</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/tin-tuc'}">Tin tức</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="main__news">
      <div class="main__news--one" v-for="item in dataNews" :key="item.id">
        <img
          :src=item.urlImage
          alt
        />
        <div class="main__news--content">
          <h2>
           {{item.title}}
          </h2>
          <span>Cập nhật : </span>
          <span class="timePost">{{item.timePost}}</span>
          <p>
            {{item.summary}}
          </p>
        </div>
      </div>
    </div>
  </el-main>
</template>

<script>

export default {
  name: 'news',
  data() {
    return {
      dataNews: [
        {
          title: 'Sự kiện D23 EXPO: Marvel lại "chơi chiêu" tung fancam quay lén trailer "Black Widow", thêm 3 người được "bứng" lên Disney+?',
          timePost: '3 ngày trước',
          urlImage: 'https://kenh14cdn.com/thumb_w/300/2019/8/24/aug-24-2019-08-54-27-1566611685684572291768-crop-1566611767322717170401.gif',
          summary: 'Có vẻ như hầu bao của khán giả lại sắp phải "móc" ra không ít cho Disney và Marvel, ngoài phần phim riêng của goá phụ đen Black Widow, người xem còn có thêm 3 lựa chọn hoàn toàn mới trên nền tảng Disney+.',
        },
        {
          title: 'CHÍNH THỨC: Sony tuyên bố rút bản quyền Spider-Man, Marvel đã mất "thằng bé" thật rồi!',
          timePost: '6 ngày trước',
          urlImage: 'https://kenh14cdn.com/thumb_w/300/2019/8/21/spider-manmarvelstudioskevinfeigeout-1566376510386670566806-crop-1566376515301841053811.jpg',
          summary: 'Có lẽ tựa phim "Spider-Man: Far From Home" chính là lời tiên đoán chuẩn xác cho tương lại của "bé Nhện" sau khi Disney và Sony chính thức "chia tay".',
        },
        {
          title: 'Drama đầu ngày: Sony nghỉ chơi Marvel, Spider-Man bị khai tử khỏi MCU rồi?',
          timePost: '3 giờ trước',
          urlImage: 'https://kenh14cdn.com/thumb_w/300/2019/8/21/tumblrpjv3lgzae61wn67wc500-1566351189784697497626-crop-1566351243359678446136.gif',
          summary: 'Mới sáng fan Marvel đã có cú sốc mang tên Spider-Man Homeless thế này!',
        },
        {
          title: 'HOT: Việt Nam lọt vào danh sách chờ địa điểm gửi gắm Shang-Chi "quậy tung" màn ảnh 2021 của Marvel',
          timePost: '1 ngày trước',
          urlImage: 'https://kenh14cdn.com/thumb_w/300/2019/8/24/photo-1-1566623578814439908666-crop-15666238578811031711568.jpeg',
          summary: 'Từng lên màn ảnh rộng toàn thế giới với những thước phim đẹp mê li trong Kong: Skull Island, Việt Nam liệu có tiếp tục sẽ là điểm dừng chân tiếp theo của Shang-Chi cùng đoàn làm phim Marvel?',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/stylesheets/Page/News.scss';
</style>
