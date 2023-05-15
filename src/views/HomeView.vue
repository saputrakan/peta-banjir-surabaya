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
          icon-url="https://cdn.frankerfacez.com/static/emoji/images/twemoji/1f489.png"
          :icon-size="[45, 45]"
        />
      </l-marker>
      <l-marker :lat-lng="[-7.2634, 112.7931]">
        <l-icon
          icon-url="https://cdn.frankerfacez.com/static/emoji/images/twemoji/1f489.png"
          :icon-size="[45, 45]"
        />
      </l-marker>
      <l-marker :lat-lng="[-7.2415,112.7150]">
        <l-icon
          icon-url="https://cdn.frankerfacez.com/static/emoji/images/twemoji/1f489.png"
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
