<style>
    .hello {
        color: red;
        background-image: url("hello.png");
    }

    .area {
        width: 100px;
        height: 100px;
        background-image: url("hello1.png");
    }
</style>
<template>
    <div class="hello">{{ msg }} i am hello compnent</div>
    <div class="area"></div>
</template>
<script>
    export default {
        data() {
            msg: 'hello component'
        }
    }
</script>
