<template>
  <nav>
    <ul>
      <li v-for="item in menuItems" :key="item.id">
        <a :href="item.url">{{ item.title }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { id: 1, title: 'Beranda', url: '/' },
        { id: 2, title: 'Tentang Kami', url: '/tentang' },
        { id: 3, title: 'Layanan', url: '/layanan' },
        { id: 4, title: 'Kontak', url: '/kontak' },
      ],
    };
  },
};
</script>

<style scoped>
nav {
  background-color: #f2f2f2;
  padding: 10px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  display: inline-block;
  margin-right: 10px;
}

a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}
</style>
