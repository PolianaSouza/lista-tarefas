<template>
  <q-layout view="lhh LpR lFf">

    <q-header elevated class="bg-purple-10">
        <q-toolbar>
          <q-toolbar-title class="text-center">Lista de Tarefas</q-toolbar-title>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :width="300"
        :breakpoint="400" 
        overlay     
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; q-itemborder-right: 1px solid #ddd">
          <q-list padding>
            <q-item clickable v-ripple exact active-class="my-menu-link" to="/">
              <q-item-section avatar>
                <q-icon name="home" />
              </q-item-section>

              <q-item-section>
                Home
              </q-item-section>
            </q-item>

            <q-item exact clickable v-ripple active-class="my-menu-link" to="/about">
              <q-item-section avatar>
                <q-icon name="info" />
              </q-item-section>

              <q-item-section>
                About
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="../assets/space.jpg" style="height: 150px">
          <div class="absolute-center bg-transparent">
            <div class="text-purple-4-bold" style="font-weight: bold; text-align: center;">Poliana Souza</div>
            <div>@PSDeveloper</div>
          </div>
        </q-img>
      </q-drawer>

      <q-page-container>
        <router-view></router-view>
      </q-page-container>
  
    <!-- <q-footer elevated class="bg-purple-10 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div class="absolute-center"><p class="text-weight-thin">@PSDeveloper</p></div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer> -->

  </q-layout>
</template>

<script>
import { ref } from 'vue'
import Formulario from '../pages/Formulario.vue'

export default {

  components: {
    Formulario,
  },
  setup () {
    const drawer = ref(false)
    
    return {
      drawer,    
      toggleLeftDrawer () {
        drawer.value = !drawer.value
      }
    }
  }
}
</script>


<style scoped>
.my-menu-link{
  color: white;
  background: #4a148c;
}
</style>