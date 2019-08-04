<template>
    <div>
        <b-navbar toggleable="lg" variant="light">
            <b-navbar-brand to="/">Imageonline</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item :to="{ path: '/catalog' }">Каталог изображений</b-nav-item>
                    <b-nav-item to="/">Услуги дизайнера</b-nav-item>
                    <b-nav-item to="/">Как купить</b-nav-item>
                    <b-nav-item to="/">Контакты</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <nuxt-link class="btn btn-outline-danger mr-2" to="/">Вход</nuxt-link>
                    <nuxt-link class="btn btn-outline-danger" to="/">Регистрация</nuxt-link>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>

        <b-container fluid>
            <b-row>
                <b-col cols="12">
                    <b-input-group class="my-3 search-panel position-relative">
                        <b-form-input type="text" placeholder="Введите для поиска"></b-form-input>
                        <b-input-group-append>
                            <b-button variant="outline-danger"><fa :icon="['fas', 'search']" /></b-button>
                        </b-input-group-append>
                            <b-dropdown class="ml-3" right>
                                <template slot="button-content">
                                    <fa :icon="['fas', 'bars']" class="mr-3" />Категории
                                </template>
                                
                                <b-row class="search-panel-category m-0">
                                    <b-col cols="12" class="m-0 p-0">
                                        <h5 class="mx-4 my-2 search-panel-category__title">Просмотр категорий изображений</h5>
                                    </b-col>
                                    <b-col cols="4" class="m-0 p-0">
                                        <b-dropdown-item href="#" v-for="item in [1,2,3,4,5,6,7,8,9]" :key="item">Категория</b-dropdown-item>
                                    </b-col>
                                    <b-col cols="4" class="m-0 p-0">
                                        <b-dropdown-item href="#" v-for="item in [1,2,3,4,5,6,7,8,9]" :key="item">Категория</b-dropdown-item>
                                    </b-col>
                                    <b-col cols="4" class="m-0 p-0">
                                        <b-dropdown-item href="#" v-for="item in [1,2,3,4,5,6,7,8,9]" :key="item">Категория</b-dropdown-item>
                                    </b-col>
                                </b-row>
                            </b-dropdown>
                    </b-input-group>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="sass">
.search-panel 
    & .dropdown-menu.show
        min-width: 40rem
        box-shadow: 2px 2px 10px 4px rgba(0,0,0,.1)
        border-radius: 0
    & .dropdown-item
        padding-top: 0.375rem
        padding-bottom: 0.375rem
.search-panel-category
    &__title
        font-weight: 600
</style>