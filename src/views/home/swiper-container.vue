<template>
    <div>
        <div :class="$style.content">
            <!--商品分类-->
            <div :class="$style.category" @mouseleave="out">
                <!--左侧类目-->
                <div :class="$style.nav">
                    <ul>
                        <li @mouseenter="mouseenter(t.id)" v-for="(t,index) in lists" :key="index">
                            <span>{{ t.left }}</span>/<span>{{ t.right }}</span>
                        </li>
                    </ul>
                </div>
                <!--右侧商品分类-->
                <div :class="[$style.detail,index === id? 'show' : 'hide']"
                     v-for="(g,index) in allgoods" :key="index">
                    <div :class="[$style.detailgroup]" v-for="(good,index) in g" :key="index">
                        <h4>{{ good.title }}</h4>
                        <ul>
                            <li :class="$style.item" v-for="item in good.breed" :key="item.src">
                                <img :src="item.src"
                                     alt="">
                                <span>{{ item.name }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!--轮播图-->
            <Slider :options="options" :class="$style.slider" :items="items"></Slider>
        </div>
        <!--五宫格-->
        <section :class="$style.box">
            <div :class="$style.wrap" v-for="item in boxs" :key="item.src">
                <img :src="item.src" alt="">
                <p>{{ item.title}}</p>
            </div>
        </section>
    </div>
</template>

<script>
    import Slider from "../core/slider";

    export default {
        components: {Slider},
        data() {
            return {
                lists: [
                    {
                        id: 0,
                        left: '有品推荐',
                        right: '家用电器'
                    }, {
                        id: 1,
                        left: '智能家庭',
                        right: '电视影音'
                    }, {
                        id: 3,
                        left: '家居家装',
                        right: '居家餐厨'
                    }, {
                        id: 4,
                        left: '运动户外',
                        right: '出行车品'
                    }, {
                        id: 5,
                        left: '手机电脑',
                        right: '数码周边'
                    }, {
                        id: 6,
                        left: '服装配饰',
                        right: '鞋靴箱包'
                    }, {
                        id: 7,
                        left: '日用文创',
                        right: '美食酒饮'
                    }, {
                        id: 8,
                        left: '美妆个护',
                        right: '健康保健'
                    }, {
                        id: 9,
                        left: '母婴亲子',
                        right: '宠物用品'
                    },
                ],
                allgoods: [[
                    {
                        id: 1,
                        title: '有品推荐',
                        breed: [
                            {
                                src: 'https://img.youpin.mi-img.com/miio_album_pics/e3c2e6ebed890f23ecb93e163dfe322e.png?w=800&h=800',
                                name: '销量榜单'
                            },
                            {
                                src: 'https://img.youpin.mi-img.com/miio_album_pics/94394921a4be290a500e0250caa9f8a3.png?w=800&h=800',
                                name: '米粉热搜'
                            },
                            {
                                src: 'https://img.youpin.mi-img.com/miio_album_pics/8e52f5b88b2244900d90939508b6153f.png?w=800&h=800',
                                name: '清凉季'
                            },
                            {
                                src: 'https://img.youpin.mi-img.com/miio_album_pics/1076913edcd1f059373b50ec8db4be11.png?w=800&h=800',
                                name: '女神最爱'
                            },
                            {
                                src: 'https://img.youpin.mi-img.com/miio_album_pics/0d4009c02562f3a38a6abe8a29240963.png?w=800&h=800',
                                name: '男士精选'
                            },
                            {
                                src: 'https://img.youpin.mi-img.com/miio_album_pics/bb0c220897fbbb2aa3b0212fc54cec73.jpg?w=480&h=480',
                                name: '婴童精选'
                            },
                            {
                                src: 'https://img.youpin.mi-img.com/miio_album_pics/42bbb1b4182810bb14f04761e1116efb.png?w=800&h=800',
                                name: 'D.LAB'
                            },
                            {
                                src: 'https://img.youpin.mi-img.com/miio_album_pics/06c6dc3c5b157248e23c85de0099884f.png?w=800&h=800',
                                name: '小爱专区'
                            },
                            {
                                src: 'https://img.youpin.mi-img.com/miio_album_pics/ffc06b2548bb83678e1b827e20aebd33.png?w=800&h=800',
                                name: '品质生活'
                            },
                            {
                                src: 'https://img.youpin.mi-img.com/miio_album_pics/4fcfc7025ce5f2dc9454c1a245fc54d5.png?w=800&h=800',
                                name: '美酒佳酿'
                            },
                            {
                                src: 'https://img.youpin.mi-img.com/miio_album_pics/4be80e7c1cb8411279d4774b2da6f948.png?w=800&h=800',
                                name: '运动健身'
                            },
                            {
                                src: 'https://img.youpin.mi-img.com/miio_album_pics/5bdb2b11d1216d372895bbe297ebc34d.png?w=480&h=480',
                                name: '健康生活'
                            },

                        ],
                    },
                    {
                        id: 2,
                        title: '家用电器',
                        breed: [
                            {
                                src: 'https://img.youpin.mi-img.com/miio_album_pics/29f38ca158038c4e8f0d38d6575964fc.jpg?_s=ks3',
                                name: '新品推荐'
                            },
                            {
                                src: 'https://img.youpin.mi-img.com/miio_album_pics/7764c6a86edd68d6afa36eac9672c26c.jpg?w=480&h=480',
                                name: '热卖榜单'
                            },
                            {
                                src: 'https://img.youpin.mi-img.com/goods/shop_da172f7a634a00e2fb312f118b2915b1.jpeg?_s=ks3',
                                name: '空调/风扇'
                            },
                            {
                                src: 'https://img.youpin.mi-img.com/goods/shop_840f9feb5a539092a0401041960056f8.jpeg?_s=ks3',
                                name: '清洁电器'
                            },
                            {
                                src: 'https://img.youpin.mi-img.com/miio_album_pics/c46601dec679ba1c37e1f7b59f297294.jpg?_s=ks3',
                                name: '洗衣机'
                            },
                            {
                                src: 'https://img.youpin.mi-img.com/goods/shop_988f6e0a59bb82f10391368db740148e.jpeg?_s=ks3',
                                name: '冰箱'
                            },
                            {
                                src: 'https://img.youpin.mi-img.com/miio_album_pics/220845172aaf8671a2dc93687f4ef4ae.jpg?w=480&h=480',
                                name: '生活电器'
                            },
                            {
                                src: 'https://img.youpin.mi-img.com/miio_album_pics/eb2187bd5ac82480f12ec20ce3eba0c4.jpg?_s=ks3',
                                name: '厨房大电'
                            },
                            {
                                src: 'https://img.youpin.mi-img.com/miio_album_pics/d2f916f8f1bd503e95a6a3e010045d64.png?_s=ks3',
                                name: '厨房小电'
                            },
                            {
                                src: 'https://img.youpin.mi-img.com/miio_album_pics/4bcc94815c711e46c6ff3bea7fc294f1.jpg?_s=ks3',
                                name: '卫浴电器'
                            }
                        ]
                    }
                ], [
                    {
                        id: 1,
                        title: '智能家庭',
                        breed: [
                            {
                                src: 'https://img.youpin.mi-img.com/miio_album_pics/e3c2e6ebed890f23ecb93e163dfe322e.png?w=800&h=800',
                                name: '销量榜单'
                            },
                            {
                                src: 'https://img.youpin.mi-img.com/miio_album_pics/94394921a4be290a500e0250caa9f8a3.png?w=800&h=800',
                                name: '米粉热搜'
                            },
                            {
                                src: 'https://img.youpin.mi-img.com/miio_album_pics/8e52f5b88b2244900d90939508b6153f.png?w=800&h=800',
                                name: '清凉季'
                            },
                            {
                                src: 'https://img.youpin.mi-img.com/miio_album_pics/1076913edcd1f059373b50ec8db4be11.png?w=800&h=800',
                                name: '女神最爱'
                            },
                            {
                                src: 'https://img.youpin.mi-img.com/miio_album_pics/0d4009c02562f3a38a6abe8a29240963.png?w=800&h=800',
                                name: '男士精选'
                            },
                            {
                                src: 'https://img.youpin.mi-img.com/miio_album_pics/bb0c220897fbbb2aa3b0212fc54cec73.jpg?w=480&h=480',
                                name: '婴童精选'
                            },
                            {
                                src: 'https://img.youpin.mi-img.com/miio_album_pics/42bbb1b4182810bb14f04761e1116efb.png?w=800&h=800',
                                name: 'D.LAB'
                            },
                            {
                                src: 'https://img.youpin.mi-img.com/miio_album_pics/06c6dc3c5b157248e23c85de0099884f.png?w=800&h=800',
                                name: '小爱专区'
                            },
                            {
                                src: 'https://img.youpin.mi-img.com/miio_album_pics/ffc06b2548bb83678e1b827e20aebd33.png?w=800&h=800',
                                name: '品质生活'
                            },
                            {
                                src: 'https://img.youpin.mi-img.com/miio_album_pics/4fcfc7025ce5f2dc9454c1a245fc54d5.png?w=800&h=800',
                                name: '美酒佳酿'
                            },
                            {
                                src: 'https://img.youpin.mi-img.com/miio_album_pics/4be80e7c1cb8411279d4774b2da6f948.png?w=800&h=800',
                                name: '运动健身'
                            },
                            {
                                src: 'https://img.youpin.mi-img.com/miio_album_pics/5bdb2b11d1216d372895bbe297ebc34d.png?w=480&h=480',
                                name: '健康生活'
                            },

                        ],
                    },
                    {
                        id: 2,
                        title: '电视影音',
                        breed: [
                            {
                                src: 'https://img.youpin.mi-img.com/miio_album_pics/29f38ca158038c4e8f0d38d6575964fc.jpg?_s=ks3',
                                name: '新品推荐'
                            },
                            {
                                src: 'https://img.youpin.mi-img.com/miio_album_pics/7764c6a86edd68d6afa36eac9672c26c.jpg?w=480&h=480',
                                name: '热卖榜单'
                            },
                            {
                                src: 'https://img.youpin.mi-img.com/goods/shop_da172f7a634a00e2fb312f118b2915b1.jpeg?_s=ks3',
                                name: '空调/风扇'
                            },
                            {
                                src: 'https://img.youpin.mi-img.com/goods/shop_840f9feb5a539092a0401041960056f8.jpeg?_s=ks3',
                                name: '清洁电器'
                            },
                            {
                                src: 'https://img.youpin.mi-img.com/miio_album_pics/c46601dec679ba1c37e1f7b59f297294.jpg?_s=ks3',
                                name: '洗衣机'
                            },
                            {
                                src: 'https://img.youpin.mi-img.com/goods/shop_988f6e0a59bb82f10391368db740148e.jpeg?_s=ks3',
                                name: '冰箱'
                            },
                            {
                                src: 'https://img.youpin.mi-img.com/miio_album_pics/220845172aaf8671a2dc93687f4ef4ae.jpg?w=480&h=480',
                                name: '生活电器'
                            },
                            {
                                src: 'https://img.youpin.mi-img.com/miio_album_pics/eb2187bd5ac82480f12ec20ce3eba0c4.jpg?_s=ks3',
                                name: '厨房大电'
                            },
                            {
                                src: 'https://img.youpin.mi-img.com/miio_album_pics/d2f916f8f1bd503e95a6a3e010045d64.png?_s=ks3',
                                name: '厨房小电'
                            },
                            {
                                src: 'https://img.youpin.mi-img.com/miio_album_pics/4bcc94815c711e46c6ff3bea7fc294f1.jpg?_s=ks3',
                                name: '卫浴电器'
                            }
                        ]
                    }
                ]],
                items: [
                    {
                        url: 'https://img.youpin.mi-img.com/youpinoper/16380af153c3e2c3fd470ee4f26c6c27.jpg?id=&w=1080&h=450',
                        href: "https://m.xiaomiyoupin.com/w/mifansday?_rt=weex&pageid=2344"
                    }, {
                        url: 'https://img.youpin.mi-img.com/youpinoper/5ee053001716d3b9c82e7cf624b49120.jpg?id=&w=1080&h=450',
                        href: "https://m.xiaomiyoupin.com/w/mifansday?_rt=weex&pageid=2344"
                    }, {
                        url: "https://img.youpin.mi-img.com/youpinoper/efdd3ab46d7296709396d716a567bc13.jpg?id=&w=1080&h=450",
                        href: "https://m.xiaomiyoupin.com/w/mifansday?_rt=weex&pageid=2344"
                    }, {
                        url: 'https://img.youpin.mi-img.com/youpinoper/16380af153c3e2c3fd470ee4f26c6c27.jpg?id=&w=1080&h=450',
                        href: "https://m.xiaomiyoupin.com/w/mifansday?_rt=weex&pageid=2344"
                    }
                ],
                id: null,
                boxs: [
                    {
                        title: '每日新品',
                        src: 'https://img.youpin.mi-img.com/jianyu/3fc26de3e9c91dba0b470ae0dfd668d1.png?w=126&h=126'
                    }, {
                        title: '小米众筹',
                        src: 'https://img.youpin.mi-img.com/jianyu/0301aee7e1d9d33c8b6db6481c0aea74.png?w=126&h=126'
                    }, {
                        title: '限时抢购',
                        src: 'https://img.youpin.mi-img.com/jianyu/994c5e95f79a7874a73e6935832bb0e4.png?w=126&h=126'
                    }, {
                        title: '热销榜单',
                        src: 'https://img.youpin.mi-img.com/jianyu/e3a7c62f0546d492017e09e3e5d5e3ea.png?w=126&h=126'
                    }, {
                        title: '小米自营',
                        src: 'https://img.youpin.mi-img.com/jianyu/f232f1640b3bb2b47e32d82da35d5a04.png?w=126&h=126'
                    }
                ],
                options: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    loop: true,
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                }
            }
        },
        methods: {
            mouseenter(id) {
                this.id = id;
            },
            out() {
                this.id = null
            }
        }
    }
</script>

<style module lang="scss">
    .content {
        width: 1080px;
        margin: 6px auto 0;
        height: 358px;
        overflow: hidden;
        @include flex(row);
        /*类目部分*/
        .category {
            height: 358px;
            @include flex(row);
            /*左侧类目*/
            .nav {
                width: 221px;
                z-index: 3;
                padding: 10px 0;
                background-color: #845f3f;
                height: 100%;

                li {
                    font-size: 14px;
                    color: #fff;
                    padding: 0 30px;
                    height: 37px;
                    line-height: 37px;
                    -webkit-transition: all .2s ease;
                    -o-transition: all .2s ease;
                    transition: all .2s ease;
                    text-align: left;
                    cursor: pointer;

                    > span {
                        margin: 0 4px;
                    }

                    > span:hover {
                        color: #e4af82;
                    }
                }

                li:hover {
                    color: #f1ede9;
                    background-color: #684b34;
                }


            }

            /*右侧商品详情*/
            .detail {
                height: 358px;
                background-color: #fff;
                z-index: 3;
                padding: 20px 30px;
                box-sizing: border-box;
                overflow-y: auto;
                width: 859px;
                border-top: 1px solid #ccc;
                border-bottom: 1px solid #ccc;

                .detailgroup {
                    h4 {
                        color: #333;
                        font-size: 14px;
                    }

                    ul {
                        @include flex(row);

                        .item {
                            width: 195px;
                            height: 40px;
                            line-height: 40px;
                            margin: 3px 0 30px;
                            display: inline-block;
                            box-sizing: border-box;
                            vertical-align: middle;

                            img {
                                width: 40px;
                                height: 40px;
                                margin: 0 10px 0 10px;
                                vertical-align: middle;

                            }

                            span {
                                font-size: 14px;
                                color: #666;
                                vertical-align: middle;

                            }
                        }
                    }

                }
            }
        }

        /*轮播图部分*/
        .slider {
            width: 859px;

            img {
                width: 860px;
                height: 358px;
            }
        }
    }

    /*五宫格*/
    .box {
        width: 1080px;
        margin: 50px auto 0;
        @include flex(row);
        justify-content: space-between;
        border-bottom: 1px solid #e7e7e7;
        margin-bottom: 40px;

        .wrap {
            width: 130px;
            cursor: pointer;
            text-align: center;

            img {
                height: 80px;
                width: 80px;
                display: inline-block;
            }

            p {

                color: #999;
                height: 50px;
                line-height: 50px;
                font-size: 14px;
            }
        }
    }

</style>
