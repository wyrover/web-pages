<style lang="sass">
    @import "../../sass/reset.scss";
    @import "index.scss";
    .index {
        color: #0000AA;
    }
</style>

<template>
    <div class="index">
        below is a component hello
        <hello></hello>
        <hello></hello>
        <button @click="addAsync">click add async module</button>
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
        },
        methods: {
            addAsync: function () {
                require.ensure([], () => {
                    let a = require('../../module/async')
                    this.msg = a.name()
                }, 'async')
            }
        }
    }
</script>
