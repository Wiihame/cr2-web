<template>
  <div class="main_page">
    <div>
      <Avatar icon="ios-heart" size='large' class="page_avatar"></Avatar>
      <Card class="page_card">
        <div style="text-align:center">
          <Icon type="md-beer"/>
          <span class="page_title">CR2的新媒体课程作业</span>
        </div>
      </Card>
    </div>
    
    <div style="margin-top:20px; margin-bottom:20px">
      <Card class="page_card card_2">
        <span class="page_title">个人信息展示</span>
      </Card>
      <Card style="width:350px; margin: 0 20px;">
        <p slot="title">
          <Icon type="ios-person"></Icon>
          个人信息
        </p>
        <div>
          <p>
            <span class="text-left">姓名：</span>
            <span class="text-right">陈蓉蓉</span>
          </p>
          <p>
            <span class="text-left">班级：</span>
            <span class="text-right">2015211306</span>
          </p>
          <p>
            <span class="text-left">学号：</span>
            <span class="text-right">2015211308</span>
          </p>
        </div>
    </Card>
    </div>
    
    <Table border :columns="columns1" :data="lessons" class="page_table"></Table>

    <div>
      <Card class="page_card card_2">
        <span class="page_title">文件上传区域</span>
      </Card>
      <Upload
        multiple
        type="drag"
        action=""
        class="page_upload"
        >
        <div style="padding: 20px 0;">
          <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
          <p>点击选择或拖拽文件至此处上传</p>
        </div>
    </Upload>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns1: [
        {
          title: '实验名称',
          key: 'lesson_name'
        },
        {
          title: '实验分数',
          key: 'lesson_grade'
        },
        {
          title: '课程内容',
          key: 'lesson_content'
        }
      ],
      lessons: [
        {
          lesson_name: '音频采集处理',
          lesson_grade: '20',
          lesson_content: '用Windows录音机录制一段自己的歌或者朗诵，用cool edit软件进行录制的声音和背景音乐的合成',
          date:'2019-01-10'
        },
        {
          lesson_name: '图像处理',
          lesson_grade: '20',
          lesson_content: '1. 利用图层效果制作有地形质感的世界地图，调整并压缩；2. 制作一个显示bmp图片的C程序，并实现亮度、对比度调节、平移，放大及旋转',
          date:'2019-01-10'
        },
        {
          lesson_name: '动画制作',
          lesson_grade: '30',
          lesson_content: '利用实验一得到的音频制作不短于一分半的Flash动画',
          date:'2019-01-10'
        },
        {
          lesson_name: '网站制作',
          lesson_grade: '30',
          lesson_content: '个人页面的开发，包括基本信息、该课程的实验信息，并实现媒体上传和下载',
          date:'2019-01-10'
        }
      ]
    }
  },
  components: {

  }
}
</script>

<style>
.main_page {
  width: 100%;
  height: 100%;
}
.page_title {
  margin-left: 20px;
  font-size: 15px;
  line-height: 1em;
}
.page_avatar {
  width: 100px;
  height: 100px;
  text-align: left;
  margin: 0 20px;
}
.page_table {
  margin: 10px 20px;
}
.page_card {
  width: 240px;
  height: 60px;
  display: inline-block;
}
.card_2 {
  display: block;
  margin: 10px 20px;
}
.page_upload {
  margin: 10px 20px;
}
.text-left {
  text-align: left;
  display: inline-block;
}
.text-right {
  text-align: right;
  display: inline-block;
}
</style>

