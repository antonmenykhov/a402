import Vue from 'vue'
import { Button, Carousel, CarouselItem, Collapse, CollapseItem,
     Radio, Switch, InputNumber, Input, Select, 
     RadioGroup, RadioButton, Form, FormItem , Option} from 'element-ui'
import lang from 'element-ui/lib/locale/lang/ru-RU'
import locale from 'element-ui/lib/locale'

locale.use(lang)

Vue.use(Button)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Collapse)
Vue.use(Radio)
Vue.use(Switch)
Vue.use(InputNumber)
Vue.use(Input)
Vue.use(Select)
Vue.use(CollapseItem)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Option)
