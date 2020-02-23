<template>
    <div>
        <THeader/>
        <SHeafer/>
        <SwiperContainer/>
        <raise/>
        <BFooter/>
    </div>
</template>

<script>
    import THeader from "../public/t-header";
    import SHeafer from "../public/s-heafer";
    import BFooter from "../public/b-footer"
    import SwiperContainer from "./swiper-container";
    import Raise from "./raise";

    export default {
        name: 'index',
        components: {Raise, SwiperContainer, SHeafer, THeader, BFooter},
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
