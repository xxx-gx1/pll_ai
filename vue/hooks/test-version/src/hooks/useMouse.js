import {
    ref,
    onMounted,
    onUnmounted
} from 'vue'

export function useMouse() {
    const x = ref(0)
    const y = ref(0)

    const updateMousePosition = (e) => {
        x.value = e.clientX
        y.value = e.clientY
    }
    onMounted(() => {
        window.addEventListener('mousemove', updateMousePosition)
    })
    onUnmounted(() => {
        window.removeEventListener('mousemove', updateMousePosition)
    })


    return {
        x,
        y
    }
}
