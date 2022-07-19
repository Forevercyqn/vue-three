<!--  -->
<template>
<div class='app-full' ref='app'>
</div>
</template>

<script setup lang='ts'>

import {onMounted, ref} from 'vue'
import {Base} from '@/tools/Base'

onMounted(()=>{
    let base = new Base('.app-full');
    console.log(base);
    base.init();
})

</script>

<style scoped lang='scss'>

</style>