<template>
  <q-page padding>
    <q-form
      @submit.prevent="onSubmit"
      @reset="onReset"
      ref="myForm"
      class="q-col-gutter-md row"
      
    >
    <div class="col-10 col-sm ">
      <q-input
        v-model="tarefa"
        label="Tarefa"
        hint="Digite sua tarefa"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Insira uma tarefa']"
      />
    </div>

    <div class="col-6">
      <q-select 
        style="max-width: 200px"
        v-model="option" 
        :options="options" 
        label="Prioridade"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Escolha uma prioridade']"
      />
    </div>
      <div class="col-12">
        <q-btn label="Adicionar" type="submit" color="teal-9"  unelevated/>
        <q-btn label="Reset" type="reset" color="teal-10" flat class="q-ml-sm" />
      </div>
    </q-form> 
    <lista-tarefas :lista="tarefas" :deletar="excluir" />
  </q-page>
</template>

<script>
  import {useQuasar} from 'quasar';
  import ListaTarefas from '../components/ListaTarefas.vue'
  

export default {
  components: {
    ListaTarefas,
  },
  data(){
    return {
      tarefa: '',
      tarefas: [],
      $q: useQuasar(),
      myForm: null,
      option: '',
      options: ['Alta', 'Média', 'Baixa']
    }
  },
  methods: {
    onSubmit(){
      this.tarefas.push({
        text: this.tarefa,
        prioridade: this.option,
        key: Date.now()
      });
      // ('Pessoa adicionada!');
      this.$q.notify({
        type: 'positive',
        position: 'top',
        color: 'teal-7',
        timeout: 300,
        message: "Tarefa adicionada!"
      });
      console.log(this.tarefas)
      this.$refs.myForm.resetValidation()  
      this.onReset();   
    },
    onReset(){
      this.tarefa = '',
      this.option = ''
    },
    excluir(key){
      let filtro = this.tarefas.filter((tarefa) => {
        return (tarefa.key !== key)
      })
      return this.tarefas = filtro;
    }

  },
  watch:{
    tarefas: {
      deep: true,
      handler(){
        localStorage.setItem('tasks', JSON.stringify(this.tarefas));
        console.log('salvou...')
      }
    }
  },
  created(){
    const myListTasks = localStorage.getItem('tasks');
    this.tarefas = JSON.parse(myListTasks) || [];
  }
  
  

}
</script>