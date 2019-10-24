<template>
  <el-main>
    <div class="sidebar__home">
      <div class="header__sidebar">
        <span>
          <i class="el-icon-menu"></i>
          Danh mục sản phẩm
        </span>
      </div>
      <div class="sidebar__main">
        <page-sidebar></page-sidebar>
        <div class="carousel__main">
          <el-carousel indicator-position="none" height="400px">
            <el-carousel-item v-for="item in listImagesCarousel" :key="item.index">
              <el-link>
                <img :src="item.url" alt />
              </el-link>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
    <div v-if="isShowProductsSale">
      <div class="header__section">
        <span>
          <i class="el-icon-menu"></i>
          Mặt hàng giảm giá
        </span>
      </div>
      <page-best-sale-filter-suggest :data="dataSales"
      ></page-best-sale-filter-suggest>
    </div>
    <div v-if="isShowProductsFilter">
      <div class="header__section">
        <span>
          <i class="el-icon-menu"></i>
          Tìm kiếm nhiều nhất
        </span>
      </div>
      <page-best-sale-filter-suggest :data="dataFilters"
      ></page-best-sale-filter-suggest>
    </div>
    <div v-if="isShowProducts">
      <div class="header__section">
        <span>
          <i class="el-icon-menu"></i>
          Sản phẩm nổi bật
        </span>
      </div>
      <page-best-sale-filter-suggest
      :data="dataAll"
      ></page-best-sale-filter-suggest>
    </div>
  </el-main>
</template>

<script>
import PageSidebar from '@/components/Layout/SideBar.vue';
import PageBestSaleFilterSuggest from '@/components/Home/BestSaleFilterSuggest.vue';

export default {
  name: 'HomeIndex',
  components: {
    PageSidebar,
    PageBestSaleFilterSuggest,
  },
  created() {
    this.loadData();
  },
  data() {
    return {
      isShowProductsSale: false,
      isShowProductsFilter: false,
      isShowProducts: false,
      listImagesCarousel: [
        {
          url:
            'http://tabinoshop.com/wp-content/uploads/2018/04/mo-hinh-marvel-biet-doi-sieu-anh-hung-3-800x800.jpg',
        },
        {
          url:
            'https://balono1.vn/wp-content/uploads/2019/03/z1291966781562_caddd1d5e9de0bfd0cd33484f8d612eb-600x400.jpg',
        },
        {
          url:
            'https://uptee.net/wp-content/uploads/2019/05/Marvel-studios-mau-den-600x600.jpg',
        },
        {
          url:
            'https://bizweb.dktcdn.net/thumb/large/100/098/550/files/moc-khoa-gang-tay-thanos-infinity-war-marvel-avengers-7cm-1.jpg?v=1531305877673',
        },
        {
          url:
            'https://www.lemonshop.vn/Uploads/images/demo/Marvel-Comics-Hero-The-Avengers-K%C3%ADch-Th%C6%B0%E1%BB%9Bc-L%E1%BB%9Bn-Thor-Hammer-Mjolnir-D%C3%A2y-M%C3%B3c-Kh%C3%B3a-M%C3%B3c-Kh%C3%B3a.jpg_640x640.jpg',
        },
      ],
      dataSales: {
        status: 'sale',
        products: [],
      },
      dataFilters: {
        status: 'filter',
        products: [],
      },
      dataAll: {
        status: 'all',
        products: [],
      },
      dataProducts: [
        {
          id: 1,
          name: 'Mô hình trưng bày',
          url:
            'http://tabinoshop.com/wp-content/uploads/2018/04/mo-hinh-marvel-biet-doi-sieu-anh-hung-3-800x800.jpg',
          price: 300000,
          sale: 1,
          count: 0,
        },
        {
          id: 2,
          name: 'Balo Marvel Chất',
          url:
            'https://balono1.vn/wp-content/uploads/2019/03/z1291966781562_caddd1d5e9de0bfd0cd33484f8d612eb-600x400.jpg',
          price: 300000,
          sale: 0.99,
          count: 0,
        },
        {
          id: 3,
          name: 'Áo thun Marvel',
          url:
            'https://uptee.net/wp-content/uploads/2019/05/Marvel-studios-mau-den-600x600.jpg',
          price: 300000,
          sale: 0.7,
          count: 2,
        },
        {
          id: 4,
          name: 'Móc khóa Marvel',
          url:
            'https://bizweb.dktcdn.net/thumb/large/100/098/550/files/moc-khoa-gang-tay-thanos-infinity-war-marvel-avengers-7cm-1.jpg?v=1531305877673',
          price: 300000,
          sale: 0,
          count: 2,
        },
        {
          id: 5,
          name: 'Áo thun Marvel',
          url:
            'https://uptee.net/wp-content/uploads/2019/05/Marvel-studios-mau-den-600x600.jpg',
          price: 300000,
          sale: 1,
          count: 2,
        },
        {
          id: 6,
          name: 'Móc khóa Marvel',
          url:
            'https://bizweb.dktcdn.net/thumb/large/100/098/550/files/moc-khoa-gang-tay-thanos-infinity-war-marvel-avengers-7cm-1.jpg?v=1531305877673',
          price: 300000,
          sale: 1,
          count: 2,
        },
        {
          id: 7,
          name: 'Mô hình trưng bày',
          url:
            'http://tabinoshop.com/wp-content/uploads/2018/04/mo-hinh-marvel-biet-doi-sieu-anh-hung-3-800x800.jpg',
          price: 305000,
          sale: 0,
          count: 2,
        },
        {
          id: 8,
          name: 'Balo Marvel Chất',
          url:
            'https://balono1.vn/wp-content/uploads/2019/03/z1291966781562_caddd1d5e9de0bfd0cd33484f8d612eb-600x400.jpg',
          price: 450000,
          sale: 1,
          count: 9,
        },
        {
          id: 9,
          name: 'Balo Marvel Chất',
          url:
            'https://balono1.vn/wp-content/uploads/2019/03/z1291966781562_caddd1d5e9de0bfd0cd33484f8d612eb-600x400.jpg',
          price: 300000,
          sale: 0.8,
          count: 0,
        },
        {
          id: 10,
          name: 'Móc khóa Marvel',
          url:
            'https://bizweb.dktcdn.net/thumb/large/100/098/550/files/moc-khoa-gang-tay-thanos-infinity-war-marvel-avengers-7cm-1.jpg?v=1531305877673',
          price: 350000,
          sale: 0.6,
          count: 0,
        },
      ],
    };
  },
  methods: {
    loadData() {
      if (this.dataProducts.length === 0) {
        this.isShowProducts = false;
        this.isShowProductsSale = false;
        this.isShowProductsFilter = false;
      } else {
        this.isShowProducts = true;
        this.dataAll.products = this.dataProducts;
        this.dataSales.products = this.dataProducts.filter(p => p.sale !== 1);
        if (this.dataSales.length === 0) {
          this.isShowProductsSale = false;
        } else {
          this.isShowProductsSale = true;
        }
        this.dataFilters.products = this.dataProducts.filter(p => p.count !== 0);
        if (this.dataFilters.length === 0) {
          this.isShowProductsFilter = false;
        } else {
          this.isShowProductsFilter = true;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/stylesheets/Home/Home.scss";
</style>
