<template>
    <div>
        <h3 class="text-center">Editar Aluno</h3>
        <div class="row">
            <div class="col-md-6">
                    <div class="form-group">
                        <label>Nome</label>
                        <input type="text" class="form-control" required v-model="student.name">
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" class="form-control" required v-model="student.email">
                    </div>
                    <div class="form-group">
                        <label>RA</label>
                        <input type="text" class="form-control" required disabled v-model="student.ra">
                    </div>
                    <div class="form-group">
                        <label>CPF</label>
                        <input type="text" class="form-control" required disabled v-model="student.cpf">
                    </div>
                   
                    <button type=""  @click="updateStudent()" class="btn btn-primary">Atualizar</button>
                    <router-link :to="{name: 'home'}" class="btn btn-primary">Voltar</router-link>
            </div>
        </div>
    </div>
</template>
 
<script>
    export default {
        data() {
            return {
                student: {}
            }
        },
        created() {
            this.axios
                .get(`http://localhost:8000/api/students/${this.$route.params.id}`)
                .then((res) => {
                    this.student = res.data;
                });
        },
        methods: {
            updateStudent() {
                

                this.axios
                    .patch(`http://localhost:8000/api/students/${this.$route.params.id}`, this.student)
                    .then((res) => {
                        this.$router.push({ name: 'home' });
                    });
            }
        }
    }
</script>