<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">Lab Finder</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="/labs">
              研究室一覧
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/users/">
              ユーザ一覧
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/login">
              ログイン
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/signup">
              ユーザ登録
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/lab/add">
              研究室登録
            </a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped></style>
