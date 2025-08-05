
const DOUBAO_API_URL = 'https://ark.cn-beijing.volces.com/api/v3/images/generations';
export const generateImage = async (prompt) => {
    const api_url = DOUBAO_API_URL;
    const api_key = import.meta.env.VITE_DOUBAO_API_KEY;
    const res = await fetch(api_url,{
        method:'POST',
        headers:{
            'Authorization':`Bearer ${api_key}`,
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            model:"doubao-seedream-3-0-t2i-250415",
            prompt,
            size:'512x512',
            response_format:'url'
        })
    })
    const data = await res.json();
    return data.data?.[0]?.url; 
}

