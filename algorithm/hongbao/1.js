/**
 * 
 * @param {Number} total 
 * @param {Number} num
 * @returns {number[]} 
 */
function hongbao(total,num){
    const arr=[];
    let restAmount=total; //剩余金额
    let restNum=num; //剩余数量
    for(let i=0;i<num-1;i++){
        // Math
        // 包装类 
        const amount=(Math.random()*(restAmount/restNum*2)).toFixed(2); //随机金额
        restAmount-=amount; //剩余金额
        restNum--; //剩余数量
        arr.push(amount); //存入数组
    }
    arr.push(restAmount.toFixed(2)); //存入数组
    // - 公平性
    // 平均值
    // 随机性
    return arr;
}
console.log(hongbao(100,10));