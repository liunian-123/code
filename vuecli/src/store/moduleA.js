const user = {
    namespaced: true,
    state: {
        list:[
            {
                name:'zs'
            },{
                name:'lisi'
            },
            {
                name:'wangwu'
            }
        ]
    },
    mutations: {
        // 向list数组中添加{name:'zhaoliu'}
        add(state){
            state.list.push({name:'zhaoliu'})
        }
    },
    getters: {

    },
    actions: {
    }
}
//ES6中的语法  将user暴露出来 只有暴露出来就才能在其他文件中通过 import xx from xx引用
export default user;
