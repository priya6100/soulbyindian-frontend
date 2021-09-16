import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsBySlug } from "../../../actions";
import Card from "../../../components/UI/Card";
import { BiRupee } from "react-icons/bi";
import { Link } from "react-router-dom";
import {Carousel, Container, Row, Col} from 'react-bootstrap'
import banner1 from '../../../images/logo/banner-3.jpg';
import banner2 from '../../../images/logo/women-banner.jpg';
import banner3 from '../../../images/kidBanner.jpeg';
import item1 from '../../../images/3.png';
import kid1 from '../../../assets/dress image/blazer.jpg';
import kid2 from '../../../assets/dress image/boy shirt.jfif';
import kid3 from '../../../assets/dress image/black jeans.jpg';
import kid4 from '../../../assets/dress image/belt.jpeg';
import kid5 from '../../../assets/dress image/bag2.jpg';
import kid6 from '../../../assets/dress image/bottle.jpg';
import midBanner from '../../../images/1.png';
import { FormControlLabel, Radio, RadioGroup, Checkbox } from "@material-ui/core";
import '../../../components/filter/filter.css'
import FilterSortingBar from '../../../components/filter/FilterSortingBar';


import "./style.css";
import { generatePublicUrl } from "../../../urlConfig";

/**
 * @author
 * @function ClothingAndAccessories
 **/


 const Filter = () => {
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
  
  return (
      <div className="filterContainer">
          <div className="box">
              <RadioGroup aria-label="gender" name="gender1" >
                  <FormControlLabel value="men" control={<Radio checked />} label="Men" />
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
                                  <Checkbox colorPrimary id={item._id} />
                                  <label htmlFor={item._id}>{item.Type} <span className="qty">({item.Qty})</span></label>
                              </li>
                          )
                      })
                  }
              </ul>
          </div>

          <div className="box categoryFilter" id="categoryFilter">
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
                                  <Checkbox colorPrimary id={item._id} />
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

const ClothingAndAccessories = (props) => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    const { match } = props;
    dispatch(getProductsBySlug(match.params.slug));
  }, []);

  return (
    <>
        <Carousel className="carousel slide carousel-inner">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="First slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Second slide"
    />

  
  </Carousel.Item>

</Carousel>
    {/* <div className="undefinedFlex1">
   
        {product.products.map((product) => (
          <div className="caContainer">
            <Link
              className="caImgContainer"
              to={`/${product.slug}/${product._id}/p`}
            >
              <img src={generatePublicUrl(product.productPictures[0].img)} />
            </Link>
            <div>
              <div className="caProductName">{product.name}</div>
              <div className="caProductPrice">
                <BiRupee />
                {product.price}
              </div>
            </div>
          </div>
        ))}
    
    </div> */
    
  
    
    
    }
    
    <br/>
    <FilterSortingBar/>
     <div className="ProductsContainer">
        <div className="filterSection show-md">
            <Filter />
        </div>


       
        <div className="productSection">

        <div className="undefinedFlex1 kidhidden">
          
          {product.products.map((product) => (
            <div className="caContainer">
              <Link
                className="caImgContainer"
                to={`/${product.slug}/${product._id}/p`}
              >
                <img src={generatePublicUrl(product.productPictures[0].img)} />
              </Link>
              <div>
                <div className="caProductName">{product.name}</div>
                <div className="caProductPrice">
                  <BiRupee />
                  {product.price}
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      
      {/* <SortingMobile /> */}
    </div>
    

     
{/* <section className="undefinedMidBanner">
 
<div className="kid-mid-banner">
<div className="kidMidImg">
            <img src={midBanner} alt="" />
           </div>
          <div className="kidMidText">
             <h5>Keep your lil ones safe</h5>
             <p className="kidMidText-p">Kids Masks</p>
             <h3>Upto <span style={{color:'#466886'}}>30%</span>  off</h3>
             <button>Shop Now</button>
          </div>
         
        </div> */}
        {/* <div className="ml-po">
          <div className="ml-sub-main">
          <div className="ml-sub">
          <img src={item1} alt="" />
          <h5>Starting at 458</h5>
          </div>
          <div className="ml-sub">
          <img src={item1} alt="" />
          <h5>Starting at 358</h5>
          </div>
          <div className="ml-sub">
          <img src={item1} alt="" />
          <h5>Starting at 258</h5>
          </div>
          </div>
        </div>
      */}
      {/* </section> */}

      <section>
           <Container>
              <div className="kid-last-container">
                <div className="upperFlex">
                 <div className="kidNewContainer">
                
                 <div className="kidLastImg kid1">
                   <img src={kid1} alt="" />
                </div>
                <div className="kidLastImg kid2">
                <img src={kid2} alt="" />
                </div>
               
                 </div>
                 <div class="kidNewTextContainer">
                 <h2>Topwear</h2>
                   <p>More Cuddly In These Cute Topwear</p>
                   <button>SHOP NOW</button>
                 </div>
                 </div>
               <div className="kidNewRightside">

               <div className="rightCard">
               <img src={kid3} alt="" />
               <p>Rompers</p>
               </div>
               <div className="rightCard">
               <img src={kid4} alt="" />
               <p>Rompers</p>
               </div>
              
               </div>
                   <div className="kidNewRightside">

               <div className="rightCard">
               <img src={kid5} alt="" />
               <p>Rompers</p>
               </div>
               <div className="rightCard">
               <img src={kid6} alt="" />
               <p>Rompers</p>
               </div>
              
               </div>
               
              </div>
              </Container>
      
     
      </section>
      {/* <section>
      <div className="card">
      <div className="undefinedFlex1">
   
   {product.products.map((product) => (
     <div className="caContainer">
       <Link
         className="caImgContainer"
         to={`/${product.slug}/${product._id}/p`}
       >
         <img src={generatePublicUrl(product.productPictures[0].img)} />
       </Link>
       <div>
         <div className="caProductName">{product.name}</div>
         <div className="caProductPrice">
           <BiRupee />
           {product.price}
         </div>
       </div>
     </div>
   ))}
</div>
      </div>
      </section> */}
    </>
  );
};

export default ClothingAndAccessories;