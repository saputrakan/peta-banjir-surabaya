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
          icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png"
          :icon-size="[60, 60]"
        />
        <l-popup>
          <h1>Sunrise Mall</h1>
          <h4>
            <br>Alamat: Jl. Benteng Pancasila No.9, Mergelo, Balongsari, Kec. Magersari
            <br>Waktu Buka: 10 AM - 10 PM
            <br>Nomor: (0321) 5283888
          </h4>
        </l-popup>
      </l-marker>
      <!-- Ponorogo -->
      <l-marker :lat-lng="[-7.87075,111.48381]">
        <l-icon
          icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png"
          :icon-size="[60, 60]"
        />
        <l-popup>
          <h1>Ponorogo City Center</h1>
          <h4>
            <br>Alamat: Jl. Ir. H Juanda No.19, Tonatan, Kec. Ponorogo
            <br>Waktu: 10 AM ⋅ 9 PM
            <br>Nomor: (0352) 3514178
          </h4>
        </l-popup>
      </l-marker>
      <!-- Tuban -->
      <l-marker :lat-lng="[-6.89939,112.06320]">
        <l-icon
          icon-url="https://i.postimg.cc/vTZKF16j/mall-point.png"
          :icon-size="[60, 60]"
        />
        <l-popup>
          <h1>Bravo Supermarket Tuban</h1>
          <h4>
            <br>Alamat: Jl. Basuki Rachmad No.64, Kutorejo, Kec. Tuban
            <br>Waktu: 8 AM - 9:30 PM
            <br>Nomor: (0356) 321642
          </h4>
        </l-popup>
      </l-marker>
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
