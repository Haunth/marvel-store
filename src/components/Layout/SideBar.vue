<template>
    <div class="sidebar">
      <ul class="list__item">
        <li v-for="(item, index) in  listItems" :key="item.index">
          <div class="list-card">
            <span>{{index + 1}}</span>
            <span>{{item.content}}</span>
            <span>
              <i class="el-icon-d-arrow-right"></i>
            </span>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'sidebar',
  data() {
    return {
      listItems: [
        { content: 'Áo thun Marvel' },
        { content: 'Mô hình đồ chơi' },
        { content: 'Mô hình trưng bày' },
        { content: 'Móc chìa khóa' },
        { content: 'Poster Marvel' },
        { content: 'Balo Marvel' },
      ],
    };
  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/stylesheets/Layout/SideBar.scss";
</style>
