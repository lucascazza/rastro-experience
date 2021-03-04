<template>
    <v-dialog v-model="showDialog" max-width="450">
        <div class="dialog-content" :class="className">
            <h3>{{title}}</h3>
            <h4>{{content}}</h4>
            <div class="dialog-content__buttons">
                <v-btn
                v-if="cancelText"
                ripple
                text
                color="grey" 
                @click="cancelClick">
                {{cancelText}}
            </v-btn>
            <v-btn 
                rounded 
                ripple 
                color="yellow" 
                @click="confirmClick">
                {{confirmText}}
            </v-btn>
            </div>
        </div>
    </v-dialog>
</template>

<script>
    export default {
        name: 'DialogConfirm',
        props: [
            'active',
            'className',
            'title',
            'content',
            'confirmText',
            'cancelText'
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
            },
            cancelClick() {
                this.showDialog = false;
                this.$emit('cancel');
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

    &.dialog-juegos {

        h3 {
            font-family: EarlyGameboy;
            text-align: center;
            font-size: 1rem;
        }

        h4 {
            font-family: EarlyGameboy;
            text-align: center;
            font-size: .85rem;
            font-weight: 700;
        }

        .v-btn {
            font-family: EarlyGameboy;
        }

        .dialog-content__buttons{
            .v-btn{
                font-size: 10px !important;
                
                @media (min-width: 768px){
                    font-size: .875rem !important;
                }
            }
        }
    }

    &__buttons{
        margin-top: 1rem;
    }
}
</style>