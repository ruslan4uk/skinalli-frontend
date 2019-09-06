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
                </v-card>
            </v-col>

            <v-col cols="12">
                <v-row>
                    <v-col cols="12" md="3">
                        <h2 class="title font-weight-bold">Тэги</h2>
                        <v-chip-group column active-class="primary--text">
                            <v-chip v-for="(tag, i) in data.photo_tag" :key="i" :to="{ name: 'catalog' }">
                                {{ tag.name }}
                            </v-chip>
                        </v-chip-group>
                    </v-col>
                    <v-col cols="12" md="9">
                        <v-card class="px-6 py-3 body-2">
                            <h2 class="title font-weight-bold mb-4">Как купить</h2>
                            <p>
                                На указанный e-mail будет отправлено подтверждение о приеме заказа и способах оплаты. 
                                Если подтверждение не пришло, проверьте правильность указания почтового ящика и папку СПАМ. 
                                Срок исполнения заказа - 5 мин. с момента оплаты.
                            </p>

                            <p>
                                В этом изображении мы можем заменить цвет, дорисовать до нужного размера, 
                                сделать эскиз под Ваш размер. Напишите нам свои пожелания и мы реализуем 
                                их для Вас. Посмотреть прайс на услуги.
                            </p>
                            <v-form>
                                <v-text-field
                                    class="compact-form"
                                    v-model="form.name"
                                    label="Ваше имя"
                                    required
                                    outlined
                                    clearable
                                    prepend-inner-icon="account_circle"
                                ></v-text-field>

                                <v-text-field
                                    class="compact-form"
                                    v-model="form.email"
                                    label="Ваш Email"
                                    required
                                    outlined
                                    clearable
                                    prepend-inner-icon="mail"
                                ></v-text-field>

                                <v-btn color="primary" class="mb-4">Купить</v-btn>
                            </v-form>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>

            <v-col cols="12">
                <h1 class="title font-weight-bold mb-2">Категории</h1>
                <v-row>
                    <v-col cols="6" md="3" v-for="(item, index) in initCategory" :key="index" class="py-1">
                        <nuxt-link :to="{ name: 'catalog-subcatalog', params: { subcatalog: item.slug }}">{{ item.name }}</nuxt-link>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            form: {
                email: '',
                name: '',
            },
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

    computed: {
        ...mapGetters({
            favorite: 'localStorage/favorite'
        })
    },

    methods: {
        toFavorite(id) {
            this.$store.dispatch('localStorage/setFavorite', {id: id})
        },
    },
}
</script>

<style lang="sass" scoped>
.compact-form 
    transform: scale(0.825)
    transform-origin: left
    width: 121%
</style>