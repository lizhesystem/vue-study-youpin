<!--众筹-->
<template>
    <panel :class="$style.content" title="小米有品众筹" sub="永远好奇 永远年轻">
        <div class="item">
            <section>
                <img src="https://img.youpin.mi-img.com/shopmain/65e030fff5a2d0c448b1517bc1524668.png?w=800&h=800" alt="">
                <div>
                    <h3>果麦消毒液制造机</h3>
                    <p>99.9%灭活病毒,食用盐加水快速自制,一体化喷头即制即用</p>
                    <h4>299</h4>
                </div>
            </section>
            <footer>
                <h3>10595<span>人支持</span></h3>
                <p>1059</p>
            </footer>
        </div>
        <div class="item">
            <section>
                <img src="" alt="">
                <div>
                    <h3></h3>
                    <p></p>
                    <h4></h4>
                </div>
            </section>
            <footer>
                <h3><span></span></h3>
                <p></p>
            </footer>
        </div>
        <div class="item">
            <section>
                <img src="" alt="">
                <div>
                    <h3></h3>
                    <p></p>
                    <h4></h4>
                </div>
            </section>
            <footer>
                <h3><span></span></h3>
                <p></p>
            </footer>
        </div>
    </panel>
</template>

<script>
    import Panel from "../core/Panel";

    export default {
        components: {Panel},
        data() {
            return {}
        }
    }
</script>

<style module lang="scss">
    .content {
        height: 600px;

    }
</style>
