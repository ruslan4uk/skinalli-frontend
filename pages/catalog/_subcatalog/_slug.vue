<template>
    <section class="product mb-4">
        <b-container>
            <b-row>
                <b-col cols="12">
                    <h3 class="mb-1">Заголовок</h3>
                </b-col>
                <b-col cols="12">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Главная</a></li>
                            <li class="breadcrumb-item"><a href="#">Каталог</a></li>
                            <li class="breadcrumb-item"><a href="#">Подкаталог</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Изображение - Заголовок</li>
                        </ol>
                    </nav>
                </b-col>
                <b-col cols="12 mb-3">
                    <img src="~/assets/images/main/jumbotron.jpg" alt="">
                </b-col>
                <b-col cols="12 mb-4">
                    <h6>Категории: <a href="">Абстракция</a>, <a href="">Цветные</a></h6>
                </b-col>
                <b-col cols="12 mb-4">
                    <h4 class="mb-3">Связанные ключевые слова</h4>
                    <div class="tags">
                        <a href="" class="tags__item mr-2 mb-2" v-for="item in [1,2,3,4,5,6,7,8,9,10]" :key="item">Тэг {{ item }}</a>
                    </div>
                </b-col>
            </b-row>

            <b-row class="mb-4">
                <b-col cols="12" md="4">
                    <div class="product-favorite p-3">
                        <h5 class="mb-2">Стоимость: 800руб</h5>
                        <p class="mb-0">Разрешение: 23622х3543</p>
                        <p class="mb-0">Размер в миллиметрах: 4000х600</p>
                        <p class="mb-3">Объем: 88,7 mb</p>
                        <div class="d-flex">
                            <div class="w-100 mr-3"><b-button class="d-block w-100">Примерить</b-button></div>
                            <div class="w-100"><b-button class="d-block w-100">В избранное</b-button></div>
                        </div>
                    </div>
                </b-col>
                <b-col cols="12" md="8">
                    <b-form>
                        <b-row>
                            <b-col cols="6">
                                <b-form-group>
                                    <label class="sr-only" for="inline-form-input-name">Ваш город</label>
                                    <b-input
                                        id="inline-form-input-name"
                                        class="mb-2 mr-sm-2 mb-sm-0"
                                        placeholder="Ваш город"
                                    ></b-input>
                                </b-form-group>
                            </b-col>
                            <b-col cols="6">
                                <b-form-group>
                                    <label class="sr-only" for="inline-form-input-name">Ваша почта</label>
                                    <b-input
                                        id="inline-form-input-name"
                                        class="mb-2 mr-sm-2 mb-sm-0"
                                        placeholder="Ваша почта"
                                    ></b-input>
                                </b-form-group>
                            </b-col>
                            <b-col cols="12">
                                <b-form-group>
                                    <b-button  block variant="success">Купить изображение</b-button>
                                </b-form-group>
                            </b-col>
                        </b-row>
                    </b-form>
                    <div class="border p-3">
                        <p>* - поля, обязательные для заполнения;</p>
                        <p class="m-0">На указанный e-mail будет отправлено подтверждение о приеме заказа и 
                            способах оплаты. Если подтверждение не пришло, проверьте правильность 
                            указания почтового ящика и папку СПАМ.</p>
                    </div>
                </b-col>
            </b-row>

            <b-row>
                <b-col cols="12"><h4 class="mb-3">Похожие изображения</h4></b-col>
                <b-col cols="12" md="4" lg="3" class="mb-3" v-for="item in [1,2,3,4,5,6,7,8,9,10,11,12]" :key="item">
                    <nuxt-link :to="{ path: '/catalog/subcatalog/slug' }">
                        <img src="~/assets/images/main/jumbotron.jpg" alt="">
                    </nuxt-link>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang="sass">
.tags 
    &__item
        padding: 0.25rem 0.875rem
        border-radius: 25px
        border: 1px solid #cccccc
        display: inline-block
        color: #777777
        transition: all ease 0.3s
        font-size: 0.875rem
        &:hover
            text-decoration: none
            background-color: #f0f0f0

.product-favorite
    border: 1px solid #cccccc
</style>