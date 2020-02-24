<template>
    <panel :class="$style.content" title="每日新品" sub="每天10点 惊喜不断">
        <div :class="$style.more">
            <span>更多 ></span>
        </div>
        <!--商品部分-->
        <section :class="$style.product">
            <swiper :options="options">
                <swiper-slide v-for="item in items" :key="item.url">
                    <section :class="$style.item">
                        <img :src="item.url" alt="">
                        <div :class="$style.price">
                            <h3>{{ item.title }}</h3>
                            <p>{{ item.sub }}</p>
                            <h4>{{ item.price}}</h4>
                        </div>
                    </section>

                </swiper-slide>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
        </section>
    </panel>

</template>

<script>
    import Panel from "../core/Panel";
    import {swiper, swiperSlide} from 'vue-awesome-swiper'

    export default {
        name: 'day',
        components: {Panel, swiper, swiperSlide},
        data() {
            return {
                options: {
                    slidesPerView: 4,  // 每页可见个数4个
                    spaceBetween: 5,
                    initialSlide: 1,   // 默认第二个
                    // centeredSlides: true,//居中
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                },
                items: [{
                    url: "https://img.youpin.mi-img.com/shopmain/ed033843ff8f4c5aa249efa93fd737ec.jpg",
                    title: '免洗手消毒凝胶',
                    sub:'75%酒精抑菌率99.9%  大容量 当天发出 顺丰配送',
                    price: "99",
                }, {
                    url: "https://img.youpin.mi-img.com/shopmain/4a38a5f3c0c9bd2d7e832aca8563227b.jpg",
                    title: '办公增高消毒台',
                    sub:'紫外线杀菌消毒，智能人机交互，修正坐姿呵护颈椎，超大储物空间',
                    price: "999",
                }, {
                    url: 'https://img.youpin.mi-img.com/shopmain/22b090924e371c56a96f9008e2c26ed9.jpg',
                    title: '医用PVC检查手套',
                    sub:'产品为一次性卫生用品，可有效阻隔病毒，具有安全防护功能',
                    price: '36.9',
                }, {
                    url: 'https://img.youpin.mi-img.com/shopmain/0d5e6d6d5044a42af91bb3a9253c6910.jpg',
                    title: 'Soart消毒洗手液',
                    sub:'随时随地 “杀”灭病菌 守护全家健康',
                    price: '68',

                }, {
                    url: 'https://img.youpin.mi-img.com/shopmain/1cb891b4a4edaaca5a04bb432b4a672d.jpg',
                    title: 'woobi  F95口罩',
                    sub:'F95过滤标准、荣获国际设计奖、呼吸洁净空气、健康防护',
                    price: '69',
                }]
            }
        }
    }
</script>

<style module lang="scss">
    .content {
        position: relative;
        margin-top: 40px !important;

        .more {
            position: absolute;
            top: 15px;
            right: 0;
            font-size: 14px;
            color: #999;
            cursor: pointer;
        }


        /*轮播图部分*/
        .product {
            margin-top: 20px;

            .item {
                transition: all .4s;

                .price {
                    width: 266px;
                    padding-top: 13px;
                    padding-bottom: 15px;
                    text-align: center;

                    h3 {
                        color: #333;
                        font-size: 19px;
                        line-height: 23px;
                        height: 23px;
                    }
                    p{
                        margin: 10px auto;
                        width: 200px;
                        @include ellipsis;
                        /*overflow: hidden;*/
                        /*white-space: nowrap;*/
                        /*-o-text-overflow: ellipsis;*/
                        /*text-overflow: ellipsis;*/
                    }
                    h4 {
                        font-size: 22px;
                        height: 26px;
                        line-height: 26px;
                        color: #a92112;

                    }

                    h4:before {
                        content: "¥";
                        font-size: 15px;
                    }

                }

            }
            .item:hover {
                box-shadow: 0 2px 20px rgba(0, 0, 0, .1);
                transform: translate3d(0, -2px, 0);
            }
        }
    }
</style>
