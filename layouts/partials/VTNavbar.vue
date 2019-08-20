<template>
    <div>
        <v-navigation-drawer width="350px" app clipped v-if="$route.name === 'catalog' || $route.name === 'catalog-subcatalog'">
            <div class="px-4">
                <v-list>
                    <div class="subtitle-2 font-weight-bold mb-1 mt-2">Сортировка</div>
                    <v-row>
                        <v-col cols="6">
                            <v-btn exact
                                block class="caption font-weight-bold"
                                :to="{ query: { sort: 'asc' } }">Сначала новые</v-btn>
                        </v-col>
                        <v-col cols="6">
                            <v-btn exact
                                block class="caption font-weight-bold"
                                :to="{ query: { sort: 'desc' } }">Сначала старые</v-btn>
                        </v-col>
                    </v-row>
                </v-list>
                <v-divider></v-divider>
                <v-list>
                    <div class="subtitle-2 font-weight-bold mb-1 mt-2">Цвет</div>
                    <v-btn-toggle v-model="filter.color" multiple class="mb-2 custom-color row justify-between">
                        <div class="col-auto">
                            <v-btn small :class="item + ' darken-1 mr-2 mb-2'" :value="item" 
                                exact
                                :to="{ query: { color: item } }"
                                v-for="item in ['white','black','red','pink','purple','deep-purple','indigo','blue','teal','green','lime','orange','brown']" :key="item">
                                <v-icon>done</v-icon>
                            </v-btn>
                        </div>
                    </v-btn-toggle>
                </v-list>
                <v-divider></v-divider>
                <v-list>
                    <div class="subtitle-2 font-weight-bold mb-1 mt-2">Категория</div>
                    <v-select :items="['category-1', 'category-2']" label="Выберите категорию"></v-select>
                </v-list>
                <v-divider></v-divider>
                <v-btn class="caption font-weight-bold mb-5 mt-5" block dark color="indigo">Сбросить фильтр</v-btn>

            </div>
        </v-navigation-drawer>

        <v-app-bar app clipped-left dark color="primary" elevate-on-scroll>
            <v-app-bar-nav-icon v-if="authenticated"></v-app-bar-nav-icon>

            <v-toolbar-title @click="$router.push('/')">SKINALI</v-toolbar-title>

            <v-toolbar-items class="ml-12">
                <v-btn text :to="{ name: 'catalog' }">Каталог изображений</v-btn>
                <v-btn text exact :to="{ name: 'catalog-subcatalog', params: { subcatalog: 'sub' } }">Услуги дизайнера</v-btn>
                <v-btn text>Контакты</v-btn>
            </v-toolbar-items>

            <v-spacer></v-spacer>

            <v-btn text right icon>
                <v-icon>favorite_border</v-icon> 
            </v-btn>

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

    </div>
</template>

<script>
export default {
    data() {
        return {
            filter: {
                color: []
            }
        }
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

.custom-color
    & .v-btn 
        opacity: 1
    & i 
        display: none
    & .v-item--active
        opacity: 0.8
        & i 
            display: block
</style>