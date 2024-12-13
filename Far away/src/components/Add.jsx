import { useState } from "react";

function Add() {
    const[count, setCount] = useState(1)
    const[item, setItem] = useState("")
    const[itemArr, setItemarr] = useState([])

    function addItem() {
        item.trim() ? setItemarr([...itemArr, item]) : ""
        setItem("")
    }
    function deleteItem(i) {
        setItemarr(itemArr.filter((item, index) => index !=r i))
    }

  return (
    <>
        <div className="bg-[#e5771f] py-[2.8rem] flex flex-col md:flex-row gap-3 md:items-center px-3 lg:px-[150px]">
            <h3 className="text-[20px] font-semibold text-center">
            What do you need for your 😍 Trip?
            </h3>
            <select onChange={(e) => setCount(Number(e.target.value))} className="w-[100px] m-auto bg-[#ffebb3] font-bold pl-[2.5rem] outline-none rounded-[10rem] py-[.5rem] md:py-[.8rem] text-[#5a3e2b]">
            {
                Array(20).fill("").map((_, i) => {
                return <option key={i} value={i + 1}>{i + 1}</option>
                })
            }
            </select>
            <input onChange={(e) => setItem(e.target.value)}
            className="bg-[#ffebb3] py-[.5rem] md:py-[.8rem] px-[3.2rem] border-0 rounded-[10rem] outline-none cursor-pointer text-[#5a3e2b] font-bold"
            type="text"
            placeholder="Item ..."
            />
            <button onClick={addItem} className="md:w-[100px] bg-[#76c7ad] uppercase border-0 rounded-[10rem] font-semibold py-[.8rem]">
            Add
            </button>
        </div>
        <div className="py-[2rem] bg-[#5a3e2b] text-[#ffebb3] flex flex-col justify-between gap-[3rem] items-center">
        <ul className="min-h-[21vh] list-none">
            {
                itemArr.map((item, i) => {
                    return (
                        <li key={i}><input type="checkbox" /> {count} {item} <button onClick={(i) => deleteItem(i)}>❌</button></li>
                    )
                })
            }
        </ul>
        <div className="font-semibold text-[#5a3e2b] text-[1rem] flex flex-col gap-4 sm:flex-row">
        <select
            name=""
            id=""
            className="bg-[#ffebb3] mx-[.8rem] py-1 px-[.8rem] uppercase rounded-2xl"
        >
            <option value="order">Sort by Input Order</option>
            <option value="description">Sort by Description</option>
            <option value="description">Sort by Packed Status</option>
        </select>
        <button className="bg-[#ffebb3] mx-[.8rem] px-[.8rem] py-1 rounded-2xl">
            Clear List
        </button>
        </div>
        </div>
    </>
  )
}

export default Add