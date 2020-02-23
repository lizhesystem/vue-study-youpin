<!--公共面板组件-->
<template>
    <section :class="[panelStyle,cname]">
        <h4>{{ title }} <span>{{ sub }}</span></h4>
        <slot></slot>
    </section>
</template>

<script>
    export default {
        name: 'Panel',
        props: {
            title: {
                type: String,
                default: ""

            },
            sub: {
                type: String,
                default: ""
            },
            cname: {
                tyep: String,
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
    @import "../../assets/styles/element";

    .panel {
        @include panel;
    }

</style>
