import React from 'react';
import './filter.css';
import { Checkbox, Radio, RadioGroup, FormControlLabel } from '@material-ui/core';

let TshirtCategories = [
    {Type: "Tshirts", _id: "tshirtFilter", Qty: 57520},
    {Type: "Lounge Tshirts", _id: "loungetshirtFilter", Qty: 654},
];

let brand= [
    {Name: "Roadster", _id: "roadstarFilter", Qty: 3145},
    {Name: "QYANCIOUS", _id: "qyanciousFilter", Qty: 1535},
    {Name: "WROGN", _id: "WROGNFilter", Qty: 1331},
    {Name: "Puma", _id: "pumaFilter", Qty: 1331},
    {Name: "Free Authourity", _id: "freeFilter", Qty: 1114},
];

let price= [
    {MinPr: 150, _id: "lowestOneFilter", MaxPr: 999},
    {MinPr: 1000, _id: "lowestSecFilter", MaxPr: 2499},
    {MinPr: 2500, _id: "lowestThirdFilter", MaxPr: 4999},
    {MinPr: 5000, _id: "lowestFourthFilter", MaxPr: 8499},
    {MinPr: 8500, _id: "lowestFifthFilter", MaxPr: 10000},
];

let color= [
    {Name: "green", _id: "colorNavyblueFilter", Qty: 8792},
    {Name: "blue", _id: "colorBlueFilter", Qty: 7617},
    {Name: "white", _id: "colorWhiteFilter", Qty: 7241},
    {Name: "red", _id: "colorRedFilter", Qty: 6725},
    {Name: "black", _id: "colorBlackFilter", Qty: 2355},
    {Name: "grey", _id: "colorGreyFilter", Qty: 356},
];

function openMenu(){
    var filterSearch = document.querySelectorAll(".filterSearch");

    filterSearch.forEach((e) => {
        const inputSearch = e.querySelector("input");
        e.addEventListener("click", () => {
            inputSearch.classList.toggle("active");
        });
    });
}


  
  const Filter = () => {
    return (
        <div className="filterContainer">
            <div className="box">
                <RadioGroup aria-label="gender" name="gender1" >
                    <FormControlLabel value="men" control={<Radio />} label="Men" />
                    <FormControlLabel value="women" control={<Radio />} label="Women" />
                    <FormControlLabel value="girls" control={<Radio />} label="Girls" />
                    <FormControlLabel value="boys" control={<Radio />} label="Boys" />
                </RadioGroup>
            </div>

            <div className="box categoryFilter" id="categoryFilter">
                <div className="filterTitle">
                    <p>Category</p>
                    <div className="filterSearch" onClick={() => openMenu()}>
                        <input type="search" id="categorySearch" placeholder="Search category" />
                        <span className="searchIcon"><i className="fas fa-search"></i></span>
                    </div>
                </div>
                <ul>
                    {
                        TshirtCategories.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Checkbox onChange={()=><p>Hello</p>} colorPrimary id={item._id} />
                                    <label htmlFor={item._id}>{item.Type} <span className="qty">({item.Qty})</span></label>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

            <div className="box brandFilter" id="brandFilter">
                <div className="filterTitle">
                    <p>BRAND</p>
                    <div className="filterSearch" onClick={() => openMenu()}>
                        <input type="search" id="brandSearch" placeholder="Search brand" />
                        <span className="searchIcon"><i className="fas fa-search"></i></span>
                    </div>
                </div>
                <ul>
                    {
                        brand.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Checkbox onChange={()=><p>Brand Category</p>} colorPrimary id={item._id} />
                                    <label htmlFor={item._id}>{item.Name} <span className="qty">({item.Qty})</span></label>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

            <div className="box categoryFilter" id="categoryFilter">
                <div className="filterTitle">
                    <p>PRICE</p>
                </div>
                <ul>
                    {
                        price.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Checkbox colorPrimary id={item._id} />
                                    <label htmlFor={item._id}>Rs. {item.MinPr} to Rs. {item.MaxPr}</label>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

            <div className="box categoryFilter" id="categoryFilter">
                <div className="filterTitle">
                    <p>Color</p>
                    <div className="filterSearch" onClick={() => openMenu()}>
                        <input type="search" id="colorSearch" placeholder="Search Color" />
                        <span className="searchIcon"><i className="fas fa-search"></i></span>
                    </div>
                </div>
                <ul className="colorFilterList">
                    {
                        color.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Checkbox colorPrimary id={item._id} />
                                    <label htmlFor={item._id}><span className="colorView" style={{backgroundColor: `${item.Name}`}}></span> {item.Name} <span className="qty">({item.Qty})</span></label>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Filter
