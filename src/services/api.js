import axios from "axios";

async function getTopSeller() {
    const res = await axios.get("https://databaza.vercel.app/topSellers")
    return res.data
}
async function getMostPlayed() {
    const res = await axios.get("https://databaza.vercel.app/mostPlayed")
    return res.data
}
async function getWishlist() {
    const res = await axios.get("http://localhost:3330/elements")
    return res.data
}
async function getNewRelease() {
    const res = await axios.get("https://databaza.vercel.app/newReleases")
    return res.data
}
async function getVideos() {
    const res = await axios.get("https://databaza.vercel.app/video")
    return res.data.videos
}
async function getSliderImg() {
    const res = await axios.get("https://databaza.vercel.app/video")
    return res.data.images
}


export {getTopSeller, getMostPlayed, getWishlist, getNewRelease, getVideos, getSliderImg}