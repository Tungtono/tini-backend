import mongoose from "mongoose";

const UrlSchema = mongoose.Schema({
    long_url: String,
    short_slug: String
}, { timestamps: true })

export default mongoose.model('ShortUrl', UrlSchema)