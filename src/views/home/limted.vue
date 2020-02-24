<template>
    <panel title="限时购" :class="$style.content">
        <div :class="$style.more">
            <span>更多 ></span>
        </div>
        <!--倒计时部分-->
        <div :class="$style.time">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODE4NDU0MzZBMUNFMTFFODhFQUZGMUEzNDU1MUNGRjUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODE4NDU0MzdBMUNFMTFFODhFQUZGMUEzNDU1MUNGRjUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4MTg0NTQzNEExQ0UxMUU4OEVBRkYxQTM0NTUxQ0ZGNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4MTg0NTQzNUExQ0UxMUU4OEVBRkYxQTM0NTUxQ0ZGNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjQBja0AAANrSURBVHja7JhbSFRRFIbPMZWKykwjJQgs0Ihq6KXMKAfKQNOKohJ6kIh66/YmlUXY5SEqSSroRaSHSssiFYuKktJqXlKE6GqPJuS1C5jJ9G/4J1bDuextI/nQgo9ZM2fvdf69zz5rrz12OBy2xpPFR5yauSn/XMzWzh4rzhpn5icoHTwA30G5R7vT4Bs/3ewU29wDM90a2ZE15PDIFoEGMIffu0GaS5wfIAH85KeTDYBp9D+AQvBa95GtBS1CzBDYI65ngAPgFngjRKg1+Q7c5vUM0Uf1H6Y/D7SC1ToztANcFgu+F2wET8AqUMZAtsaSUMEfguOgmf1ugiReVwJ3giteM1QpxKjRZoNX4DqDrtEUY7Gdav+Y/dvACvCR19XMnvFb1OfAINdPDpgIXqoBiDZqrdSDXSDAEdv8DPD3erb7vUQYJ46DVIu7H1zUXdQWg6vRTRePoAYc5drxsyxwjGJssbhzQbtpHlKvfJMQowIVgWJNMRbbFbNfP39LYtx00zxULTr1cFSNo8xDql+QcSKDrTYRtBnk0R8BW5ymWNg+MBns92jTzrgj/J7HuFqCjgj/PHjk82gSovdGF1NvaYX4XqYjaBlYTP8rc0gs7QTjRnaDbD9BG4Rfz8QYS+tj3Iit9xOUI/y6MdrU61zu5ygoS/ihMRIUcrmfo6Bk4Xdr3mBY+Gka7T+53M+3HkrUFDQk/BdgocFs2X6C+oQ/WzPobtZEFkuWpyxh3EzOYq+fILktzNcUdJUCesX20MhSxsmWCP+tn6BW4a8zmPpm5pT3IklWuLQtFH6Ln6A7wlcb4wwDUap+Ws480+MiKJlxZa7zFPQcdNCfAg4bvtKfmexSWaZE2yHGtXifZzpvmTxh7OVOHwvLjdqAy3U311pwn/4E1sGBvxSj+t9gPIvxa03qoRKRwFJYORaMUkwBK4ZUkRhLTAu0LpDPStFi5ajq7GsgU1NIJts3iIw8wLhdnmd7F1MdJ0Vl1W0stJr4RoZ4ivgCpvIstpQLO9/hHoncUNtMBZWCk/TVKeSuOHnEs04uMnhstRSpBniBa6nS5JGViZNGKWcmyLO+7n84kYNikIM56FUt+s1QFdjOIJdENm7mY9kEVoIFYBbP7YPMQx086aqjdqeIeVaIqTL9s+H//0N/zNB4sV8CDACpgNIYcitWCgAAAABJRU5ErkJggg=="
                 alt="">
            <p>09:00场</p>
            <h4><span>00</span>:<span>31</span>:<span>50</span></h4>

        </div>

        <!--商品部分-->
        <section :class="$style.product">
            <swiper :options="options">
                <swiper-slide v-for="item in items" :key="item.url">
                    <section :class="$style.item">
                        <img :src="item.url" alt="">
                        <div :class="$style.price">
                            <h3>{{ item.title }}</h3>
                            <h4>{{ item.price }}<span>¥{{ item.save}}</span></h4>
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
        name: 'limted',
        components: {swiper, swiperSlide, Panel},
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
                    url: "https://img.youpin.mi-img.com/shopmain/0d1fd2f96246ceef7fa2be13da219fd0.jpg",
                    title: '隐形面膜',
                    price: "99起",
                    save: '276'
                }, {
                    url: "https://img.youpin.mi-img.com/shopmain/f483f74d613b802e64869f84bf8591da.jpg",
                    title: '碧家新风机',
                    price: "799",
                    save: '1099'
                }, {
                    url: 'https://img.youpin.mi-img.com/shopmain/4c1eee1593d4ba993d5e353af9ec26ba.jpg',
                    title: '小莫椭圆机',
                    price: '1999',
                    save: '2699'
                }, {
                    url: 'https://img.youpin.mi-img.com/goods/eee0b007d459db2afe327a88f711a5cb.jpg',
                    title: 'Jeep智能腕表',
                    price: '1480',
                    save: '1980'
                }, {
                    url: 'https://img.youpin.mi-img.com/goods/3576a0e50ba6dc4c20c0830de092257f.jpg',
                    title: '迪奥999',
                    price: '215',
                    save: '275'
                }]
            }
        }
    }
</script>

<style module lang="scss">
    .content {
        position: relative;
        margin-top: 40px !important;
        /*倒计时部分*/
        .time {
            position: absolute;
            font-size: 18px;
            color: #a92112;
            left: 100px;
            top: 12px;
            @include flex(row);
            align-items: center;

            img {
                width: 18px;
                height: 18px;
            }

            h4 {
                margin-left: 5px;

                > span {
                    width: 23px;
                    height: 23px;
                    display: inline-block;
                    line-height: 23px;
                    color: #fff;
                    margin: 0 3px;
                    font-size: 15px;
                    background-color: #b04337;
                    text-align: center;
                }
            }

        }

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
                    background: #faf6ef;
                    padding-top: 13px;
                    padding-bottom: 15px;
                    text-align: center;
                    color: #a92112;

                    h3 {
                        color: #333;
                        font-size: 19px;
                        line-height: 23px;
                        height: 23px;
                        margin-top: 0;
                    }

                    h4 {
                        font-size: 22px;
                        margin-top: 11px;
                        height: 26px;
                        line-height: 26px;

                        > span {
                            margin-left: 3px;
                            font-size: 14px;
                            color: #333;
                            text-decoration: line-through;
                        }
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
