import React from "react";

const Characters = ({characters = []}) => {
    return (
        <div className="row">
            {
                characters.map((item,index) => (
                    <div  key ={index} className="col">
                        <div className="card" style={{minwidth:'200px'}}>
                            <img src={item.image} alt=""></img>
                            <div className="card-body">
                                <h5>{item.name}</h5>
                                <hr />
                                <p>species:{item.species}</p>
                                <p>location:{item.location.name}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}
export default Characters;