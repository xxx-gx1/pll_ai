import {
  useEffect
} from 'react';
import { kimiChat } from '@/llm'
import  useTitle  from '@/hooks/useTitle'
const Trip = () => {
  useEffect(() => {
    const fetchChat = async () => {
      const res = await kimiChat([
        {
          role:'user',
          content:'重庆旅游推荐'
        }
      ]);
      console.log(res);
    }
    fetchChat();
  },[])
  useTitle('旅游智能客服')
  return (
    <>
      <h1>Trip</h1>
    </>
  )
}

export default Trip