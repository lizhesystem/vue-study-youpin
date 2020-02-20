<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        name: 'App',
    }
</script>

<style lang="scss">
    /*初始化样式*/
    @import "./assets/styles/reset.scss";
    #app {
        font-size: $font-size-base;
        color: $color-common;
        font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "SF UI Text",
        "Helvetica Neue", STHeiti, "Microsoft Yahei", Tahoma, Simsun, sans-serif;
    }
</style>
