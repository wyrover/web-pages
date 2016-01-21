<style lang="sass">
    @import "../../sass/reset.scss";
    .index {
        color: #0000AA;
    }
</style>

<template>
    <div class="index">
        below is a component hello
        <hello></hello>
        <hello></hello>
    </div>
</template>

<script type="text/babel">
    import Hello from '../../components/Hello'
    export default {
        data() {
            msg: 'hello component'
        },
        components: {
            Hello
        }
    }
</script>
