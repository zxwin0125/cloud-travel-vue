<template>
  <div class="pubStr">
    <!-- 本页页头 -->
    <div id="menu">
      <div id="logo" class="animate"></div>
    </div>
    <header id="header">
      <h1>Share your strategy.<br /><span>分享攻略 记录生活</span></h1>
      <br />
    </header>
    <div id="contentContainer">
      <h2 class="grey-large">Have A Nice Day :)</h2>
      <!-- 设置攻略头图 -->
      <el-row>
        <el-col :span="16" :offset="4">
          <el-upload
            ref="upload"
            action=""
            accept="image/jpeg,image/gif,image/png"
            :show-file-list="false"
            :before-upload="beforeUpload"
            :on-change="handlePictureCardPreview"
            :auto-upload="false"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon">
              设置攻略头图
              <span style="font-size: 16px; color: #ccc"
                >(图片建议选择尺寸大于1680px的高清大图)</span
              >
            </i>
          </el-upload>
        </el-col>
      </el-row>
      <el-form
        ref="strategyForm"
        :model="strategyForm"
        enctype="multipart/form-data"
      >
        <!-- 输入标题 图片-->
        <el-row>
          <el-col :span="16" :offset="4">
            <!-- <i class="el-icon-edit"></i> -->
            <el-input
              class="title"
              v-model="strategyForm.title"
              placeholder="请输入攻略标题"
              maxlength="40"
              minlength="1"
              show-word-limit
            ></el-input>
          </el-col>
        </el-row>

        <!-- 攻略内容 -->
        <el-row>
          <el-col :span="16" :offset="4">
            <div class="AddEditor">
                  <quill-editor
                class="editor"
                v-model="strategyForm.content"
                ref="myQuillEditor"
                :options="editorOption"
                @blur="onEditorBlur($event)"
                @focus="onEditorFocus($event)"
                @change="onEditorChange($event)"
              >
                       </quill-editor
              >
            </div>
          </el-col>
        </el-row>
        <!-- 发布与取消按钮 -->
        <el-row>
          <el-col :span="5" :offset="7">
            <p style="text-align: center">
              <a class="btn cancel" href=""><strong>取消发布</strong></a>
            </p>
          </el-col>
          <el-col :span="5">
            <p style="text-align: center">
              <a
                class="btn ensure"
                href=""
                @click.prevent="submit('strategyForm')"
                ><strong>确认发布</strong></a
              >
            </p>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
import { publishStrategy } from "@/api/getData.js";
import { quillEditor } from "vue-quill-editor";

export default {
  name: "Strategy_add",
  components: {
    quillEditor,
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    },
    userInfo() {
      return this.$store.getters.user_info;
    },
  },
  data() {
    return {
      imageUrl: "",
      strategyForm: {
        title: "",
        content: "",
      },
      param: {}, // 文件内容
      editorOption: {
        // 富文本配置项
        placeholder: "从这里开始记录你的旅程...",
        theme: "snow",
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"], // 加粗、倾斜、下划线、删除线
            [{ header: 1 }, { header: 2 }], // 标题一、标题二
            [{ list: "ordered" }, { list: "bullet" }], // 列表
            [{ indent: "-1" }, { indent: "+1" }], // 缩进
            [{ color: [] }, { background: [] }], // 字体颜色，字体背景颜色
            [{ font: [] }], //字体
            ["image"],
          ],
        },
      },
    };
  },
  methods: {
    // 当上传文件组件submit之前触发执行
    beforeUpload(file) {
      console.log("准备上传。。。。");
      // 准备表单上传需要的参数对象
      this.param = new FormData();
      this.param.append("strategy_file", file);
      return false;
    },

    handlePictureCardPreview(file, fileList) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },

    onEditorReady(editor) {},
    onEditorBlur() {},
    onEditorFocus() {},
    onEditorChange() {},

    submit(formName) {
      if (!this.imageUrl) {
        this.$alert("您还没有上传游记头图", "", {
          confirmButtonText: "确定",
        });
      } else if (!this.strategyForm.title) {
        this.$alert("攻略标题不能为空", "", {
          confirmButtonText: "确定",
        });
      } else if (!this.strategyForm.content) {
        this.$alert("攻略内容不能为空", "", {
          confirmButtonText: "确定",
        });
      } else {
        this.$refs.upload.submit();
        this.param.append("strategy_img", this.imageUrl);
        this.param.append("strategy_title", this.strategyForm.title);
        this.param.append("strategy_content", this.strategyForm.content);
        this.param.append("user_id", this.userInfo.user_id);
        this.param.append("user_name", this.userInfo.user_name);

        let config = {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        };
        // 调用接口，执行上传所有数据的操作
        publishStrategy(this.param, config).then((res) => {
          if (res) {
            this.$message.success("发布成功！");
            this.$refs[formName].resetFields();
            this.$router.push("/strategy");
          }
        });
      }
    },
  },
};
</script>
<style  scoped>
/* 头图 */
.avatar {
  width: 100%;
  height: 500px;
  display: block;
}
#menu {
  width: 600px;
  padding-top: 20px;
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -300px;
  z-index: 3;
  text-align: center;
  -webkit-animation: fadeInDown 0.6s 0.5s ease both;
  -moz-animation: fadeInDown 0.6s 0.5s ease both;
  -ms-animation: fadeInDown 0.6s 0.5s ease both;
  -o-animation: fadeInDown 0.6s 0.5s ease both;
  animation: fadeInDown 0.6s 0.5s ease both;
}

#header {
  display: table;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: #4bb8d2;
  background: url(../../assets/img/Strategy/str_header.jpg) no-repeat;
  background-size: 100% 100%;
  z-index: 1;
}
#logo {
  width: 235px;
  height: 79px;
  position: absolute;
  left: 50%;
  margin-left: -117.5px;
  background: url(../../assets/img/Strategy/str_logo.png) no-repeat;
  background-size: 100%;
  text-indent: 100%;
  white-space: nowrap;
  overflow: hidden;
}
#contentContainer {
  width: 100%;
  margin-top: 100vh;
  background: #fff;
  position: relative;
  z-index: 3;
  -webkit-box-shadow: rgba(35, 35, 50, 0.8) 0px 0px 11px -2px;
  -moz-box-shadow: rgba(35, 35, 50, 0.8) 0px 0px 11px -2px;
  box-shadow: rgba(35, 35, 50, 0.8) 0px 0px 11px -2px;
}

#header h1 span {
  color: #363636;
  font-size: 0.3em;
}
#header h1 {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  -webkit-animation: fadeInUp 0.6s 0.5s ease both;
  -moz-animation: fadeInUp 0.6s 0.5s ease both;
  -ms-animation: fadeInUp 0.6s 0.5s ease both;
  -o-animation: fadeInUp 0.6s 0.5s ease both;
  animation: fadeInUp 0.6s 0.5s ease both;
}
h1 {
  color: #fff;
  font-size: 5em;
  font-weight: bold;
  line-height: 0.8em;
}
#header h2 {
  display: table-cell;
}
#contentContainer h2 {
  padding-top: 75px;
  padding-bottom: 50px;
}
#contentContainer h2.grey-large {
  font-size: 5.2em;
  color: #ccc;
}
#contentContainer h2 {
  text-align: center;
  padding: 12px 20px;
  font-size: 3em;
  font-weight: bold;
}
/* 按钮 */
a.btn {
  margin-top: 20px !important;
  margin-bottom: 20px !important;
  font-weight: 700;
  text-decoration: none;
  /* background: #8cff32;
  border: 3px solid #8cff32; */
  padding: 20px;
  box-shadow: 4px 4px 0px 0px #cccccc;
  letter-spacing: 3px;
  text-transform: uppercase;
  transition: all 300ms ease-in-out;
  position: relative;
  display: inline-block;
  left: 0;
  top: 0;
}
a.btn:hover {
  transform: translateX(4px);
  transform: translatey(4px);
  box-shadow: none;
  /* color: #8cff32; */
}
a.btn.cancel {
  background: #5cb3cc;
  border: 3px solid #5cb3cc;
}
a.btn.cancel:hover {
  color: #5cb3cc;
  background-color: black;
  border: 3px solid black;
}
a.btn.ensure {
  background: #8cff32;
  border: 3px solid #8cff32;
}
a.btn.ensure:hover {
  color: #8cff32;
  background-color: black;
  border: 3px solid black;
}
.post_content a {
  text-decoration: none;
  border-bottom: 3px solid #acff33;
  transition: color 0.4s;
}
strong {
  font-weight: 800;
}
a {
  color: black;
}
</style>
<style>
/* 内容标题背景大图 */
.title input {
  border: none;
  outline: medium;
  margin-bottom: 10px;
}
.title input.el-input__inner {
  border-bottom: 3px solid #5cb3cc;
  font-size: 30px;
  line-height: 50px;
  height: 50px;
  margin-top: 50px;
  border-radius: 0px;
  color: #5cb3cc;
  padding-left: 40px;
}

/* 攻略头图 */
.avatar-uploader .el-upload {
  border-bottom: 3px dashed #5cb3cc;
  /* border-radius: 0px; */
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 100%;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 30px;
  color: #5cb3cc;
  width: 100%;
  height: 50px;
  /* line-height: 200px; */
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: left;
}
.avatar {
  width: 100%;
  height: 50px;
  display: block;
}
.avatar-uploader .el-upload:hover {
  border: 3px solid #5cb3cc;
}
/* 富文本框样式 */
.AddEditor .ql-toolbar.ql-snow {
  border: none !important;
  margin-top: 20px;
  color: #5cb3cc;
}
.AddEditor .ql-cotainer.ql-snow {
  border: none !important;
}
.AddEditor .ql-container.ql-snow {
  /* border: 1px #5cb3cc solid !important; */
  border: none !important;
  border-top: 2px solid #5cb3cc !important;
  height: 280px;
  font-size: 16px;
}
/* div{
  background:#D0D0D0;
} */
</style>

