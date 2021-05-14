<template>

    <div>
        <h2 class="text-center">Lista de Alunos</h2>
            <table class="table">
            <thead>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Email</th>
                <th>RA</th>
                <th>CPF</th>
                <th>Ações</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="student in students" :key="student.id">
                <td>{{ student.id }}</td>
                <td>{{ student.name }}</td>
                <td>{{ student.email }}</td>
                <td>{{ student.ra }}</td>
                <td>{{ student.cpf }}</td>
                <td>
                    <div class="btn-group" role="group">
                        <router-link :to="{name: 'edit', params: { id: student.id }}" class="btn btn-success">Editar</router-link>
                    </div>
                        <button class="btn btn-danger" @click="showModal(student.id)">Excluir</button>
                </td>
            </tr>
            </tbody>
        </table>
        <div>
   <div>
  <div>
    <b-modal ref="my-modal" hide-footer title="Alerta">
      <div class="d-block text-center">
        <h3>Deseja confirmar a exclusão?</h3>
      </div>
      <b-button name='sim' class="mt-3"  variant="outline-danger" block @click="deleteStudent()">Sim</b-button>
      <b-button class="mt-2" variant="outline-warning" block @click="toggleModal">Não</b-button>
    </b-modal>
  </div>
</div>
</div>
    </div>
</template>

 
<script>
let btn;
    export default {
        data() {
            return {
                dialog: false,
                students: []
            }
        },
        created() {
            this.axios
                .get('http://localhost:8000/api/students/')
                .then(response => {
                    this.students = response.data;
                });
        },
        methods: {
            showModal(id) {
                btn = id;
            this.$refs['my-modal'].show();
            },
            deleteStudent() { 
                this.axios
                    .delete(`http://localhost:8000/api/students/${btn}`)
                    .then(response => {
                        let i = this.students.map(data => data.btn).indexOf(btn);
                        console.log(i)
                        this.$refs['my-modal'].hide();
                        window.location.reload();
                    });
            },
            toggleModal() {
                this.$refs['my-modal'].toggle('#toggle-btn')
            }
        }
    }
</script>