<template>
  <q-page padding>
      <q-card style="max-height: 150px">
        <q-img
          src="../assets/space.jpg" id="myImg"
        />
      </q-card>
      <q-card class="q-pa-xs q-ma-lg items-center">
        <div class="q-ma-lg" style="border-radius: 20px">
          <div class="q-ma-sm">
            <h3>Projeto criado para treinar Vue.js e Quasar Framework</h3>
            <p>
              Nesse sistema de lista de tarefas, pude colocar em prática alguns
              dos conhecimentos adquiridos principalmente pelas aulas de Vue.JS
              do
              <a
                href="https://www.udemy.com/course/curso-vuejs-completo/"
                target="_blank"
                > <strong>Matheus Fraga</strong></a
              > na Udemy, de Quasar Framework do canal
              <a
                href="https://www.youtube.com/playlist?list=PLPl81lqbj-4LDCH5nPAHjoaQPDsivSem3"
                target="_blank"
                ><strong>BluuWeb</strong></a
              >
              no Youtube e também de pesquisas na internet.
            </p>
          </div>
          <div class="text-subtitle2 text-center q-pa-lg q-ma-lg" id="autor">by Poliana Souza</div>
        </div>
        <q-card-actions class="absolute-bottom">
          <q-btn
            glossy
            href="https://www.linkedin.com/in/poliana-s-souza/"
            target="_blank"
          >
            Linkedin
          </q-btn>
          <q-btn
            
            glossy
            href="https://github.com/PolianaSouza"
            target="_blank">
            Github
          </q-btn>
        </q-card-actions>
      </q-card>
  </q-page>
</template>

<script>
export default {};
</script>

<style scoped>

h3 {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}

p {
  font-size: 18px;
  text-align: justify;
  font-style: oblique;
}

a {
  color: #4a148c;
  text-decoration: none;
}

#autor {
  font-style: italic;
  font-size: 15px;
}

</style>