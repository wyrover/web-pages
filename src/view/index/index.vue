<style lang="sass">
    @import "index.scss";
</style>

<template>
    <div class="index">
        below is a component hello
        <hello></hello>
        {{ msg }}
        <button @click="addAsync">click add async module </button>
    </div>
</template>

<script type="text/babel">
    import Hello from '../../components/Hello'
    export default {
        name: 'app',
        data() {
            return {
                msg: 'hello component'
            }
        },
        components: {
            Hello
        },
        methods: {
            addAsync: function () {
                require.ensure([], () => {
                    let a = require('../../module/async').default
                    this.msg = a.name()
                }, 'async')
            }
        }
    }
</script>
