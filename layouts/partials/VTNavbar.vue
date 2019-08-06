<template>
    <div>
        <v-app-bar dark color="primary" elevate-on-scroll>
            <v-app-bar-nav-icon v-if="authenticated"></v-app-bar-nav-icon>

            <v-toolbar-title @click="$router.push('/')">SKINALI</v-toolbar-title>

            <v-toolbar-items class="ml-12">
                <v-btn text>Каталог изображений</v-btn>
                <v-btn text>Услуги дизайнера</v-btn>
                <v-btn text>Контакты</v-btn>
            </v-toolbar-items>

            <v-spacer></v-spacer>
            <!-- <v-btn icon>
                <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn> -->

            <v-btn text :to="{ path: '/auth/login' }" v-if="!authenticated">Вход</v-btn>

            <v-menu offset-y v-if="authenticated">
                <template v-slot:activator="{ on }">
                    <v-btn v-on="on" text>
                        {{ user.name }}
                        <v-icon>expand_more</v-icon>
                    </v-btn>
                </template>

                <v-list dense nav>
                    <v-subheader>{{ user.name }}</v-subheader>
                    <v-list-item-group>
                        <v-list-item>
                            <v-list-item-title>Панель</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title @click.prevent="logout()">Выход</v-list-item-title>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-menu>
        </v-app-bar>

        <VTSearch/>
        
    </div>
</template>

<script>
import VTSearch from '@/layouts/partials/VTSearch'
export default {
    components: {
        VTSearch,
    },
     methods: {
        logout() {
            this.$auth.logout()
        },
    },
}
</script>

<style scoped lang="sass">
.v-toolbar__title
    cursor: pointer
</style>