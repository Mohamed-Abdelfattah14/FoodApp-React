import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Menu.css'
import {GiShoppingCart} from 'react-icons/gi';
function Menu({handleAddItem}) {

    const [menu, Setmenu] = useState([]);
    const [searchTerm , SetsearchTerm] = useState("");
    useEffect(() => {
        async function looping() {
            const DB = await axios.get("http://localhost:3004/menu")
            Setmenu(DB.data)
            console.log(DB)
        }
        looping();
    }, [])
    return (
        <div className="container">
            <h2 className="text-center">Our Menu</h2>
            <input className="form-control mt-3" placeholder="Search Here" type="text" onChange={(e)=>{
                SetsearchTerm(e.target.value);
            }} />

            <div className="row">
                {menu.filter((m)=>{
                    if(searchTerm === ""){
                        return m
                    }else if(m.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                        return m
                    }
                }).map(m => {

                    return (
                        <div key={m.id} className="col-12 col-md-6 col-lg-3">
                            <div className="card">
                                <img src={m.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{m.name}</h5>
                                    <div className="g-icon">
                                    <p className="card-text">{m.price}$</p>
                                    <h4 onClick={() => handleAddItem(m)}><GiShoppingCart /></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>

        </div>
    )
}

export default Menu
