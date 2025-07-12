import { Outlet } from 'react-router-dom'


const Product = () => {
    return (
        <div>
            <h1>Product</h1>
            {/* 二级路由的占位符 */}
            <Outlet />
        </div>
    )
}

export default Product
