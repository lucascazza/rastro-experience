<template>
    <v-dialog v-model="showDialog" max-width="450">
        <div class="dialog-content">
            <h3 v-if="title">{{title}}</h3>
            <h4 v-if="content">{{content}}</h4>
            <slot></slot>
            <v-btn 
                rounded 
                ripple 
                color="yellow" 
                @click="confirmClick" 
                >
                {{confirmText}}
            </v-btn>
        </div>
    </v-dialog>
</template>

<script>
    export default {
        name: 'DialogCode',
        props: [
            'active',
            'title',
            'content',
            'confirmText'
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
        methods: {
            confirmClick() {
                this.showDialog = false;
                this.$emit('confirm');
            }
        }
    }
</script>

<style lang="scss">
.dialog-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    background: #fff;

    h3 {
        font-family: SprintSansRegular;
        font-size: 1.25rem;
        color: #232323;
    }

    h4 {
        font-family: SprintSansMedium;
        font-size: 1.15rem;
        color: #232323;
    }

    .v-btn{
        font-family: SprintSansMedium;
    }

    .input-code {
        &.v-input--is-disabled {
            background-color: #dddddd !important;
        }
    }
}
</style>