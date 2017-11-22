<template>
  <div class="box">
    <button @click="abs" class="tools">下载</button>
    <button @click="aba" class="tools">下载word</button>
  <!-- <el-radio-group  class="tools" >
    <el-radio-button label="pdf" @click.native="abs">生成PDF</el-radio-button>
    <el-radio-button label="word">生成Word</el-radio-button>
    <el-radio-button label="excel">导出Excel</el-radio-button>
    <el-radio-button label="close">关闭</el-radio-button>
  </el-radio-group > -->
    <div class="content" id="db">
      <h1>贵州省决策方案</h1>
      <img src="../assets/logo.png"></img>
      <p>4165416541654fdsfsdklmnflksdmnflksdmflkdmflkfmlksd</p>
      <p>4165416541654fdsfsdklmnflksdmnflksdmflkdmflkfmlksd</p>
      <p>4165416541654fdsfsdklmnflksdmnflksdmflkdmflkfmlksd</p>
      <p>4165416541654fdsfsdklmnflksdmnflksdmflkdmflkfmlksd</p>
      <p>4165416541654fdsfsdklmnflksdmnflksdmflkdmflkfmlksd</p>
      <p>4165416541654fdsfsdklmnflksdmnflksdmflkdmflkfmlksd</p>
      <p>4165416541654fdsfsdklmnflksdmnflksdmflkdmflkfmlksd</p>
      <p>4165416541654fdsfsdklmnflksdmnflksdmflkdmflkfmlksd</p>
      <p>4165416541654fdsfsdklmnflksdmnflksdmflkdmflkfmlksd</p>
      <p>4165416541654fdsfsdklmnflksdmnflksdmflkdmflkfmlksd</p>
      <p>4165416541654fdsfsdklmnflksdmnflksdmflkdmflkfmlksd</p>
      <p>4165416541654fdsfsdklmnflksdmnflksdmflkdmflkfmlksd</p>
      <p>4165416541654fdsfsdklmnflksdmnflksdmflkdmflkfmlksd</p>
      <p>4165416541654fdsfsdklmnflksdmnflksdmflkdmflkfmlksd</p>
      <p>4165416541654fdsfsdklmnflksdmnflksdmflkdmflkfmlksd</p>
      <p>4165416541654fdsfsdklmnflksdmnflksdmflkdmflkfmlksd</p>
      <p>4165416541654fdsfsdklmnflksdmnflksdmflkdmflkfmlksd</p>
      <p>4165416541654fdsfsdklmnflksdmnflksdmflkdmflkfmlksd</p>
      <p>4165416541654fdsfsdklmnflksdmnflksdmflkdmflkfmlksd</p>
      <p>4165416541654fdsfsdklmnflksdmnflksdmflkdmflkfmlksd</p>
      <p>4165416541654fdsfsdklmnflksdmnflksdmflkdmflkfmlksd</p>
      <p>4165416541654fdsfsdklmnflksdmnflksdmflkdmflkfmlksd</p>
      <p>4165416541654fdsfsdklmnflksdmnflksdmflkdmflkfmlksd</p>
      <p>4165416541654fdsfsdklmnflksdmnflksdmflkdmflkfmlksd</p>
      <p>4165416541654fdsfsdklmnflksdmnflksdmflkdmflkfmlksd</p>
      <p>4165416541654fdsfsdklmnflksdmnflksdmflkdmflkfmlksd</p>
      <p>4165416541654fdsfsdklmnflksdmnflksdmflkdmflkfmlksd</p>
      <p>4165416541654fdsfsdklmnflksdmnflksdmflkdmflkfmlksd</p>
      <p>4165416541654fdsfsdklmnflksdmnflksdmflkdmflkfmlksd</p>
      <p>4165416541654fdsfsdklmnflksdmnflksdmflkdmflkfmlksd</p>
      <p>4165416541654fdsfsdklmnflksdmnflksdmflkdmflkfmlksd</p>
      <p>4165416541654fdsfsdklmnflksdmnflksdmflkdmflkfmlksd</p>
      <p>4165416541654fdsfsdklmnflksdmnflksdmflkdmflkfmlksd</p>
      <p>4165416541654fdsfsdklmnflksdmnflksdmflkdmflkfmlksd</p>
      <p>4165416541654fdsfsdklmnflksdmnflksdmflkdmflkfmlksd</p>
      <p>4165416541654fdsfsdklmnflksdmnflksdmflkdmflkfmlksd</p>
      <p>4165416541654fdsfsdklmnflksdmnflksdmflkdmflkfmlksd</p>
      <p>非常好</p>
      <p>非常好</p>
      <p>非常好</p>
      <p>非常好</p>
      <p>非常好</p>
      <p>非常好</p>
      <p>非常好</p>
      <p>非常好</p>
      <p>非常好</p>
      <p>非常好</p>
      <p>非常好</p>
      <p>非常好</p>
      <p>非常好</p>
      <p>非常好</p>
      <p>非常好</p>
      <p>非常好</p>     
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
export default {
  data() {
    return {
      currentView: ''
    }
  },
  methods: {
    abs() {
      html2canvas(document.getElementById('db'), {
        onrendered: function (canvas) {

          var contentWidth = canvas.width;
          var contentHeight = canvas.height;

          //一页pdf显示html页面生成的canvas高度;
          var pageHeight = contentWidth / 592.28 * 841.89;
          //未生成pdf的html页面高度
          var leftHeight = contentHeight;
          //页面偏移
          var position = 0;
          //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
          var imgWidth = 595.28;
          var imgHeight = 592.28 / contentWidth * contentHeight;

          var pageData = canvas.toDataURL('image/jpeg', 1.0);

          var pdf = new jsPDF('', 'pt', 'a4');

          //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
          //当内容未超过pdf一页显示的范围，无需分页
          if (leftHeight < pageHeight) {
            pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
          } else {
            while (leftHeight > 0) {
              pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
              leftHeight -= pageHeight;
              position -= 841.89;
              //避免添加空白页
              if (leftHeight > 0) {
                pdf.addPage();
              }
            }
          }

          pdf.save('content.pdf');
        }
      })
    },
    aba() {
      
    }
  }
}
</script>

<style>
.box {
  width: 60%;
  height: 80%;
  margin: 20px auto;
  overflow-y: scroll;
  border: 1px solid #000;
  position: absolute;
  background: #ffffff;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.content {
  width: calc(100%-100px);
  padding: 0px 100px;
  height: 100%;
  position: absolute;
  background: #fff;
  color: #000;
  left: calc(100%-100px);
}
.tools {
  position: absolute;
  right: 0px;
}
.el-radio-group {
  width: 98px;
}
.el-radio-button {
  width: 98px;
}
.el-radio-button__inner {
  width: 98px;
  border-left: 1px solid #d8dce5;
  border-radius: 4px 0 0 4px;
}
</style>
