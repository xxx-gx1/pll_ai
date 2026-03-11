function createElement(tag, props, ...children) {

}


// namespace
const Didact = {
    createElement, // 生成VDOM，一次生成 内存中
    render // 真实DOM并挂载
};
// babel 给的
const element = Didact.createElement(
    "div", 
    {id: "foo"}, 
    Didact.createElement("a", null, "bar"), 
    Didact.createElement("b", null)
);

Didact.render(element, document.getElementById("root"));