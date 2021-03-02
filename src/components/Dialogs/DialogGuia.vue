<template>
    <v-dialog v-model="showDialog" max-width="900">
        <img src="@/assets/img/piramide/piramide.png" alt="Guía pirámide">
    </v-dialog>
</template>

<script>
    export default {
        name: 'DialogGuia',
        props: [
            'active'
        ],
        computed: {
            showDialog: {
                get() {
                    return this.active;
                },
                set(newValue) {
                    this.$emit('update:active', newValue);
                }
            }
        },
        methods: {}
    }
</script>

<style lang="scss">
</style>