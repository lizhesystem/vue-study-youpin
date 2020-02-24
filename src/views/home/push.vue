<template>
    <panel title="专属推荐">
        <section class="content">
            <div class="item">
                <img src="https://img.youpin.mi-img.com/800_pic/8f9b44cbc64a497098814c3063fd9548.png@base@tag=imgScale&F=webp"
                     alt="">

                <h4>适配主流桶装水规格，一触快速...</h4>
                <dl>
                    <dt>特价</dt>
                    <dd>小浪自动上水器</dd>
                    <dd>9.9<span>起</span></dd>
                </dl>
            </div>
            <div class="item">
                <img src="https://img.youpin.mi-img.com/800_pic/8f9b44cbc64a497098814c3063fd9548.png@base@tag=imgScale&F=webp"
                     alt="">

                <h4>适配主流桶装水规格，一触快速...</h4>
                <dl>
                    <dt>特价</dt>
                    <dd>小浪自动上水器</dd>
                    <dd>9.9<span>起</span></dd>
                </dl>
            </div>
            <div class="item">
                <img src="https://img.youpin.mi-img.com/800_pic/8f9b44cbc64a497098814c3063fd9548.png@base@tag=imgScale&F=webp"
                     alt="">

                <h4>适配主流桶装水规格，一触快速...</h4>
                <dl>
                    <dt>特价</dt>
                    <dd>小浪自动上水器</dd>
                    <dd>9.9<span>起</span></dd>
                </dl>
            </div>
            <div class="item">
                <img src="https://img.youpin.mi-img.com/800_pic/8f9b44cbc64a497098814c3063fd9548.png@base@tag=imgScale&F=webp"
                     alt="">

                <h4>适配主流桶装水规格，一触快速...</h4>
                <dl>
                    <dt>特价</dt>
                    <dd>小浪自动上水器</dd>
                    <dd>9.9<span>起</span></dd>
                </dl>
            </div>
            <div class="item">
                <img src="https://img.youpin.mi-img.com/800_pic/8f9b44cbc64a497098814c3063fd9548.png@base@tag=imgScale&F=webp"
                     alt="">

                <h4>适配主流桶装水规格，一触快速...</h4>
                <dl>
                    <dt>特价</dt>
                    <dd>小浪自动上水器</dd>
                    <dd>9.9<span>起</span></dd>
                </dl>
            </div>
            <div class="item">
                <img src="https://img.youpin.mi-img.com/800_pic/8f9b44cbc64a497098814c3063fd9548.png@base@tag=imgScale&F=webp"
                     alt="">

                <h4>适配主流桶装水规格，一触快速...</h4>
                <dl>
                    <dt>特价</dt>
                    <dd>小浪自动上水器</dd>
                    <dd>9.9<span>起</span></dd>
                </dl>
            </div>
            <div class="item">
                <img src="https://img.youpin.mi-img.com/800_pic/8f9b44cbc64a497098814c3063fd9548.png@base@tag=imgScale&F=webp"
                     alt="">

                <h4>适配主流桶装水规格，一触快速...</h4>
                <dl>
                    <dt>特价</dt>
                    <dd>小浪自动上水器</dd>
                    <dd>9.9<span>起</span></dd>
                </dl>
            </div>
            <div class="item">
                <img src="https://img.youpin.mi-img.com/800_pic/8f9b44cbc64a497098814c3063fd9548.png@base@tag=imgScale&F=webp"
                     alt="">

                <h4>适配主流桶装水规格，一触快速...</h4>
                <dl>
                    <dt>特价</dt>
                    <dd>小浪自动上水器</dd>
                    <dd>9.9<span>起</span></dd>
                </dl>
            </div>
            <div class="item">
                <img src="https://img.youpin.mi-img.com/800_pic/8f9b44cbc64a497098814c3063fd9548.png@base@tag=imgScale&F=webp"
                     alt="">

                <h4>适配主流桶装水规格，一触快速...</h4>
                <dl>
                    <dt>特价</dt>
                    <dd>小浪自动上水器</dd>
                    <dd>9.9<span>起</span></dd>
                </dl>
            </div>
            <div class="item">
                <img src="https://img.youpin.mi-img.com/800_pic/8f9b44cbc64a497098814c3063fd9548.png@base@tag=imgScale&F=webp"
                     alt="">

                <h4>适配主流桶装水规格，一触快速...</h4>
                <dl>
                    <dt>特价</dt>
                    <dd>小浪自动上水器</dd>
                    <dd>9.9<span>起</span></dd>
                </dl>
            </div>
            <div class="item">
                <img src="https://img.youpin.mi-img.com/800_pic/8f9b44cbc64a497098814c3063fd9548.png@base@tag=imgScale&F=webp"
                     alt="">

                <h4>适配主流桶装水规格，一触快速...</h4>
                <dl>
                    <dt>特价</dt>
                    <dd>小浪自动上水器</dd>
                    <dd>9.9<span>起</span></dd>
                </dl>
            </div>

        </section>
    </panel>
</template>

<script>
    import Panel from "../core/Panel";

    export default {
        name: 'pus',
        components: {Panel},
        data() {
            return {}
        }
    }
</script>

<style scoped lang="scss">
    .content {
        @include flex(row);
        margin-top: 20px;
        .item {
            width: 265px;
            background: #fff;
            text-align: center;
            margin-bottom: 5px;
            border: 1px solid #e7e7e7;
            transition: all .4s;
            margin-right: 5px;
            img {
                width: 125px;
                height: 125px;
                margin-top: 45px;
            }

            h4 {
                color: #845f3f;
                font-size: 16px;
                @include ellipsis;
                width: 100%;
                height: 20px;
                line-height: 20px;
            }

            dl {

                dt {
                    background-color: rgb(217, 107, 108);
                    height: 20px;
                    padding: 2px 0;
                    margin: 35px auto 10px;
                    width: 40px;
                    color: #fff;
                    font-size: 14px;
                    line-height: 18px;
                    border-radius: 2px;

                }

                dd {
                    color: #333;
                    margin-top: 10px;
                    font-size: 18px;
                    line-height: 22px;
                    height: 22px;
                }

                dd:last-child {
                    color: #a92112;

                    > span {
                        font-size: 13px;
                    }
                }

                dd:last-child:before {
                    content: "¥";
                    font-size: 13px;
                    margin-right: 5px;
                }

            }
        }
        .item:nth-child(4n){
            margin-right: 0;
        }
        .item:hover {

            box-shadow: 0 2px 20px rgba(0, 0, 0, .1);
            transform: translate3d(0, -2px, 0);

        }
    }
</style>
