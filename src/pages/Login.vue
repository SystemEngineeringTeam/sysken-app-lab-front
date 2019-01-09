<template>
  <main class="container-fluid my-5 mx-auto">
    <div id="login" class="col-12">
      <div class="card mx-auto w-50">
        <div class="card-body">
          <form>
            <div class="form-group row">
              <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
              <div class="col-sm-10">
                <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
              </div>
            </div>
            <div class="form-group row">
              <label for="inputEmail3" class="col-sm-2 col-form-label">password</label>
              <div class="col-sm-10">
                <input type="password" class="form-control" id="inputPassword3" placeholder="password">
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-10 offset-sm-2">
                <button type="submit" class="btn btn-primary">Sign in</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <nav aria-label="Page navigation example text-right">
      <ul class="pagination text-right">
        <li class="page-item">
          <router-link to="/user" class="page-link">
            <span aria-hidden="true">«</span>
            <span class="sr-only">Previous</span>
          </router-link>
        </li>
        <li class="page-item">
          <router-link to="/user" class="page-link">userページへ</router-link>
        </li>
        <li class="page-item">
          <router-link to="/lab" class="page-link">labページへ</router-link>
        </li>
        <li class="page-item">
          <router-link to="/lab" class="page-link">
            <span aria-hidden="true">»</span>
            <span class="sr-only">Next</span>
          </router-link>
        </li>
      </ul>
    </nav>

  </main>
</template>

<script>
  export default {
    el: "#login",
    name: 'login',
    data() {
      return {}
    },
    /*created() {
      /*axios.get(GET_URL)
        .then(response => {
          this.json_data = response;
          this.name = response.data.name;
          this.age = response.data.age;
          this.likes = response.data.likes;
        }).catch(err => {
        console.log('err:', err);
      });


      axios.get(GET_URL)
        .then(response => {
          console.log('body:', response.data);     // response body.
        }).catch(err => {
        console.log('err:', err);
      });

      json_data = require(GET_URL)
    }*/
  };
</script>

<style>

</style>
