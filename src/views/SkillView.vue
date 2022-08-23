<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <p>HTML</p>
          <div class="progress">
            <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 90%"
              aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <div class="col-6">
          <p>CSS</p>
          <div class="progress">
            <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 80%"
              aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <p>JavaScript</p>
          <div class="progress">
            <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 40%"
              aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <div class="col-6">
          <p>Figma</p>
          <div class="progress">
            <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 90%"
              aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <p>Bootstrap</p>
          <div class="progress">
            <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 85%"
              aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <div class="col-6">
          <p>Laravel</p>
          <div class="progress">
            <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 85%"
              aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  @media (min-width: 1024px) {
    .about {
      /* min-height: 100vh; */
      width: 72rem;
      /* display: flex; */
      /* align-items: center; */
    }

    p {
      font-size: 18px;
      /* font-weight: bolder; */
    }

    .container {
      margin-top: 100px;
    }

    .row {
      margin-bottom: 40px;
    }
  }
</style>