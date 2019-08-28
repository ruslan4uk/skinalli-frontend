<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <h1 class="title font-weight-bold">{{ data.name }}</h1>
                <v-breadcrumbs :items="items" class="pl-0 pt-1 pb-1"></v-breadcrumbs>
            </v-col>

            <v-col cols="12">
                <v-card>
                    <v-img :src="data.image_path"></v-img>
                    <v-card-actions class="py-1">
                        <div class="pa-4 d-flex">
                            <div class="mr-4"><strong>Цена: </strong>800 руб</div>
                            <div class="mr-4"><strong>Разрешение: </strong>1200 х 1200 см</div>
                            <div class="mr-4"><strong>Размер: </strong>13 мб</div>
                        </div>
                        <v-spacer></v-spacer>

                        <v-tooltip top>
                            <template v-slot:activator="{ on }">
                                <v-btn icon small v-on="on">
                                    <v-icon>favorite</v-icon>
                                </v-btn>
                            </template>
                            <span>В избранное</span>
                        </v-tooltip>

                        <v-btn class="primary px-6 mx-4">Купить</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

            <v-col cols="12">
                <h1 class="title font-weight-bold">Тэги</h1>
                 <v-chip-group column active-class="primary--text">
                    <v-chip v-for="(tag, i) in data.photo_tag" :key="i" :to="{ name: 'catalog' }">
                        {{ tag.name }}
                    </v-chip>
                </v-chip-group>
            </v-col>

            <v-col cols="12">
                <h1 class="title font-weight-bold mb-2">Категории</h1>
                <v-row>
                    <v-col cols="6" md="3" v-for="n in 20" :key="n" class="py-1">
                        Категория - {{ n }}
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        {{ data }}
    </v-container>
</template>

<script>
export default {
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
        return store.$axios.get('/images/' + params.slug).then(res => {
            store.dispatch('init/setLoader', false)   
            return {
                data: res.data.data
            }
        })
    },
}
</script>

<style lang="scss" scoped>

</style>