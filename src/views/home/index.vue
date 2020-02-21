<template>
    <div>
        <T-header/>
        <S-heafer/>
    </div>
</template>

<script>
    import THeader from "../public/t-header";
    import SHeafer from "../public/s-heafer";

    export default {
        name: 'index',
        components: {SHeafer, THeader},
        data() {
            return {}
        }
    }
</script>

<style lang="scss">
    @import '../../assets/styles/common';
</style>

<style scoped lang="scss">

</style>
