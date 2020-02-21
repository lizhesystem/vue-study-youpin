<!--公共面板组件-->
<template>
    <section :class="[panelStyle,cname]">
        <solt></solt>
    </section>
</template>

<script>
    export default {
        name: 'Panel',
        props: {
            title: {
                type: String,
                default: ""
            }
        },
        data() {
            return {
                panelStyle: 'panel'
            }
        }
    }
</script>

<style module lang="scss">

</style>
