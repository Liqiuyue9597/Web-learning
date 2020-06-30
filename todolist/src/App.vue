<template>
  <div id="app">
    <a-input placeholder="请输入任务" class="my_ipt" :value="inputVal" @change="inputChange" />
    <a-button type="primary" @click="addItemToList">添加事项</a-button>

    <a-list bordered :dataSource="infoList" class="dt_list">
      <!-- 复选框 -->
      <a-list-item slot="renderItem" slot-scope="item">
        <a-checkbox :checked="item.done" 
        @change="(e)=>{statusChangeById(e, item.id)}">{{item.info}}</a-checkbox>
        <!-- 删除链接 -->
        <a slot="actions" @click="removeItemById(item.id)">删除</a>
      </a-list-item>

      <!-- footer -->
      <div slot="footer" class="footer">
        <!-- 未完成任务数 -->
        <span>{{unDoneNumber}}条剩余</span>
        <!-- 操作按钮 -->
        <a-button-group>
          <a-button :type="viewStr == 'all' ? 'primary':'default'" @click="changeList('all')">全部</a-button>
          <a-button :type="viewStr == 'undone' ? 'primary':'default'" @click="changeList('undone')">未完成</a-button>
          <a-button :type="viewStr == 'done' ? 'primary':'default'" @click="changeList('done')">已完成</a-button>
        </a-button-group>
        <!-- 一键清除已完成 -->
        <a @click="clearAll">清除已完成</a>
      </div>
    </a-list>
  </div>
</template>

<script>
import { mapState, mapGetters} from 'vuex'

export default {
  name: "App",
  data() {
    return {

    }
  },
  created() {
    this.$store.dispatch('getList')
  },
  computed: {
    ...mapState(['inputVal', 'viewStr']),
    ...mapGetters(['unDoneNumber', 'infoList'])
  },
  methods: {
    // 监听文本框变化ant-design只有change没有input事件
    inputChange(e) {
      this.$store.commit('setInputVal', e.target.value)
    },

    // 新增内容
    addItemToList() { 
      if (this.inputVal.trim().length == 0) {
        return this.$message.warning("请输入内容")
      }
      this.$store.commit('addItem')
    },

    // 删除内容
    removeItemById(id) {
      this.$store.commit('removeItem', id)
    },

    // 根据id修改done or undone
    statusChangeById(e, id) {
      const param = {
        id,
        status: e.target.checked
      }
      this.$store.commit('changeStatus', param)
    },

    // 一键清除所有done事件
    clearAll(){
      this.$store.commit('cleanDone')
    },

    // 根据all undone done显示List
    changeList(str){
      this.$store.commit('changeViewStr', str)
    }
  }
}
</script>

<style scoped>
#app {
  padding: 10px;
}
.my_ipt {
  width: 500px;
  margin-right: 10px;
}
.dt_list {
  width: 500px;
  margin-top: 10px;
}
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
