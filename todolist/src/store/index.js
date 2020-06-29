import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 所有的任务列表
    list: [],
    //文本框内容
    inputVal: '',
    nextId: 5,
    viewStr: 'all'
  },
  mutations: {
    // 初始化显示List
    initList(state, list) {
      state.list = list
    },

    // 设置input标签的value
    setInputVal(state, val) {
      state.inputVal = val
    },

    // 添加新的事件
    addItem(state) {
      const obj = {
        id: state.nextId,
        info: state.inputVal.trim(),
        done: false
      }
      state.list.push(obj)
      state.nextId++
      state.inputVal = ''
    },

    // 删除一个事件
    removeItem(state, id) {
      var i = state.list.findIndex(x => x.id === id)
      if(i!==-1){
        state.list.splice(i, 1)
      }
    },

    // 修改undone or done
    changeStatus(state, param){
      var i = state.list.findIndex(x => x.id === param.id)
      if(i!==-1){
        state.list[i].done = param.status
      }
    },

    // 一键清除done事件
    cleanDone(state){
      state.list = state.list.filter(x=> x.done == false)
    },

    // 将state的all undone done改变为当前状态
    changeViewStr(state, str){
      state.viewStr = str
    }
  },
  actions: {
    // 异步拿数据
    getList(context) {
      axios.get('/list.json').then(({ data }) => {
        context.commit('initList', data)
      })
    }
  },
  getters:{
    // 对数据做包装，但不会修改到原始数据
    // 返回出当前undone的事件
    unDoneNumber(state){
      return state.list.filter(x=>x.done===false).length
    },

    // 根据viewStr状态返回出相应的事件
    infoList(state){
      if(state.viewStr === 'all'){
        return state.list
      }else if(state.viewStr === 'undone'){
        return state.list.filter(x=> !x.done)
      }else if(state.viewStr === 'done'){
        return state.list.filter(x=> x.done)
      }else{
        return state.list
      }
    }
  },
  modules: {}
})
