import axios from "axios";
import { games } from "./discover";

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


export {getTopSeller, getMostPlayed, getWishlist, games, getNewRelease}