<template>
  <div>
    <b-jumbotron class="main-jumbotron">
      <b-container>
        <b-row class="align-items-center">
          <b-col cols="12" md="8">
            <h1 class="header mb-4">Изображения для скинали</h1>
            <p class="lead">
              Предлагаем вашему вниманию большой каталог высококачественных изображений для 
              скинали и пескоструйной обработки.
            </p>
          </b-col>
          <b-col cols="12" md="4">
            <div class="main-jumbotron__order border10">

            </div>
          </b-col>
        </b-row>
      </b-container>
    </b-jumbotron>

    <b-container class="main-popular">
      <b-row>
        <b-col cols="12">
          <h4 class="mb-4">Популярные подборки</h4>
        </b-col>
        <b-col cols="6" md="4" class="mb-4" v-for="item in [1,2,3,4,5,6]" :key="item">
          <a href="" class="d-block mb-1"><img src="https://via.placeholder.com/400x300" alt=""></a>
          <a href="" class="d-block mb-0 main-popular__title">Название подборки</a>
          <p class="main-popular__description">Описание подборки</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="sass">
.main-jumbotron
  background-image: url('../assets/images/main/jumbotron.jpg')
  background-repeat: no-repeat
  background-size: cover
  background-position: bottom
  padding-top: 10vh
  padding-bottom: 10vh
  border-radius: 0
  & * 
    color: #ffffff
  & .lead
    font-weight: 400
  &__order
    background-color: #ffffff
    height: 15rem

.main-popular
  &__title
    color: #000000
    font-weight: 600
    &:hover
      color: #000000
      text-decoration: none
  &__description
    color: #777777
    font-weight: 300
</style>
