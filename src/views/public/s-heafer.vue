<template>
    <nav>
        <ul>
            <li class="m-logo left"></li>
            <li>
                <span>限时抢购</span>
            </li>
            <li :class="['search','right',border]">
                <span class="s-icon"></span>
                <input type="text" v-myfocus @focus="focus" @blur="blur" value placeholder="搜一搜">
                <span class="g-icon"></span>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 's-heafer',
        data() {
            return {
                border: ''
            }
        },
        methods: {
            focus() {
                this.border = 'inp_border'
            },
            blur() {
                this.border = '';
            }
        }
    }
</script>

<style scoped lang="scss">
    nav {
        background: #fff;
        width: 1120px;
        height: 50px;
        margin: 20px auto 0;

        ul {
            .m-logo {
                background: url("https://shop.io.mi-img.com/static/h5/static3/media/logo@2x.cf8cc6a8.png") 50% no-repeat;
                width: 123px;
                height: 51px;
                background-size: 100%;
            }

            li {
                display: inline-block;

                &:nth-child(2) {
                    color: #666;
                    cursor: pointer;
                    font-size: 18px;
                    height: 51px;
                    line-height: 57px;
                    margin-left: 140px;
                }

            }

            .search {
                height: 32px;
                width: 280px;
                margin-top: 9px;
                margin-right: 36px;
                line-height: 32px;
                border-bottom: 1px solid #e7e7e7;
                transition: all .2s;
                position: relative;

                .s-icon {
                    background-image: url("https://shop.io.mi-img.com/static/h5/static3/media/yp-icons.2bf57ccf.png");
                    width: 30px;
                    height: 30px;
                    background-position: 0 -1458px;
                    display: inline-block;
                    position: absolute;
                    cursor: pointer;
                }

                .s-icon:hover {
                    background-position: 0 -1424px;
                }

                input {
                    outline: 0;
                    border: none;
                    width: 200px;
                    font-size: 14px;
                    margin-left: 35px;
                }

                .g-icon {
                    background-image: url("https://shop.io.mi-img.com/static/h5/static3/media/yp-icons.2bf57ccf.png");
                    width: 30px;
                    height: 30px;
                    background-position: 0 -948px;
                    position: absolute;
                    display: inline-block;
                    right: -45px;
                    top: 10px;
                }

            }

            .inp_border {
                border-bottom: 1px solid #333 !important;
            }

        }


    }

</style>
