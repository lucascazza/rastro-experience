import { mapState } from 'vuex';
export default {
    data() {
        return {
        }
    },
    computed: {
        ...mapState({
            user: state => state.user.data
        }),
    },
    watch: {},
    methods: {
        async nextStep(view) {
            let userUpdate = this.user
            userUpdate.step = userUpdate.step + 1
            try {
                await this.$store.dispatch('user/updateStep', { vm: this, data: userUpdate })
                this.$router.push({ path: view })
            } catch (err) {
                console.log(err);
            }
        }
    }
}