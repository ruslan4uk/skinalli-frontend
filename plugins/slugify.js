import Vue from 'vue'
import Translate from 'cyrillic-to-translit-js'

Vue.use(Translate)

export default ({ app }) => {
    app.Translate = new Translate()
}