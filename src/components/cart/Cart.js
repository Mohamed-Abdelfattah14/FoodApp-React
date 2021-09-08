import React from 'react'
import './Cart.css'

function Cart({ cartItems, handleAddItem, handleRemoveItem, handleClear }) {
    const totalPrice = cartItems.reduce((price, item) => price + item.quentity * item.price, 0)
    return (
        <div className="container">
            <h2 className="text-center">My Cart</h2>
            <div className="b-card text-center">
                <div className="clear">
                    {cartItems.length >= 1 && (
                        <button className="btn btn-warning" onClick={handleClear}>Clear My Cart</button>
                     )}
                </div>
                <div>
                    {cartItems.length === 0 && (<div>No items add</div>)}
                </div>
                <div className="row">
                    <div className="col-12">
                        {cartItems.map((item) => (
                            <div className="mb-3" key={item.id}>
                                <div className="row s-card g-0">
                                    <div className="col-md-4">
                                        <img src={item.image} className="img-fluid rounded-start" alt={item.name} />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <p className="card-text">{item.quentity} * {item.price}$</p>
                                            <div className="butns">
                                                <button className="btn btn-success" onClick={() => handleAddItem(item)}>+</button> : <button className="btn btn-danger" onClick={() => handleRemoveItem(item)}>-</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>

                </div>
                <hr></hr>
                <div>
                    <span>Total Price</span> : <span>{totalPrice}$</span>
                </div>
            </div>

        </div>
    )
}

export default Cart
