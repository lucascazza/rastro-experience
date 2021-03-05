<template>
    <div class="loading" :class="{'fade': addClass}">
        <img src="@/assets/img/loading.gif" alt="Loading">
        <p>Cargando...</p>
    </div>
</template>

<script>
    export default {
        name: "Loading",
        data() {
            return {
                addClass: false
            }
        },
        mounted(){
            setTimeout(() => {
                this.addClass = true                
            }, 2000);
        }
    }
</script>

<style lang="scss">
    .loading {
        z-index: 9;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1em;
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(35, 35, 35, 1);
        transition: .5s;

        &.fade{
            opacity: 0;
        }

        p{
            font-size: 1.25rem;
            font-family: sprintsansregular;
        }
    }
</style>