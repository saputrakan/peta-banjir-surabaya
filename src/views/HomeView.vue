<template>
  <div class="home">
    <l-map
      v-model="zoom"
      v-model:zoom="zoom"
      :center="[-6.970,112.313]"
    >
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ></l-tile-layer>
      <!-- Mojokerto -->
      <l-marker :lat-lng="[-7.4713, 112.44354]">
        <l-icon
          icon-url="https://i.postimg.cc/mDB2N2D9/Banjir-Mark.png"
          :icon-size="[20, 20]"
        />
        <l-popup>
          <h1>Sunrise Mall</h1>
          <h3>deskripi</h3>
        </l-popup>
      </l-marker>
      <!-- Ponorogo -->
      <l-marker :lat-lng="[-7.87094,111.48385]">
        <l-icon
          icon-url="https://i.postimg.cc/mDB2N2D9/Banjir-Mark.png"
          :icon-size="[20, 20]"
        />
        <l-popup>
          <h1>Ponorogo City Mall</h1>
          <h3>deskripsi</h3>
        </l-popup>
      </l-marker>
      <l-marker :lat-lng="[-7.26241,112.68598]">
        <l-icon
          icon-url="https://i.postimg.cc/mDB2N2D9/Banjir-Mark.png"
          :icon-size="[45, 45]"
        />
      </l-marker>
      <l-marker :lat-lng="[-7.28039,112.68221]">
        <l-icon
          icon-url="https://i.postimg.cc/mDB2N2D9/Banjir-Mark.png"
          :icon-size="[45, 45]"
        />
      </l-marker>
      <l-marker :lat-lng="[-7.27390,112.69853]">
        <l-icon
          icon-url="https://i.postimg.cc/mDB2N2D9/Banjir-Mark.png"
          :icon-size="[45, 45]"
        />
      </l-marker>
      <l-marker :lat-lng="[-7.27337,112.70399]">
        <l-icon
          icon-url="https://i.postimg.cc/mDB2N2D9/Banjir-Mark.png"
          :icon-size="[45, 45]"
        />
      </l-marker>
      <l-marker :lat-lng="[-7.27466,112.70680]">
        <l-icon
          icon-url="https://i.postimg.cc/mDB2N2D9/Banjir-Mark.png"
          :icon-size="[45, 45]"
        />
      </l-marker>
      <l-marker :lat-lng="[-7.25914,112.67966]">
        <l-icon
          icon-url="https://i.postimg.cc/mDB2N2D9/Banjir-Mark.png"
          :icon-size="[45, 45]"
        />
      </l-marker>
      <l-marker :lat-lng="[-7.2589,112.6870]">
        <l-icon
          icon-url="https://i.postimg.cc/mDB2N2D9/Banjir-Mark.png"
          :icon-size="[45, 45]"
        />
      </l-marker>
       <l-marker :lat-lng="[-7.2415,112.7177]">
        <l-icon
          icon-url="https://i.postimg.cc/mDB2N2D9/Banjir-Mark.png"
          :icon-size="[45, 45]"
        />
      </l-marker>
      <l-marker :lat-lng="[-7.24455, 112.72572]">
        <l-icon
          icon-url="https://i.postimg.cc/mDB2N2D9/Banjir-Mark.png"
          :icon-size="[45, 45]"
        />
      </l-marker>
       <l-marker :lat-lng="[-7.2561,112.7826]">
        <l-icon
          icon-url="https://i.postimg.cc/mDB2N2D9/Banjir-Mark.png"
          :icon-size="[45, 45]"
        />
      </l-marker>
      <l-control-layers />
    </l-map>
  </div>
</template>

<script>
import {
  LMap,
  LIcon,
  LMarker,
  LTileLayer,
  LPopup,
} from '@vue-leaflet/vue-leaflet';
import { ref } from 'vue';

export default {
  name: 'HomeView',
  components: {
    LMap,
    LIcon,
    LMarker,
    LTileLayer,
    LPopup,
  },
  setup() {
    const zoom = ref(8);
    return {
      zoom,
    };
  },
};
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100%;
}
</style>
