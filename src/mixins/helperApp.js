import { mapState } from 'vuex';
import DialogConfirm from '@/components/Dialogs/DialogConfirm';
export default {
    data() {
        return {
            dialogLogout: false
        }
    },
    components: {
        'dialog-confirm': DialogConfirm
    },
    computed: {
        ...mapState({
            user: state => state.user.data
        }),
    },
    watch: {},
    methods: {
        async nextStep(view, number) {
            if (number <= this.user.step) {
                this.$router.push({ path: view })
            } else {
                let userUpdate = this.user
                userUpdate.step = userUpdate.step + 1
                try {
                    await this.$store.dispatch('user/updateStep', { vm: this, data: userUpdate })
                    this.$router.push({ path: view })
                } catch (err) {
                    console.log(err);
                }
            }
        },
        async restartExperience() {
            let userUpdate = this.user
            userUpdate.step = 0
            try {
                await this.$store.dispatch('user/updateStep', { vm: this, data: userUpdate })
            } catch (err) {
                console.log(err);
            }
        },
        logout(){
            this.$store.commit('user/clearData');
            window.setTimeout(() => {
                this.$router.push({name: "Login"});
            }, 500);
        }
    }
}