import express from "express";
import Url from '../models/ShortUrl.js'
import { nanoid } from 'nanoid'

const router = express.Router();

//get all urls
const getAllUrls = (req, res) => {
    Url.find()
    .then(data => res.send(data))
    .catch(err => res.send(err))
}

// add new url
const addNewUrl = (req, res) => {
    // const nanoid = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyz', 6)
    const tempUrl = {
        long_url: req.body.destination,
        short_slug: nanoid(6)
    }
    const newUrl = new Url(tempUrl)
    newUrl.save()
    .then(data => res.send(data))
    .catch(err => res.send(err))
}

//get url by short code
const getUrlBySlug = (req, res) => {
    Url.find({ short_slug: req.params.slug})
    .then(data => res.send(data))
    .catch(err => res.send(err))
}

router.get('/', getAllUrls)

router.post('/', addNewUrl)

router.get('/:slug', getUrlBySlug)

export default router;
