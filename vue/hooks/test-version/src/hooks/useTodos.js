import {
    ref,
    computed // 计算属性
} from 'vue'

export function useTodos() {
    let title = ref('');
    let todos = ref([
        {
            title: '学习vue3',
            done: false
        }
    ]);
    function addTodo() {
        todos.value.push({
            title: title.value,
            done: false,
        })
        title.value = '';
    }

    function clear() {
        // done false 留下 ， 已完成的清除
        todos.value = todos.value.filter((v) => !v.done);
    }
    let active = computed(() => {
        return todos.value.filter((v) => !v.done).length;
    })
    let all = computed(() => todos.value.length)
    let allDone = computed({
        get: function() {
            return active.value === 0;
        },
        set: function(value) {
            todos.value.forEach(todo => {
                todo.done = value
            })
        }
    })


    return {
        title,
        todos,
        addTodo,
        clear,
        active,
        all,
        allDone,
    }
}

