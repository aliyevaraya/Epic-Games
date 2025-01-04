import axios from "axios";

async function getTopSeller() {
    const res = await axios.get("http://localhost:3300/elements")
    return res.data
}
async function getMostPlayed() {
    const res = await axios.get("http://localhost:3000/elements")
    return res.data
}
async function getWishlist() {
    const res = await axios.get("http://localhost:3330/elements")
    return res.data
}
async function getNewRelease() {
    const res = await axios.get("http://localhost:3334/elements")
    return res.data
}
async function getVideos() {
    const res = await axios.get("http://localhost:4000/videos")
    return res.data
}
async function getSliderImg() {
    const res = await axios.get("http://localhost:4000/images")
    return res.data
}


export {getTopSeller, getMostPlayed, getWishlist, getNewRelease, getVideos, getSliderImg}