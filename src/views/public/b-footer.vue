<template>
    <footer class="content">
        <div class="inner">
            <aside>
                <p>©xiaomiyoupin.com 苏B2-20180351 苏ICP备18025642号-1 <span></span>logo苏公网安备 32010502010244号</p>
                <p>企业名称：有品信息科技有限公司 关于我们 入驻有品</p>
                <p>小米有品平台运营主体变更公告</p>
                <p>南京市建邺区白龙江东街8号3栋9层</p>
            </aside>
            <div class="r-img">
                <img src="https://shop.io.mi-img.com/static/h5/static3/media/f-logo.c6285587.png" alt="">
            </div>
        </div>
    </footer>

</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>

<style scoped lang="scss">
    .content {
        width: 100%;
        height: 136px;
        border-top: 1px solid #e7e7e7;

        .inner {
            width: $style-width;
            height: 90px;
            margin: 45px auto 0;
            background: #fff url("https://shop.io.mi-img.com/static/h5/static3/media/logo@2x.cf8cc6a8.png") no-repeat 0 top;
            background-size: 120px 45px;
            @include flex(row);
            justify-content: flex-end;
            aside{
                font-size: 12px;
                line-height: 23px;
                color: #666;
                position: relative;
                margin-right: 40px;
                >p:first-child{
                    span{
                        background: url("https://shop.io.mi-img.com/static/h5/static3/media/record-icon.d0289dc0.png") no-repeat 0 center;
                        background-size: 15px 15px;
                        width: 15px;
                        height: 15px;
                        display: inline-block;
                        line-height: 15px;
                        margin-left: 3px;
                    }
                }

            }
            .r-img{
                width: 100px;
                height: 36px;
            }
        }
    }
</style>
