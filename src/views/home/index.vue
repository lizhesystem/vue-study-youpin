<template>
    <div>
        <THeader/>
        <SHeafer/>
        <SwiperContainer/>
        <Raise/>
        <Limted/>
        <Day/>
        <Push/>
        <BFooter/>
    </div>
</template>

<script>
    import THeader from "../public/t-header";
    import SHeafer from "../public/s-heafer";
    import BFooter from "../public/b-footer"
    import SwiperContainer from "./swiper-container";
    import Raise from "./raise";
    import Limted from "./limted";
    import Day from "./day";
    import Push from './push'

    export default {
        name: 'index',
        components: {Push,Day, Limted, Raise, SwiperContainer, SHeafer, THeader, BFooter},
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
