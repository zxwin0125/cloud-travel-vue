<template>
  <section class="dataViewList">
    <el-container>
      <div class="card-group">
        <div class="card border-right">
          <div class="card-body">
            <div class="card-item">
              <div class="item_left">
                <div class="item_left_head">
                  <h2>236</h2>
                  <span>+18.33%</span>
                </div>
                <h6>New Clients</h6>
              </div>
              <div class="item_right">
                <span class="item_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-user-plus"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="8.5" cy="7" r="4"></circle>
                    <line x1="20" y1="8" x2="20" y2="14"></line>
                    <line x1="23" y1="11" x2="17" y2="11"></line>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="card border-right">
          <div class="card-body">
            <div class="card-item">
              <div class="item_left">
                <div class="item_left_head">
                  <h2>128</h2>
                  <span>+23.92%</span>
                </div>
                <h6>New Clients</h6>
              </div>
              <div class="item_right">
                <span class="item_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-dollar-sign"
                  >
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path
                      d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="card border-right">
          <div class="card-body">
            <div class="card-item">
              <div class="item_left">
                <div class="item_left_head">
                  <h2>428</h2>
                  <span>+48.12%</span>
                </div>
                <h6>New Clients</h6>
              </div>
              <div class="item_right">
                <span class="item_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-file-plus"
                  >
                    <path
                      d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                    ></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="12" y1="18" x2="12" y2="12"></line>
                    <line x1="9" y1="15" x2="15" y2="15"></line>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <div class="card-item">
              <div class="item_left">
                <div class="item_left_head">
                  <h2>864</h2>
                </div>
                <h6>Projects</h6>
              </div>
              <div class="item_right">
                <span class="item_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-globe"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path
                      d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-container>
  </section>
</template>

<script>
export default {
  name: "DataViewList",
};
</script>

<style lang="scss" scoped>
.el-container {
  margin-top: 30px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: 70px;
  margin-left: 70px;
  .card-group {
    display: flex;
    margin-bottom: 30px;
    width: 100%;
    .card {
      position: relative;
      display: flex;
      flex-direction: column;
      min-width: 0;
      background-color: #fff;
      background-clip: border-box;
      border: 0 solid #e9ecef;
      border-radius: 0.25rem;
      margin-bottom: 15px;
      box-shadow: 0 3px 9px 0 rgba(169, 184, 200, 0.15);
      width: 25%;
      .card-body {
        flex: 1 1 auto;
        padding: 25px;
        .card-item {
          display: flex !important;
          .item_left_head {
            display: flex !important;
            flex-direction: row;
            align-items: center;
            h2 {
              margin-bottom: 0.25rem !important;
              color: #1c2d41 !important;
              font-weight: 500;
              font-size: 30px;
              font-family: inherit;
              line-height: 1.1;
              margin-top: 20px;
            }
            span {
              padding-right: 0.5rem;
              padding-left: 0.5rem;
              border-radius: 10rem;
              background-color: #5f76e8 !important;
              margin-left: 0.5rem !important;
              color: #fff !important;
              font-size: 12px;
              font-weight: 500;
              text-align: center;
              vertical-align: baseline;
              white-space: nowrap;
              margin-top: 20px;
            }
          }
          h6 {
            color: #9eabc0 !important;
            width: 100% !important;
            margin-bottom: 0 !important;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-weight: 400 !important;
            font-size: 12px;
            margin-top: 10px;
            font-family: inherit;
            line-height: 1.1;
          }
          .item_right {
            margin-left: auto !important;
            margin-top: 1.5rem !important;
            .item_icon {
              color: #9eabc0 !important;
              opacity: 0.7;
              svg {
                overflow: hidden;
              }
            }
          }
        }
      }
    }
    .border-right {
      border-right: 1px solid #edf2f9 !important;
    }
  }
}
</style>