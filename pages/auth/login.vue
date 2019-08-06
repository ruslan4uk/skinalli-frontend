<template>
    <section class="auth mt-10">
        <v-container justify-center>
            <v-layout justify-center>
                <v-flex sm6 lg4>
                    <v-card class="pa-5 pa-sm-7" >
                        <h2>Авторизация</h2>
                        <v-form ref="form" @submit.prevent="login()">
                            <v-text-field
                                :counter="25"
                                label="Login (Email)"
                                required
                                v-model="form.email"
                                :error-messages="errors.email"
                            ></v-text-field>

                            <v-text-field
                                type="password"
                                :counter="25"
                                label="Password"
                                required
                                v-model="form.password"
                                :error-messages="errors.password"
                            ></v-text-field>

                            <v-btn block color="primary" class="mt-5" type="submit">Войти</v-btn>
                        </v-form>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </section>
</template>

<script>
export default {
    data() {
        return {
            form: {
                email: '',
                password: '',
                remember_me: true,
            },
        }
    },
    methods: {
         login() {                            
             this.$auth.login({ data: this.form }).then(res => {
				this.$router.push({ name: 'admin' })
			});
        }   
    },

}
</script>

<style scoped>

</style>