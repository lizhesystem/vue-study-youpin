<!--公共面板组件-->
<template>
    <section :class="[panelStyle,cname]">
        <h2>{{ title }}</h2>

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

<style scoped lang="scss">

</style>
