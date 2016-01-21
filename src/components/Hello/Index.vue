<style>
    .hello {
        color: red;
    }
</style>
<template>
    <div class="hello">{{ msg }} i am hello compnent</div>
</template>
<script>
    export default {
        data() {
            msg: 'hello component'
        }
    }
</script>
