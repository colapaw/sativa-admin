import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

const plugins = [
  vue({
    reactivityTransform: true
  }),
  vueJsx()
];

export default plugins;
