<template>
    <div>
        <h3 class="text-center">Cadastrar Aluno</h3>
        <div class="row">
            <div class="col-md-6">
                <form id="meuform" @submit.prevent="addStudent">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" required v-model="student.name">
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" class="form-control" required v-model="student.email">
                    </div>
                    <div class="form-group">
                        <label>RA</label>
                        <input type="text" class="form-control" required v-model="student.ra">
                    </div>
                    <div class="form-group">
                        <label>CPF</label>
                        <input type="text" class="form-control" maxlength= 11 required v-model="student.cpf">
                    </div>
                     
                    <button type=""  class="btn btn-primary">Cadastrar</button>
                    <router-link :to="{name: 'home'}" class="btn btn-primary">Voltar</router-link>
                </form>
            </div>
        </div>
        <div>

    <b-modal ref="my-modal" hide-footer title="Aguarde...">
      <div class="d-block text-center">
         <div class="d-flex justify-content-center mb-3">
    <b-spinner v-if="idpost ===''" label="Loading..."></b-spinner>
    <div class="d-block text-center">
      <h3>{{idpost}}</h3>
    </div>
  </div>
      </div>
    <b-button name='sim' class="mt-3" v-if="idpost !==''"  variant="outline-danger" block @click="redirect()">OK</b-button>
    </b-modal>
  </div>
    </div>
    
</template>
 
<script>

    export default {
        data() {
            return {
                idpost: "",
                student: {}
            }
        },
        methods: {
            
            addStudent() {

                this.$refs['my-modal'].show();
                this.axios
                    .post('http://localhost:8000/api/students', this.student)
                    .then(response => (
                        this.idpost = response.data
                        //this.idpost = "Cadastro "+ response.data['id'] + " realizado com sucesso"
                    ))
                    .catch(err => console.log(err))
                    .finally(() => this.loading = false)
            },
            redirect(){
                this.$refs['my-modal'].hide()
                //this.$router.push({ name: 'home' })
            }
        }
    }
</script>