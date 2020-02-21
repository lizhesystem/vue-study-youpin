<template>
    <header>
        <aside>
            <div class="content">
                <div class="item">
                    <span>注册&nbsp;</span>
                    <span>登录&nbsp;</span>
                </div>
                <span></span>
                <div class="item">
                    <span>帮助中心</span>
                </div>
                <span></span>
                <div class="item">
                    <span class="m-icons"></span>
                    <span>下载APP</span>
                </div>
                <span></span>
                <div class="item"
                     v-on:mouseover="mouseOver"
                     v-on:mouseout="mouseLeave">
                    <span>资质证照 / 协议规则</span>
                    <span class="d-icons"></span>
                    <div :class="['nav',active,'animated fadeIn']">
                        <ul>
                            <li>资质证照</li>
                            <li>协议规则</li>
                        </ul>
                    </div>
                </div>
            </div>
        </aside>
    </header>
</template>

<script>
    export default {
        name: 't-header',
        data() {
            return {
                active: 'hide',
            }
        },
        methods: {
            mouseOver() {
                this.active = 'show';
            },
            mouseLeave() {
                this.active = 'hide';
            }
        }
    }
</script>

<style scoped lang="scss">
    header {
        /*position: fixed;*/
        /*top: 0;*/
        /*left: 0;*/
        /*right: 0;*/
        /*z-index: 100;*/
        width: 100%;
        font-size: 14px;
        color: #e7e7e7;
        height: 48px;
        line-height: 48px;
        background: #333;

        aside {
            width: $style-width;
            margin: 0 auto;


            .content {
                @include flex(row);
                justify-content: flex-end;
                align-items: center;

                .item {
                    span {
                        cursor: pointer;

                        &:hover {
                            color: #fff;
                        }
                    }

                    &:nth-child(5) {
                        padding-left: 22px;
                        position: relative;

                        .m-icons {
                            background-image: url(https://shop.io.mi-img.com/static/h5/static3/media/yp-icons.2bf57ccf.png);
                            background-position: 0 -1016px;
                            width: 30px;
                            height: 30px;
                            display: inline-block;
                            position: absolute;
                            top: 8px;
                            left: -10px;
                        }

                    }

                    &:nth-child(7) {
                        position: relative;

                        .d-icons {
                            background-image: url(https://shop.io.mi-img.com/static/h5/static3/media/yp-icons.2bf57ccf.png);
                            background-position: 0 -1662px;
                            display: inline-block;
                            width: 30px;
                            height: 30px;
                            position: absolute;
                            top: 9px;
                        }

                        .nav {
                            height: 70px;
                            width: 160px;
                            background: #fff;
                            position: absolute;
                            right: -23px;
                            box-shadow: 0 3px 28px rgba(0, 0, 0, .1);
                            /*display: none;*/
                            li {
                                height: 35px;
                                line-height: 35px;
                                padding: 0 10px;
                                font-size: 14px;
                                color: #845f3f;
                                text-align: center;
                                cursor: pointer;

                            }

                            li:hover {
                                background: #845f3f;
                                color: #fff;
                            }
                        }
                    }

                    /*这种hover方式实现没有动画效果*/
                    /*&:nth-child(7):hover{*/
                    /*    .nav{*/
                    /*        display: block;*/
                    /*    }*/
                    /*}*/


                }

                > span {
                    margin: 0 16px;
                    height: 16px;
                    border-right: 1px solid #e7e7e7;
                    font-style: normal;
                    border-color: #666;
                }
            }
        }
    }


</style>

<style scoped lang="scss">

</style>
