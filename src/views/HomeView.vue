<!-- eslint-disable max-len -->
<template>
 <main>
      <div
        class="relative pt-16 pb-32 flex content-center items-center justify-center"
        style="min-height: 75vh;"
      >
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style='background-image: url("https://images.unsplash.com/photo-1533481405265-e9ce0c044abb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80");'
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div class="pr-12">
                <h1 class="text-white font-semibold text-5xl">
                  Mall Point
                </h1>
                <p class="mt-4 text-lg text-gray-300">
                  Mall Point adalah sebuah aplikasi berbasis web yang menyediakan informasi mengenai mall-mall di Jawa Timur. Aplikasi ini dirancang untuk memudahkan pengguna dalam mencari dan menemukan berbagai mall yang ada di wilayah Jawa Timur
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style="height: 70px;"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
      <div class="text-center pt-3">
        <button class="get-started-button py-2 px-4 text-lg bg-amber-500 text-white rounded-md transition-colors duration-300 hover:bg-amber-600" @click="startApp">Masuk ke Peta</button>
      </div>
    </main>
</template>

<script>
export default {
  methods: {
    startApp() {
      // Perform any necessary actions to start the app
      // For example, you can redirect the user to the main page
      // using Vue Router:
      this.$router.push('/map');
    },
  },
};
</script>
