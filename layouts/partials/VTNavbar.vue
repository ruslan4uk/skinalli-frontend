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
                                :to="filters({sort: 'asc'})">Сначала новые</v-btn>
                        </v-col>
                        <v-col cols="6">
                            <v-btn exact
                                block class="caption font-weight-bold"
                                :to="filters({sort: 'desc'})">Сначала старые</v-btn>
                        </v-col>
                    </v-row>
                </v-list>
                <v-divider></v-divider>
                <v-list>
                    <div class="subtitle-2 font-weight-bold mb-1 mt-2">Цвет</div>
                    <v-btn-toggle v-model="filter.color" multiple class="mb-2 custom-color">
                        <div class="">
                            <v-btn small :class="'white darken-1 mr-2 mb-2'" value=""
                                exact
                                :to="{ query: { sort: $route.query.sort } }">
                                <v-icon>done</v-icon>
                            </v-btn><v-btn small :class="item + ' darken-1 mr-2 mb-2'" :value="item" 
                                exact
                                :to="filters({color: item})"
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
                <v-btn 
                    class="caption font-weight-bold mb-5 mt-5" 
                    block dark color="indigo"
                    :to="{ query: {} }">Сбросить фильтр</v-btn>

            </div>
        </v-navigation-drawer>

        <v-app-bar app clipped-left dark color="primary" elevate-on-scroll>
            <v-app-bar-nav-icon v-if="authenticated"></v-app-bar-nav-icon>

            <v-toolbar-title @click="$router.push('/')">SKINALI</v-toolbar-title>

            <v-toolbar-items class="ml-12">
                <v-btn text :to="{ name: 'catalog' }">
                    <v-icon class="mr-sm-2">dashboard</v-icon>
                    <span class="d-none d-sm-flex">Каталог изображений</span>
                </v-btn>
                <v-btn text exact :to="{ name: 'catalog-subcatalog', params: { subcatalog: 'sub' } }">
                    <v-icon class="mr-sm-2">sentiment_satisfied_alt</v-icon>
                    <span class="d-none d-sm-flex">Услуги дизайнера</span>
                </v-btn>
                <v-btn text>
                    <v-icon class="mr-sm-2">contacts</v-icon>
                    <span class="d-none d-sm-flex">Контакты</span>
                </v-btn>
            </v-toolbar-items>

            <v-spacer></v-spacer>

            <v-btn text right icon>
                <v-icon>favorite_border</v-icon> 
                <span class="favorite-count">{{ favorite.count.length }}</span>
            </v-btn>

            <v-btn text :to="{ path: '/auth/login' }" class="d-none d-sm-flex" v-if="!authenticated">
                <v-icon left>assignment</v-icon>Вход
            </v-btn>

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
    watchQuery: true,

    data() {
        return {
            filter: {
                color: [],
                sort: ''
            },
            favorite: {
                count: ''
            }
        }
    },
    methods: {
        logout() {
            this.$auth.logout()
        },

        filters(obj) {
            let current = {
                color: this.$route.query.color,
                sort: this.$route.query.sort
            }

            if (obj.color) current.color = obj.color
            if (obj.sort) current.sort = obj.sort

            return { query: current }
        }
    },

    created () {
        if(process.browser) {
            this.favorite.count = JSON.parse(localStorage.getItem('app.favorite') || '[]');
        }
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

.favorite-count
    position: absolute
    bottom: -0.25rem
    right: 0.5rem
    color: blue
    padding: 0.125rem
    border-radius: 50% 50%
    background-color: #fff
    font-size: 0.625rem
</style>