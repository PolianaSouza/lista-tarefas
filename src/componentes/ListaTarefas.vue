<template>
    <div class="q-mt-md">
    <q-table
      title="Tarefas"
      :rows="lista"
      :columns="columns"
      row-key="name"
      no-data-label="Não tem tarefas adicionadas"
    >
        <template v-slot:body-cell-concluir="props">
        <q-td :props="props">
          <q-btn 
            class="glossy"
            color="teal-9"
            icon="task_alt"
            size="sm"
            @click="deletarTarefa(props.row.key)"
        />
        </q-td>
      </template>

    </q-table>
  </div>
  
</template>

<script>
import {useQuasar} from 'quasar'

export default {
    name: 'ListaTarefas',
    props: ['lista', 'deletar'],
    data(){
        return {
            columns: [{
                name: 'tarefa',
                label: 'Tarefa',
                align: 'left',
                field: row => row.text,               
                sortable: true
            },
            {
                name: 'prioridade',
                label: 'Prioridade',
                align: 'left',
                field: row => row.prioridade,
                sortable: true 
            },
            {
                name: 'concluir',
                label: 'Concluir',
                align: 'left',
                field: row => row.key,
            }],
            selected: [],
            $q: useQuasar(),                     
        }
    },
    methods: {
        deletarTarefa(key){
            this.deletar(key)
            this.$q.notify({
                message: 'Tarefa concluída!',
                icon: 'task',
                position: 'center',
                timeout: 300,
                color: 'teal-8',
            })
        }
    }

}
</script>
