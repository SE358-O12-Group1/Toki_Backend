const {
    mongodb_local_db_name,
    mongodb_cloud_username,
    mongodb_cloud_password,
    mongodb_cloud_db_name
} = require('../configs/env.config')

const DATABASE = {
    LOCAL: `mongodb://127.0.0.1:27017/${mongodb_local_db_name || 'toki-db'}`,
    CLOUD: `mongodb+srv://${mongodb_cloud_username}:${mongodb_cloud_password}@toki-cluster.h0rfjga.mongodb.net/${mongodb_cloud_db_name}`
}

const DOCUMENT_NAMES = {
    USER: 'User',
    TOKEN: 'Token',
    CATEGORY: 'Category',
    PRODUCT: 'Product',
    REVIEW: 'Review',
    DISCOUNT: 'Discount',
    ORDER: 'Order'
}

const COLLECTION_NAMES = {
    USERS: 'Users',
    TOKENS: 'Tokens',
    CATEGORIES: 'Categories',
    PRODUCTS: 'Products',
    REVIEWS: 'Reviews',
    DISCOUNTS: 'Discounts',
    ORDERS: 'Orders'
}

module.exports = {
    DATABASE,
    DOCUMENT_NAMES,
    COLLECTION_NAMES
}
