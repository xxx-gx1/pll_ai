// 全局任务对象，一个要处理的任务单元(fiber结点)
let nextUnitOfWork = null;

function performUnitOfWork(fiber){
    // 当前fiber 对应的真实DOM，
    if(!fiber.dom){
        fiber.dom = createDomFiber(fiber);
    }

    const elements = fiber.props.children;
    let index = 0;
    let prevSibling = null;

    while(index < elements.length){
        const element = elements[index];
        const newFiber = {
            type: element.type,
            props: element.props,
            parent: fiber,
            dom: null,
            child: null,
            sibling: null,
        };
        if(index == 0){
            fiber.child = newFiber;
        }else{
            prevSibling.sibling = newFiber;
        }
        prevSibling = newFiber;
        index++;
    }

    if(fiber.child){
        return fiber.child;
    }
    // 如果没有子结点， 找兄弟结点
    let next = fiber;
    while(next){
        if(next.sibling){
            return next.sibling;
        }
        next = next.parent;
    }

    return null;
}

// 浏览器空闲时候调用
function workLoop(deadline){
    let shouldYield = false; // 不中断
    while(nextUnitOfWork && !shouldYield){
        // 指针的操作
        nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
        // 如果任务时间小于1ms，停止执行，避免阻塞渲染
        shouldYield = deadline.timeRemaining() < 1;
    }
}
// 模拟实现，schedule 任务调度机制
requestIdleCallback(workLoop);
