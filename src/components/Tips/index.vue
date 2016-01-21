<template>
    <div class="tips">i am tips {{ tips }}</div>
</template>
<style>
    .tips {
        background-color: #0b97c4;
        color: #fff;
    }
</style>
<script type="text/babel">
    export default {
        data() {
            return {
                tips: 'tips too'
            }
        }
    }
</script>