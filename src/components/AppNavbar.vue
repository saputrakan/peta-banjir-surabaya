<template>
  <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-amber-500 mb-3">
    <ul class="flex items-center justify-end space-x-4">
      <li v-for="item in menuItems" :key="item.id">
        <router-link :to="item.url" class="text-gray-800 font-bold">{{ item.title }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { id: 1, title: 'Home', url: '/' },
        { id: 2, title: 'About Us', url: '/about' },
        { id: 3, title: 'Contact', url: '/contact' },
      ],
    };
  },
};
</script>
