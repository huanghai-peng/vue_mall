import { request } from './request'

// 获取分类栏数据
export function getCategory() {
    return request({
        url: '/category'
    })
}

// 获取分类栏商品数据
export function getSubCategory(maitKey) {
    return request({
        url: '/subcategory',
        params: {
            maitKey
        }
    })
}

// 获取分类的商品详情数据
export function getSubCategoryDetail(miniWallkey, type) {
    return request({
        url: '/subcategory/detail',
        params: {
            miniWallkey,
            type
        }
    })
}