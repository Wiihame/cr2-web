<template>
  <div class="main_page">
    <div>
      <Avatar icon="ios-heart" size='large' class="page_avatar"></Avatar>
      <Card class="page_card">
        <div style="text-align:center">
          <Icon type="md-beer"/>
          <span class="page_title">CR2的自留地</span>
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
          title: '课程名',
          key: 'lesson_name'
        },
        {
          title: '课程时间',
          key: 'lesson_time'
        },
        {
          title: '课程内容',
          key: 'lesson_'
        }
      ],
      lessons: [
        {
          lessons_name: '新媒体',
          lessons_time: '2018-09-10',
          lessons_content: 'PS Web',
          date:'2019-01-10'
        },
        {
          lessons_name: '新媒体',
          lessons_time: '2018-09-10',
          lessons_content: 'PS Web',
          date:'2019-01-10'
        },
        {
          lessons_name: '新媒体',
          lessons_time: '2018-09-10',
          lessons_content: 'PS Web',
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
</style>

