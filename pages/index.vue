<template>
    <div>
        <section class="jumbotron">
            <v-container>
                <v-row align="center">
                    <v-col cols="12" md="7" lg="7">
                        <v-card class="transparent white--text" outlined tile>
                            <h1 class="display-2 font-weight-bold pb-4">Качественные изображения для скинали</h1>
                            <p>В вашем распоряжении более 1500 изображений, стоковых видеоклипов и музыкальных треков без лицензионных платежей (роялти).</p>
                        </v-card>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col cols="12" md="5" lg="4">
                        <v-card class="pa-5 px-md-12 py-md-6">
                            <div class="text-center title mb-3">Индивидуальный подход</div>
                            <p class="caption text-center">Наши дизайнеры всегда готовы разработать для Вас уникальный дизайн</p>
                            <v-form>
                                <v-text-field label="Ваше имя" class="my-0"></v-text-field>
                                <v-text-field label="Ваша почта" class="my-0"></v-text-field>
                                <v-btn block color="primary" class="mb-2" type="submit">Отправить</v-btn>
                            </v-form>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </section>
        <v-container class="py-10">
            <v-row>
                <v-col cols="12">
                    <h3 class="headline font-weight-bold mb-4">Популярные подборки</h3>
                    <v-row>
                        <v-col cols="12" md="7">
                            <v-card :to="{ name: 'catalog' }"
                                hover dark class="pa-10 text-center d-flex align-center" 
                                :img="require('../assets/images/main/jumbotron2.jpg')"
                                height="25.5rem">
                                <v-card-text>
                                    <div class="title white--text text-center">Подборка за последний месяц</div>
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col cols="12" md="5" class="mt-0 pt-0">
                            <v-row>
                                <v-col cols="12">
                                    <v-card 
                                        hover dark class="pa-10 text-center d-flex align-center" 
                                        :img="require('../assets/images/main/jumbotron1.jpg')"
                                        height="12rem">
                                        <v-card-text>
                                            <div class="title white--text text-center">Подборка за июль</div>
                                        </v-card-text>
                                    </v-card>
                                </v-col>

                                <v-col cols="12" class="mb-0 pb-0">
                                    <v-card 
                                        hover dark class="pa-10 text-center d-flex align-center" 
                                        :img="require('../assets/images/main/jumbotron.jpg')"
                                        height="12rem">
                                        <v-card-text>
                                            <div class="title white--text text-center">Подборка за июнь</div>
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>

        <v-container>
            <v-row>
                <v-col cols="12"><h3 class="headline font-weight-bold mb-2">Категории</h3></v-col>
                <v-col cols="12" sm="6" lg="4" v-for="(item, index) in initCategory" :key="index">
                    <v-card flat to="/" class="transparent custom-card">
                        <v-img src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg" class="mb-2">
                            <div class="fill-height bottom-gradient"></div>
                        </v-img>
                        <div class="subtitle-1 black--text font-weight-bold px-4">{{ item.name }}</div>
                        <p class="caption grey--text text--darken-2 px-4 pb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, 
                            blanditiis nesciunt repellat saepe officiis aliquid culpa aperiam 
                            architecto ad et est atque ipsum totam autem debitis vitae consectetur? 
                            Temporibus, quia.</p>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    // computed: {
    //     ...mapGetters({
    //         category: 'init/category'
    //     })
    // },
}
</script>

<style scoped lang="sass">
.jumbotron 
    background-image: url(../assets/images/main/jumbotron2.jpg)
    background-size: cover 
    background-position: center cneter
    padding: 7vh 0
    color: #fff

.custom-card
    & .v-image .bottom-gradient
        transition: all ease 0.5s
    &:hover .v-image .bottom-gradient
        background: rgba(0,0,0,0.25)
</style>