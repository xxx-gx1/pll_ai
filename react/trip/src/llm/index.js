/**
 *  chat 聊天
 * 
 */
const DEEPSEEK_CHAT_API_URL = 'https://api.deepseek.com/chat/completions';
const KIMI_CHAT_API_URL = 'https://api.moonshot.cn/v1/chat/completions';
export const chat = async (
    messages,
    api_url=DEEPSEEK_CHAT_API_URL,
    api_key=import.meta.env.VITE_DEEPSEEK_API_KEY,
    model='deepseek-chat'
) => {
    try{
        const res = await fetch(api_url,{
            method:'POST',
            headers:{
                'Authorization':`Bearer ${api_key}`,
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                model:model,
                messages,
                stream:false
            })
        })
        const data = await res.json();
        return{
            code: 200,
            data: {
                role: 'assistant',
                content: data.choices?.[0]?.message?.content || ''
            },
        }
    } catch(err){
        return {
            code: 0,
            msg: '请求失败'
        }
    }
}


export const kimiChat = async (messages) => {
    const res = await chat(
        messages,
        KIMI_CHAT_API_URL,
        import.meta.env.VITE_KIMI_API_KEY,
        'moonshot-v1-auto'
    )
    return res;
}

export const generateAvatar = async (text) => {
    // 设计prompt
    const prompt = `
    你是一位漫画设计师，需要为用户设计头像，主打简单、 clean、 现代的设计风格。
    用户的信息是${text}
    要求：
    1. 头像必须是正方形的。
    2. 头像必须是png格式的。
    3. 头像必须是128*128的大小。
    4. 头像必须是透明背景的。
    5. 头像必须是矢量图的。
    6. 头像必须是可缩放的。
    7. 头像必须是可编辑的。
    8. 头像必须是可导出的。
    `
}