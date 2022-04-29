import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

import 'normalize.css'

import '@/permission' // permission control

import {
  Button,
  Tabbar,
  TabbarItem,
  Tab,
  Tabs,
  List,
  Cell,
  CellGroup,
  Collapse,
  CollapseItem,
  Icon,
  Progress,
  ConfigProvider,
  Loading,
  NavBar,
  Grid,
  GridItem,
  RadioGroup,
  Radio,
  Swipe,
  SwipeItem
} from 'vant'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(Button)
app.use(Tabbar)
app.use(TabbarItem)
app.use(Tab)
app.use(Tabs)
app.use(List)
app.use(Cell)
app.use(Collapse)
app.use(CollapseItem)
app.use(Icon)
app.use(Progress)
app.use(ConfigProvider)
app.use(Loading)
app.use(NavBar)
app.use(CellGroup)
app.use(Grid)
app.use(GridItem)
app.use(Radio)
app.use(RadioGroup)
app.use(Swipe)
app.use(SwipeItem)
app.mount('#app')
