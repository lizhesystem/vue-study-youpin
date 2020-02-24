<!--众筹-->
<template>
    <panel title="小米有品众筹" sub="永远好奇 永远年轻">
        <section class="content">
            <div class="item" v-for="item in items" :key="item.src">
                <section>
                    <img :src="item.src"
                         alt="">
                    <div class="info">
                        <h3>{{ item.title}}</h3>
                        <p class="text">{{ item.desc }}</p>
                        <h4>{{ item.price }}</h4>
                    </div>
                </section>
                <div class="wrapper">
                    <div class="inner"></div>
                </div>
                <footer>
                    <h3>{{ item.num }}
                        <span>人支持</span>
                        <em>{{ item.key }}</em>
                        <p>{{ item.ratio }}</p>
                    </h3>
                </footer>
            </div>

        </section>

    </panel>
</template>

<script>
    import Panel from "../core/Panel";

    export default {
        components: {Panel},
        data() {
            return {
                items: [
                    {
                        src: 'https://img.youpin.mi-img.com/shopmain/ca962cb0413279ef9435c19d46d80c75.png?w=800&h=800',
                        title: '九号电动C40',
                        desc: ' 颜值高 智能无需解锁 重量轻 车身小 全车送保险',
                        price: '4199',
                        num: '248',
                        ratio:'1059',
                        key:'热'
                    }, {
                        src: 'https://img.youpin.mi-img.com/shopmain/7676dbc2ddbad2e16a9a1267a6144c72.png?w=800&h=800',
                        title: '小白学习打印套装',
                        desc: ' ',
                        price: '99',
                        num: '23006',
                        ratio:'1150',
                        key:'爆'
                    }, {
                        src: 'https://img.youpin.mi-img.com/shopmain/3293f7d3859419672b762c9a697e3943.png?w=800&h=800',
                        title: '优一手机消毒包',
                        desc: '',
                        price: '199',
                        num: '16541',
                        ratio:'1654',
                        key:'爆'
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    .content {
        @include flex(row);

        .item {
            width: 266px;
            position: relative;
            margin-top: 20px;

            section {
                height: 210px;
                background: #f8f8f8;

                img {
                    width: 130px;
                    height: 130px;
                    position: absolute;
                    right: 20px;
                    bottom: 40px;
                }

                .info {
                    padding: 20px;

                    h3 {
                        color: #333;
                        font-size: 20px;
                        line-height: 24px;
                        height: 24px;

                    }

                    h4 {
                        font-size: 20px;
                        line-height: 24px;
                        height: 24px;
                        color: #a92112;
                        margin-top: 11px;
                    }

                    h4:before {
                        content: "¥";
                        color: #a92112;
                        font-size: 15px;
                        margin-right: 3px;
                    }
                }

            }

            .wrapper {
                width: 100%;
                height: 3px;
                overflow: hidden;
                background: #e3e1e2;

                .inner {
                    width: 124%;
                    height: 100%;
                    background: url(https://shop.io.mi-img.com/static/h5/static3/media/bar.64e546f1.jpg) 0 0 no-repeat;
                }
            }

            footer {
                background: #fff;

                h3 {
                    font-size: 18px;
                    color: #a92112;
                    margin: 10px 5px 0 15px;

                    > span {
                        color: #999;
                        font-size: 15px;
                        margin-left: 3px;
                    }

                    > em {
                        height: 18px;
                        border-radius: 2px;
                        background-color: rgb(246, 39, 0);
                        padding: 0 6px;
                        color: #fff;
                        font-size: 13px;
                        line-height: 18px;
                        font-style: normal;
                        margin-left: 3px;
                    }

                    p {
                        float: right;
                        color: #a92112;
                        font-size: 18px;
                        margin-right: 5px;
                    }

                    P:after {

                        content: "%";
                        color: #a92112;
                        font-size: 11px;
                    }
                }

            }
        }


        .item:nth-child(1) {
            width: 537px;

            > section {
                background-color: rgb(249, 243, 233);

                img {
                    width: 215px;
                    height: 215px;
                    position: absolute;
                    right: 15px;
                    top: 0;
                }

                .text {
                    color: #999;
                    font-size: 16px;
                    line-height: 20px;
                    height: 20px;
                    margin-top: 8px;
                    width: 250px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;

                }
            }
            > footer{
                h3{
                    em{
                        background-color: rgb(254, 207, 0);
                    }
                }
            }
        }

        .item:nth-child(2) {
            /*margin: 0 5px;*/
            border-left: 5px solid #fff;
            border-right: 5px solid #fff;

        }
    }


</style>
