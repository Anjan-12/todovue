<template>
  <div class="container mt-5">
    <h2 class="text-center mb-4">My To-Do App</h2>

    <!-- Input form -->
    <div class="row justify-content-center mb-4">
      <div class="col-lg-6 col-md-8 col-sm-10">
        <div class="input-group">
          <input v-model="task" type="text" placeholder="Enter task" class="form-control">
          <div class="input-group-append">
            <button @click="submitTask" class="btn btn-warning">Submit</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Task table -->
    <table class="table table-striped table-hover">
      <thead>
      <tr>
        <th scope="col">Task</th>
        <th scope="col">Status</th>
        <th scope="col" class="text-center">Edit</th>
        <th scope="col" class="text-center">Delete</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(task, index) in tasks" :key="index">
        <td>
          <span :class="{'finished':task.status==='finished'}">{{ task.name }}</span>
        </td>
        <td>
          <span @click="changeStatus(index)" class="pointer"
                :class="{'text-danger':task.status==='To-Do',
                     'text-warning':task.status==='In-progress',
                     'text-success':task.status==='Finished'}">
            {{ task.status }}
          </span>
        </td>
        <td>
          <div class="text-center" @click="editTask(index)">
            <i class="fas fa-pen"></i>
          </div>
        </td>
        <td>
          <div class="text-center" @click="deleteTask(index)">
            <i class="fas fa-trash"></i>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      task: '',
      editedTask: null,
      availableStatus: ['To-Do', 'In-progress', 'finished'],
      tasks: [
        {
          name: 'Go and Eat MoMo.',
          status: 'To-Do'
        },
        {
          name: 'Wash clothes.',
          status: 'In-progress'
        },
        {
          name: 'Buy Ice-cream',
          status: 'Finished'
        }
      ]
    }
  },
  methods: {
    submitTask() {
      if (this.task.length === 0) return;

      if (this.editedTask === null) {
        this.tasks.push({
          name: this.task,
          status: "To-Do"
        });
      } else {
        this.tasks[this.editedTask].name = this.task;
        this.editedTask = null;
      }
      this.task = '';
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    editTask(index) {
      this.task = this.tasks[index].name;
      this.editedTask = index;
    },
    changeStatus(index){
      let newIndex = this.availableStatus.indexOf(this.tasks[index].status);
       if(++newIndex>2) newIndex =0;
       this.tasks[index].status = this.availableStatus[newIndex];
    }
  }
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
.finished{
  text-decoration: line-through;
}
</style>