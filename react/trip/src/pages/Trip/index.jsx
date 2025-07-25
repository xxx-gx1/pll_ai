import {
  useEffect,
  useState
} from 'react';
import { kimiChat } from '@/llm'
import  useTitle  from '@/hooks/useTitle'
import styles from './trip.module.css'
import { 
  Input,
  Button,
  Loading
} from 'react-vant';

const Trip = () => {
  const [text, setText] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleChat = () => {
    if(text.trim() === ''){
      return;
    }
    setIsSending(true);
  }
  // useEffect(() => {
  //   const fetchChat = async () => {
  //     const res = await kimiChat([
  //       {
  //         role:'user',
  //         content:'重庆旅游推荐'
  //       }
  //     ]);
  //     console.log(res);
  //   }
  //   fetchChat();
  // },[])
  useTitle('旅游智能客服')
  return (
    <div className='flex flex-col h-all'>
      <div className={`${styles.chatArea} flex-1`}>

      </div>
      <div className={`flex ${styles.inputArea} `}>
        <Input 
          value={text}
          onChange={(e) => setText(e)}
          placeholder='请输入消息'
          className={`${styles.input} flex-1`}
        >
        </Input>
        <Button type='primary' onClick={handleChat} disabled={isSending}>发送</Button>
        {isSending && (<div className='fixed-loading'><Loading type='ball'/></div>)}
      </div>
    </div>
  )
}

export default Trip