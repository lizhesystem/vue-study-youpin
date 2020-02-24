<!--轮播图组件-->
<template>
    <section :class="cname">
        <swiper :options="options">
            <swiper-slide v-for="(item,index) in items" :key=index>
                <img :src="item.url" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>

        </swiper>

    </section>
</template>

<script>
    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    // require styles
    import 'swiper/dist/css/swiper.css'

    export default {
        components: {swiper, swiperSlide},
        props: {
            // 自定义样式
            cname: {
                type: String,
                default: ''
            },
            items: {
                type: Array,
                default() {
                    return []
                }
            },
            // 轮播图属性
            options: {
                type: Object,
                default() {
                    return {}
                }
            }


        },
        data() {
            return {}
        }
    }
</script>

<style lang="scss">

    /*轮播图样式*/
    .swiper-button-prev {
        background-image: url("https://shop.io.mi-img.com/static/h5/static3/media/yp-icons.2bf57ccf.png");
        background-position: 0 -1924px;
        background-size: auto;
        width: 45px;
    }

    .swiper-button-next {
        background-image: url("https://shop.io.mi-img.com/static/h5/static3/media/yp-icons.2bf57ccf.png");
        background-position: 0 -1837px;
        background-size: auto;
        width: 45px;
    }

    .swiper-pagination-bullet {
        margin: 0 3px;
        border-radius: 500%;
        background: #fff;
        outline: 0;
        border: 1px solid #cecece;
    }

    .swiper-pagination-bullet-active {
        box-shadow: 0 0 0 4px #ccc;
        background: #a7936e;
        border-radius: 500px;
        border: none;
    }

</style>
