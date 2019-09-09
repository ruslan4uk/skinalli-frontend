<template>
    <div>
        <v-container fluid class="">
            <v-row>
                <v-col cols="12" class="mb-0 pb-0">
                    <h3 class="headline font-weight-bold">Каталог изображений</h3>
                    <p class="body-2 grey--text pb-0 mb-0">Найдено более 1 000 изображений</p>
                    <v-breadcrumbs :items="items" class="pl-0 pt-2 pb-2"></v-breadcrumbs>
                </v-col>
                <v-col cols="12" md="6" lg="6" v-if="data.data" v-for="(item, i) in data.data" :key="i" class="">
                    <v-card :to="{ name: 'images-slug', params: { slug: item.slug } }">
                        <v-img 
                            :src="item.image_path"
                            aspect-ratio="3.5"></v-img>
                        <v-card-actions class="py-1">
                            <div class="body-2">{{ item.name }}</div>

                            <v-spacer></v-spacer>
                            
                            <v-tooltip top>
                                <template v-slot:activator="{ on }">
                                    <v-btn icon small v-on="on" @click.prevent="toFavorite(item.id)">
                                        <v-icon
                                            :color="favorite.find(x => x.id === item.id) ? 'red' : ''">favorite</v-icon>
                                    </v-btn>
                                </template>
                                <span>В избранное</span>
                            </v-tooltip>

                            <v-tooltip top>
                                <template v-slot:activator="{ on }">
                                    <v-btn icon small v-on="on">
                                        <v-icon>add_shopping_cart</v-icon>
                                    </v-btn>
                                </template>
                                <span>Купить</span>
                            </v-tooltip>

                            
                        </v-card-actions>
                    </v-card>
                </v-col>
                <v-col cols="12">
                    <div class="c-pagination">
                        <v-pagination
                            v-model="pagination.current"
                            :length="pagination.total"
                            @input="getData()"
                        ></v-pagination>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    watchQuery: ['color', 'page', 'sort', 'month', 'year'],

    data() {
        return {
            items: [
                {
                    text: 'Dashboard',
                    disabled: false,
                    href: 'breadcrumbs_dashboard',
                },
                {
                    text: 'Link 1',
                    disabled: false,
                    href: 'breadcrumbs_link_1',
                },
                {
                    text: 'Link 2',
                    disabled: true,
                    href: 'breadcrumbs_link_2',
                },
            ],
        }
    },

    asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) { 
        store.dispatch('init/setLoader', true)      
        return store.$axios.get('/catalog', {
                params: {
                    page: query.page,
                    subcatalog: params.subcatalog,
                    color: query.color,
                    sort: query.sort,
                    year: query.year,
                    month: query.month,

                }
            }).then(res => {
                store.dispatch('init/setLoader', false) 
                return { 
                    data: res.data.data,
                    pagination: {
                        total: res.data.data.last_page,
                        current: res.data.data.current_page
                    }
                }
            })        
    },

    methods: {
        getData() {
            this.$router.push({ name: this.$route.name, query: { 
                color: this.$route.query.color,
                sort: this.$route.query.sort,
                page: this.pagination.current,
                year: this.$route.query.year,
                month: this.$route.query.month,
            } })
        },
        toFavorite(id) {
            this.$store.dispatch('localStorage/setFavorite', {id: id})
        },

    },
}
</script>

<style lang="sass" scoped>
.c-pagination
    max-width: 30rem
    margin: 0 auto
</style>