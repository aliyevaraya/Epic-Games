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
export {getTopSeller, getMostPlayed, getWishlist}