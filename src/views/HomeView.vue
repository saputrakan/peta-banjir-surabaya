<template>
  <div class="home">
    <l-map
      v-model="zoom"
      v-model:zoom="zoom"
      :center="[-7.2678, 112.6761]"
    >
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ></l-tile-layer>
      <l-marker :lat-lng="[-7.2678, 112.6761]">
        <l-icon
          icon-url="https://i.postimg.cc/mDB2N2D9/Banjir-Mark.png"
          :icon-size="[45, 45]"
        />
      </l-marker>
      <l-marker :lat-lng="[-7.2634, 112.7931]">
        <l-icon
          icon-url="https://i.postimg.cc/mDB2N2D9/Banjir-Mark.png"
          :icon-size="[45, 45]"
        />
      </l-marker>
      <l-marker :lat-lng="[-7.2415,112.7150]">
        <l-icon
          icon-url="https://i.postimg.cc/mDB2N2D9/Banjir-Mark.png"
          :icon-size="[45, 45]"
        />
      </l-marker>
      <l-marker :lat-lng="[-7.29184,112.71928]">
        <l-icon
          icon-url="https://i.postimg.cc/mDB2N2D9/Banjir-Mark.png"
          :icon-size="[45, 45]"
        />
      </l-marker>
      <l-marker :lat-lng="[-7.28186,112.74392]">
        <l-icon
          icon-url="https://i.postimg.cc/mDB2N2D9/Banjir-Mark.png"
          :icon-size="[45, 45]"
        />
      </l-marker>
      <l-marker :lat-lng="[-7.3339,112.7584]">
        <l-icon
          icon-url="https://i.postimg.cc/mDB2N2D9/Banjir-Mark.png"
          :icon-size="[45, 45]"
        />
      </l-marker>
      <l-marker :lat-lng="[-7.33125,112.77179]">
        <l-icon
          icon-url="https://i.postimg.cc/mDB2N2D9/Banjir-Mark.png"
          :icon-size="[45, 45]"
        />
      </l-marker>
      <l-marker :lat-lng="[-7.2999,112.7144]">
        <l-icon
          icon-url="https://i.postimg.cc/mDB2N2D9/Banjir-Mark.png"
          :icon-size="[45, 45]"
        />
      </l-marker>
      <l-marker :lat-lng="[-7.28448,112.69334]">
        <l-icon
          icon-url="https://i.postimg.cc/mDB2N2D9/Banjir-Mark.png"
          :icon-size="[45, 45]"
        />
      </l-marker>
      <l-marker :lat-lng="[-7.28795,112.67232]">
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
} from '@vue-leaflet/vue-leaflet';
import { ref } from 'vue';

export default {
  name: 'HomeView',
  components: {
    LMap,
    LIcon,
    LMarker,
    LTileLayer,
  },
  setup() {
    const zoom = ref(12);
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
