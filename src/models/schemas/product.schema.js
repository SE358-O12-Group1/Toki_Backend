'use strict'

const { Schema, model } = require('mongoose')

const { COLLECTION_NAMES, DOCUMENT_NAMES } = require('../../constants/database.constant')

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        images: {
            type: Array,
            default: []
        },
        seller: {
            type: Schema.Types.ObjectId,
            ref: DOCUMENT_NAMES.USER,
            required: true
        },
        description: {
            type: String,
            trim: true
        },
        category: {
            type: Schema.Types.ObjectId,
            ref: DOCUMENT_NAMES.CATEGORY,
            required: true
        },
        normalPrice: {
            type: Number,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        rating: {
            type: Number,
            default: 0
        },
        quantity: {
            type: Number,
            default: 0
        },
        sold_quantity: {
            type: Number,
            default: 0
        },
        reviews: {
            type: [Schema.Types.ObjectId],
            ref: DOCUMENT_NAMES.REVIEW
        }
        // variants: {
        //     type: Object,
        //     default: {}
        // }
    },
    {
        timestamps: true,
        collection: COLLECTION_NAMES.PRODUCTS
    }
)

module.exports = model(DOCUMENT_NAMES.PRODUCT, productSchema)
