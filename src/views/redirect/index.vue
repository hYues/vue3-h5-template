<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

/** 刷新当前页面 */
router.replace({ path: '/' + route.params.path, query: route.query });
</script>
