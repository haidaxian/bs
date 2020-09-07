<template>
    <div id="app">
        <keep-alive include="Home">
            <router-view v-if="isRouterAlive"/>
        </keep-alive>
    </div>
</template>

<script>
    export default {
        name: 'App',
        provide() {
            return {
                reload: this.reload
            }
        },
        data() {
            return {
                isRouterAlive: true
            }
        },
        created() {
        },
        methods: {
            reload() {
                this.isRouterAlive = false
                this.$nextTick(function () {
                    this.isRouterAlive = true
                })
            }
        }
    }
</script>

<style scoped>
    #app {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
</style>
