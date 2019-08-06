<template>
    <v-app>
        <VTNavbar/>
        
        <v-content>

            <VTLeftNavigation v-if="authenticated"/>

            <nuxt/>

        </v-content>

        <VTFooter/>
    </v-app>
</template>

<script>
import VTLeftNavigation from '@/layouts/partials/VTLeftNavigation'
import VTNavbar from '@/layouts/partials/VTNavbar'
import VTFooter from '@/layouts/partials/VTFooter'
export default {
    components: {
        VTNavbar,
        VTFooter,
        VTLeftNavigation,
    },
}
</script>

<style scoped>

</style>