<template>
  <div class="intro-container">
    <div class="content">
      <h1>Mall Point</h1>
      <p>Aplikasi Menampilkan Data Mall di Jawa Timu</p>
    </div>
    <button class="get-started-button" @click="startApp">Masuk</button>
  </div>
</template>

<script>
export default {
  methods: {
    startApp() {
      // Perform any necessary actions to start the app
      // For example, you can redirect the user to the main page
      // using Vue Router:
      this.$router.push('/home');
    },
  },
};
</script>

<style scoped>
.intro-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
}

.content {
  text-align: center;
}

h1 {
  font-size: 32px;
  color: #333;
  margin-bottom: 20px;
}

p {
  font-size: 18px;
  color: #666;
  margin-bottom: 30px;
}

.get-started-button {
  padding: 10px 20px;
  font-size: 18px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.get-started-button:hover {
  background-color: #45a049;
}
</style>
