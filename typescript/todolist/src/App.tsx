import './App.css'
import HelloComponent from './components/HelloComponent/index'
// react + typescript
// javascript 可能会有些问题，主要因为弱类型
// jsx 后缀改为tsx
// 函数进行类型约束
// const HelloComponent = () => {
//   // void 空   ReactNode
//   return (
//     <h1>Hello Component</h1>
//   )
// }
function App() {
  // 编译阶段
  // 多写了些类型声明文件
  // 多写一些代码 类型声明 代码质量保驾护航
  let count: number = 10;
  const title: string = 'Hello ts';
  const isDone: boolean = true;
  const list: number[] = [1, 2, 3];
  // 元组类型
  const tuple: [number, string] = [1, '2'];
  // 枚举类型
  enum Status {
    Pending,
    Fulfilled,
    Rejected
  }
  const pStatus: Status = Status.Pending;
  // 对象的约束？
  // 接口
  interface User {
    name: string;
    age: number;
    isSingle?: boolean;
  }
  // 使用interface 来约定类型
  const user:User = {
    name: '蔡徐坤',
    age: 18,
    isSingle: true
  }
  return (
    <>
      <h1>{title}</h1>
      {count}
      <h2>用户信息</h2>
      <p>姓名：{user.name}</p>
      <p>年龄：{user.age}</p>
      {/* typescript 类型检查 */}
       <HelloComponent name='小蔡'/>
    </>
  );
}

export default App;
