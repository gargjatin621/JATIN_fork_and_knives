import './App.css';
import React, {useEffect, useState } from 'react';
import logo from './images/logo1.png';
import food1 from './images/food1.jpg';
import food2 from './images/food2.jpg';
import food3 from './images/food3.jpg';
import food4 from './images/food4.jpg';
import food5 from './images/food5.jpg';
import food6 from './images/food6.jpg';
import food7 from './images/food7.jpg';
import food8 from './images/food8.jpg';
import food9 from './images/food9.jpg';
import food10 from './images/food10.jpg';
import food11 from './images/food11.jpg';
import chicken from './images/chicken.jpg';
import fries from './images/fries.jpg';
import onion from './images/onion.jpg';
import chickennugs from './images/chickennugs.jpg';
import taco from './images/taco.jpg';
import hotdog from './images/hotdog.jpg';
import icecream from './images/icecream.jpg';

import omlet from './images/omlet.jpg';
import wings from './images/wings.jpg';
import sandwich from './images/sandwich.jpg';
import oats from './images/oats.jpg';
import rolls from './images/rolls.jpg';
import special from './images/special.jpg';
import egg from './images/egg.jpg';
import greentea from './images/greentea.jpg';

import potatofill from './images/potatofill.jpg';
import ham from './images/ham.jpg';
import cheesesand from './images/cheesesand.jpg';
import salad from './images/salad.jpg';
import fishchips from './images/fishchips.jpg';

import q from './images/q.jpg';
import fish from './images/fish.jpg';
import beef from './images/beef.jpg';
import brorice from './images/brorice.jpg';
import Tortilla from './images/Tortilla.jpg';


import cooking from './images/cooking.jpg';
import deliver from './images/deliver.jpg';
import feedemployee from './images/feedemployee.jpg';

import sorry from './images/sorry.png';

import matarpaneer from './images/matarpaneer.jpg';
import aloo from './images/aloo.jpg';
import butterchicken from './images/butterchicken.jpg';
import Chutney from './images/Chutney.png';
import chai from './images/chai.webp';
import chanaaloo from './images/chanaaloo.jpg';
import lassi from './images/lassi.jpg';
import samosa from './images/samosa.jpg';
import tandorichicken from './images/tandorichicken.jpg';
import soup from './images/soup.jpg';
import roganjosh from './images/roganjosh.jpg';
import naan from './images/naan.jpg';

import mc from './images/mc.jpg';
import pizzahut from './images/pizzahut.jpg';
import dominos from './images/dominos.jpg';
import star from './images/star.jpg';
import kfc from './images/kfc.jpg';
import baskin from './images/baskin.jpg';

import c2 from './images/coupon2.jpg';
import c1 from './images/coupon1.jpg';
import contactus from './images/contactus.svg';

import signinimage from './images/signinimage.svg';
import signupimage from './images/signupimage.svg';
import locate from './images/locate.svg';
import endblack from './images/endblack.svg';

import qr from './images/qr.png';
import br from './images/brcode.png';

import { GoogleLogin } from 'react-google-login';
import { getByDisplayValue } from '@testing-library/dom';


function App() {
    let images = [special,rolls,food2,beef,food3,food4,matarpaneer,butterchicken,food5,food6,food7,food8,food9,food10,food11,hotdog,Tortilla,fish,ham,salad,samosa,soup,potatofill];
    let index = 0;
    function change() {
        document.getElementById("background-image").style.backgroundImage="url("+images[index]+")";
        index >=images.length-1 ? index = 0 : index++;
    }
    window.onload = function () {
        setInterval(change, 5000);
    };
    
    const [sidepanel,changeSidepanle]=useState("none")
    const [searchmodale,changeSearch]=useState("none")
    const [text,changeText]=useState("")
    const [page,changePage]=useState({
                                    "page1":"block",
                                    "page2":"none",
                                    "loginpage":"none",
                                    "signuppage":"none",
                                    "pagevid":"none",
                                    "pagepayment":"none",
                                    "profilepage":"none",
                                    "modaleFail":"none",
                                    "modaleSuccess":"none"
    })
    const [order,changeOrder]=useState([])
    const [orderprice,changePrice]=useState([])

    //admin icon
    const [admin,changeAdmin]=useState(<i class="fas fa-user fa-2x"></i>)

    // checkout
    const [bill,changeBill]=useState("none")

    //google login info
    const [Gname,changeGname]=useState("")
    const [Gimage,changeGimage]=useState("")
    const [Gemail,changeGemail]=useState("")
    const [Glogin,changeGlogin]=useState("0")
    const [Gid,changeGid]=useState("")
    
    // popup
    const [popup,changePopup]=useState("none")

    // profile info collect
    const [phoneno,changePhoneno]=useState("")
    const [address,changeAddress]=useState("")
    const [account,changeAccount]=useState("")
    const [bank,changeBank]=useState("")
    const [pincode,changePincode]=useState("")
    const [submitprofile,changeSubmitprofile]=useState("0")

    
    function work(changeGimage,changeGname,changeGemail,changeGlogin,Glogin)
    {
        var namelis=["Fried Chicken", "French Fries", "Onion Rings", "Chicken Nugs", "Tacos", "Pizza"," Hot Dogs","Ice Cream"
        ,"Boiled Eggs", "Omlet", "Sandwich", "Pancke", "Burrito", "Rs Special","Oats Bowl","Green Tea","Hot Dog", "Fried Chicken"
        ,"Sandwich", "Tacos", "Oats", "Pizza","French Fries","Onion Rings","Ham(Sand..)","Cheese(Sand..)","Salad","Spicy chicken",
        "Fish and chips","Potato Filling","Ice Cream","Rs Special","Quinoa","Spicy Fish","Beefy Stuffed","Broccoli Rice","Salad"
        ,"Tortilla","Rs Special","Ice Cream"]


        var pricelis=[1.23,3.23,2.43,4.53,6.21,3.11,4.22,5.00,1.02,2.33,3.13,1.58,5.21,6.11,2.62,3.56,3.02,1.33,4.13,3.58,2.21,4.11,3.62,2.56
        ,1.22,1.63,3.13,4.58,2.21,7.11,3.62,2.00,5.02,4.33,4.13,5.58,6.21,6.11,4.62,5.56]


        var images = [chicken, fries, onion, chickennugs, taco,food6,hotdog, icecream,egg, omlet, sandwich, food2, rolls,special
            ,oats, greentea,hotdog, wings, sandwich, taco, oats,food6,fries, onion,ham, cheesesand, salad, chicken, fishchips,
            potatofill,icecream, special,q, fish, beef, brorice, salad,Tortilla,special, icecream];
        var val = text;
        var regex = new RegExp( val, 'ig' );
        var lis=[];
        for(var i=0;i<namelis.length;i++)
        {
            if(namelis[i].match(regex))
            {
                lis.push(searchcardeach(namelis[i],pricelis[i],images[i]))
            }
            else
            {
                continue;
            }
        }
        if(lis.length==0)
        {
            return(<div className="sorry-outer">
                <img src={sorry} className="sorry"/>
            </div>
            )
        }
        return lis
    }
    
    function searchcardeach(name,price,image)
    {
        const a=<div className="main1-item-display"  style={{marginLeft:"40px",marginTop:"10px"}}>
        <img src={image} className="item-display-img"/>
            <div className="item-info">
            <div className="left-item">
                <span className="item-info-name">{name}</span>
            </div>
            <span className="item-info-price">${price}</span>
        </div>
    </div>
        return(
            <div className="search-main1-item-display">
                <img src={image} className="search-item-display-img"/>
                <div className="search-item-info">
                    <div className="search-left-item">
                        <span className="search-item-info-name">{name}</span>
                        <span className="search-item-info-price">${price}</span>
                    </div>
                    <div className="search-right-item" onMouseOut={()=>{changePopup("none")}} onClick={()=>{changeOrder(order=>[...order,a])
                                                             changePopup("block")
                                                            changePrice(orderprice=>[...orderprice,price])
                    }}>
                        <i className="fas fa-plus"></i> TO CART
                    </div>
                </div>
            </div>
        )
    }

    function finalpriceaftertax(orderprice)
    {
        var a=orderprice.reduce((a, b) => a + b, 0)
        var d=a.toFixed(2)
        var c=parseFloat(d)+parseFloat(d*0.1)
        return c
    }
    function orderpricedisplaybill(orderprice)
    {
        var a=orderprice.reduce((a, b) => a + b, 0)
        return (a.toFixed(2));
    }
    const responseGoogle = (response) => {
        console.log(response)
        changeGlogin("1")
        changeGname(response.profileObj.name)
        changeGimage(response.profileObj.imageUrl)
        changeGemail(response.profileObj.email)
        changeGid(response.profileObj.googleId)
    }


    return(
        <>
        {/* modale success*/}
        <div className="check-modale-success" style={{display:page.modaleSuccess}}>
            <div className="check-modale-inner">
                <div className="check-modale-inner-display">
                    <div className="check-modale-div-top">
                        <i class="fas fa-times fa-2x cross-alert" onClick={()=>changePage({loginpage:"none",signuppage:"none",page1:"none",page2:"none",pagevid:"none",pagepayment:"none",profilepage:"block",modaleFail:"none",modaleSuccess:"none"})}></i>
                    </div>
                    <div className="hrtag"></div>
                    <div className="check-modale-div-bottom">
                    <i class="fas fa-comment-check fa-2x" style={{color:"green"}}></i>{'\u00A0'}Information Saved Successfully !
                    </div>
                </div>
            </div>
        </div>
        {/* modale fail*/}
        <div className="check-modale-fail" style={{display:page.modaleFail}}>
            <div className="check-modale-inner">
                <div className="check-modale-inner-display">
                    <div className="check-modale-div-top">
                        <i class="fas fa-times fa-2x cross-alert" onClick={()=>changePage({loginpage:"none",signuppage:"none",page1:"none",page2:"none",pagevid:"none",pagepayment:"none",profilepage:"block",modaleFail:"none",modaleSuccess:"none"})}></i>
                    </div>
                    <div className="hrtag"></div>
                    <div className="check-modale-div-bottom">
                        Fill the required information *
                    </div>
                </div>
            </div>
        </div>

        {/* popup */}
        <div className="popup-added" style={{display:popup}}>
            <div className="popup-added-text">
                ADDED
            </div>
        </div>
        {/* signin */}
        <div className="overall-signin" style={{display:page.loginpage}}>
            <div className="signin-outer">
                <div className="signin-inner">
                    <img src={signinimage} className="signinimagecss"/>
                    <div className="signin-inner-display">
                        <div className="signin-text">
                            Login
                        </div>
                        <div className="signin-input">
                            <input type="username" id="user-login" name="username-login" placeholder="Username" type={"text"} className="search-bar-signin"/>
                            <input type="password" id="pass-login" name="password-login" placeholder="Password" type={"password"} className="search-bar-signin"/>
                        </div>
                        <div className="signin-remember">
                            <input type="checkbox" className="remember-me"/>Remember me 
                        </div>
                        <div className="signin-div">
                            <div className="signin-btn" onClick={()=>changeAdmin(<i class="fas fa-user-tie fa-2x"></i>)}>
                                LOGIN
                            </div>
                        </div>
                        <div className="signin-forget">
                            Forget Password
                        </div>
                        <div className="google-login">
                            <GoogleLogin
                                clientId="12638421748-adcs1tb8de2vk21g4rq3etaod7obfh95.apps.googleusercontent.com"
                                buttonText="Sign in with Google"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                            />
                        </div>
                        <div className="signin-signup">
                            <div className="signin-signup-inner" onClick={()=>changePage({loginpage:"none",signuppage:"block",page1:"none",page2:"none",pagevid:"none",pagepayment:"none",profilepage:"none",modaleFail:"none",modaleSuccess:"none"})}>
                                Not a member? Signup now
                            </div>
                        </div>
                    </div>
                    <div className="signin-close">
                        <div className="signin-close-btn" onClick={()=>changePage({loginpage:"none",signuppage:"none",page1:"block",page2:"none",pagevid:"none",pagepayment:"none",profilepage:"none",modaleFail:"none",modaleSuccess:"none"})}>
                            <i class="far fa-times fa-2x"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* signup */}
        <div className="overall-signup" style={{display:page.signuppage}}>
            <div className="signin-outer">
                <div className="signin-inner">
                    <img src={signupimage} className="signinimagecss"/>
                    <div className="signin-inner-display">
                        <div className="signin-text">
                            Sign Up
                        </div>
                        <div className="signup-input">
                            <input type="text" name="name-login" placeholder="Name"className="search-bar-signin"/>  
                            <input type="username" name="username-login" placeholder="Username"className="search-bar-signin"/>
                            <input type="password" name="password-login" placeholder="Password"className="search-bar-signin"/>
                            <input type="email" name="password-login" placeholder="Email@gmail.com"className="search-bar-signin"/>
                        </div>
                        <div className="signin-remember">
                            <input type="checkbox" className="remember-me"/>Remember me 
                        </div>
                        <div className="signin-div">
                            <div className="signin-btn">
                                SIGN UP
                            </div>
                        </div>
                        <div className="signin-forget">
                            Verify mail
                        </div>
                        <div className="signin-signup">
                            <div className="signin-signup-inner" onClick={()=>changePage({loginpage:"block",signuppage:"none",page1:"none",page2:"none",pagevid:"none",pagepayment:"none",profilepage:"none",modaleFail:"none",modaleSuccess:"none"})}>
                                Already a member? Login now
                            </div>
                        </div>
                    </div>
                    <div className="signin-close">
                        <div className="signin-close-btn" onClick={()=>changePage({loginpage:"none",signuppage:"none",page1:"block",page2:"none",pagevid:"none",pagepayment:"none",profilepage:"none",modaleFail:"none",modaleSuccess:"none"})}>
                            <i class="far fa-times fa-2x"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* overall site */}
        <div className="overall-site">
            {/* sidepanel */}
            <div className="sidepanel-out" style={{display:sidepanel}}>
                <div className="sidepanel-mid-outer">
                    <div className="sidepanel-inner">
                        <div className="side-inner-outer">
                            <div className="side-signin" onClick={()=>{changePage({loginpage:"block",signuppage:"none",page1:"none",page2:"none",pagevid:"none",pagepayment:"none",profilepage:"none",modaleFail:"none",modaleSuccess:"none"})
                                                                        changeSidepanle("none")
                            }}>
                                Sign in
                            </div>
                            <div className="side-other">
                                <div className="side-other-ele">
                                    Connect your restaurant
                                </div>
                                <div className="side-other-ele">
                                    Creat a bussiness account
                                </div>
                                <div className="side-other-ele">
                                    Sign up to deliver
                                </div>
                                <div className="side-other-ele" onClick={()=>{changePage({loginpage:"none",signuppage:"none",page1:"none",page2:"none",pagevid:"block",pagepayment:"none",profilepage:"none",modaleFail:"none",modaleSuccess:"none"})
                                                                            changeSidepanle("none")
                            }}>
                                    Watch our chef cook
                                </div>
                            </div>
                        </div>
                        <img src={logo} className="side-logo"/>
                    </div>
                    <div className="sidepanel-right"  onClick={()=>changeSidepanle("none")}>

                    </div>
                </div>
            </div>
            
            {/* videos */}
            <div className="vid-modale-outer" style={{display:page.pagevid}}>
                <div className="vid-modale-inner">
                    <div className="vid-heading">
                        <div className="vid-heading-left">
                            Professional Videos
                        </div>
                    </div>
                    <div className="vid-content">
                    <iframe className="vid" src="https://www.youtube.com/embed/s0eXLCN7Hi4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div className="vid-info">
                        Indian Inspired Dishes With Gordon Ramsay
                    </div>
                    <div className="vid-info">
                        Sheperd's Pie With Cheeze Champ Topping
                    </div>
                    <iframe className="vid" src="https://www.youtube.com/embed/jVm9MkIIEE0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe className="vid" src="https://www.youtube.com/embed/Ab67vBsL-uE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div className="vid-info">
                        Stress Free Cooking here!!
                    </div>
                    <div className="vid-info">
                        Ultimate Stake Sandwich
                    </div>
                    <iframe className="vid" src="https://www.youtube.com/embed/jwu2y9x5OlM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe className="vid" src="https://www.youtube.com/embed/9biIOtEYeHc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div className="vid-info">
                        Slow-Roasted Pork Belly | Gordon Ramsay
                    </div>
                    <div className="vid-info">
                        Gordon Ramsay's Guide To Steak
                    </div>
                    <iframe className="vid" src="https://www.youtube.com/embed/uNT_AxXrUGs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe className="vid" src="https://www.youtube.com/embed/s0eXLCN7Hi4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div className="vid-info">
                        Indian Inspired Dishes With Gordon Ramsay
                    </div>
                    <div className="vid-info">
                        Sheperd's Pie With Cheeze Champ Topping
                    </div>
                    <iframe className="vid" src="https://www.youtube.com/embed/jVm9MkIIEE0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>

            {/* search */}
            <div className="search-modale-outer" style={{display:searchmodale}}>
                <div className="search-modale-inner">
                    <div className="search-heading">
                        <div className="search-heading-left">
                            The one u searched..!
                        </div>
                        <div className="search-heading-right-inner" onClick={()=>changeSearch("none")}>
                            <i class="fas fa-times fa-2x"></i>
                        </div>
                    </div>
                    <div className="search-items">
                        {work(changeGimage,changeGname,changeGemail,changeGlogin,Glogin,changeGid)}
                    </div>
                </div>
            </div>

            <div id="navbar">
                {Navbar(changeSidepanle,changeSearch,changeText,changePage,admin,order,Gimage,Glogin)}
            </div>

            {/* cart */}
            <div className="cart" style={{display:page.page2}}>
                <div id="order">
                    {orderpart(order,changeOrder,orderprice,changePrice,bill,changeBill,changePage,Glogin,submitprofile)}
                </div>
            </div>
            {/* cart checkout recipt */}
            <div className="cart-modale" style={{display:bill}}>
                <div className="cart-modale-inner">
                    <div className="bill-heading">
                        <div className="bill-left">
                            Ordered Stuff
                        </div>
                        <div className="bill-right" onClick={()=>{changeBill("none")
                                                                changeOrder([])
                                                                changePrice([])
                    }}>
                            <i class="fas fa-times fa-2x"></i>
                        </div>
                    </div>
                    <div className="bill-display">
                        <div className="bill-display-left">
                            {order}
                        </div>
                        <div className="bill-display-right">
                            <div className="bill-right-person-info">
                                <div className="bill-right-person-heading">
                                    Details:
                                </div>
                                <div className="bill-right-person-details">
                                    <div className="bill-person-tag">Name :</div>
                                    <div className="bill-person-det">{Gname}</div>
                                </div>
                                <div className="bill-right-person-details">
                                    <div className="bill-person-tag">Email :</div>
                                    <div className="bill-person-det">{Gemail}</div>
                                </div>
                                <div className="bill-right-person-details">
                                    <div className="bill-person-tag">Phone Number :</div>
                                    <div className="bill-person-det">{phoneno}</div>
                                </div>
                                <div className="bill-right-person-details">
                                    <div className="bill-person-tag">Address :</div>
                                    <div className="bill-person-det">{address}</div>
                                </div>
                                <div className="bill-right-person-details">
                                    <div className="bill-person-tag">Id :</div>
                                    <div className="bill-person-det">{Gid}</div>
                                </div>
                                <div className="bill-right-person-details">
                                    <div className="bill-person-tag">Goods price :</div>
                                    <div className="bill-person-det">$ {orderpricedisplaybill(orderprice)}</div>
                                </div>
                                <div className="bill-right-person-details">
                                    <div className="bill-person-tag">Tax :</div>
                                    <div className="bill-person-det">10%</div>
                                </div>
                                <div className="bill-right-person-details">
                                    <div className="bill-person-tag">Total proce :</div>
                                    <div className="bill-person-det">$ {finalpriceaftertax(orderprice)}</div>
                                </div>
                                <div className="bill-right-person-details-success">
                                    <i class="fas fa-comment-check fa-5x" style={{color:"green"}}></i>
                                    <div className="payment-success">
                                        Payment was Successful
                                    </div>
                                </div>
                            </div>
                            <div className="bill-bar-qr">
                                <img src={br} className="bill-br"/>
                                <img src={qr} className="bill-br"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* profile */}
            <div id="profilepage" style={{display:page.profilepage}}>
                {profilefunc(Gimage,Gname,Gid,Gemail,Glogin,changePhoneno,changeAccount,changeBank,changeGid,changeGemail,changePincode,changeGname,changeAddress,changeSubmitprofile,address,phoneno,account,bank,changePage)}
            </div>
            {/* main page */}
            <div id="main-page" style={{display:page.page1}}>

                <div className="top-image" id="background-image">
                </div>

                <div id="display-text">
                    {Displaytext()}
                </div>


                <div id="main1">
                    {Main1(changeOrder,order,changePrice,orderprice,popup,changePopup)}
                </div>
            </div>
            {/* cart */}
            <div id="placing-order-online" style={{display:page.pagepayment}}>
                {onlineOrderPlacing(orderprice,order,bill,changeBill,bank,Gimage,Gname,Gid,Gemail,account,phoneno,address,Glogin)}
            </div>
        </div>
        </>
        );
    }
function Navbar(changeSidepanle,changeSearch,changeText,changePage,admin,order,Gimage,Glogin)
{
    function checkGlogin(Glogin,Gimage)
    {
        if(Glogin==0)
        {
            return(<i class="fad fa-user fa-2x"></i>)
        }
        else
        {
            return(<img src={Gimage} className="google-image-css"/>)
        }
    }
    return(
        <nav>
            <div className="left-nav">
            <i class="fad fa-bars fa-2x" onClick ={ () => changeSidepanle("block")} style={{cursor:'pointer'}}></i>
                <img src={logo} className="nav-logo"/>
            </div>

            <div className="mid-nav">
            <i class="fad fa-utensils fa-2x" style={{padding:10}}></i>
            <input type="text" name="searchfood" placeholder="Search.."className="search-bar" onFocus={e => changeSearch("block")} onChange={v=>changeText(v.target.value)} type={"text"}/>
            </div>

            <div className="right-nav">
                <div className="nav-home"  onClick={()=>changePage({loginpage:"none",signuppage:"none",page1:"none",page2:"none",pagevid:"block",pagepayment:"none",profilepage:"none",modaleFail:"none",modaleSuccess:"none"})}>
                    <i class="fad fa-video fa-2x"></i>
                </div>
                <div className="nav-home" onClick={()=>changePage({page1:"block",page2:"none",loginpage:"none",signuppage:"none",pagevid:"none",pagepayment:"none",profilepage:"none",modaleFail:"none",modaleSuccess:"none"})}>
                    <i class="fad fa-home-alt fa-2x"></i>
                </div>
                <div className="outernav-icon">
                    <div className="nav-counter">
                    {order.length}
                    </div>
                    <div className="nav-cart" onClick={()=>changePage({page1:"none",page2:"block",loginpage:"none",signuppage:"none",pagevid:"none",pagepayment:"none",profilepage:"none",modaleFail:"none",modaleSuccess:"none"})}>
                        <i class="fad fa-shopping-cart fa-2x"></i>
                    </div>
                </div>
                <div className="nav-profile" onClick={()=>changePage({page1:"none",page2:"none",loginpage:"none",signuppage:"none",pagevid:"none",pagepayment:"none",profilepage:"block",modaleFail:"none",modaleSuccess:"none"})}>
                    {checkGlogin(Glogin,Gimage)}
                </div>
            </div>
        </nav>
    )
}
// cart  #######################################################
function orderpart(order,changeOrder,orderprice,changePrice,bill,changeBill,changePage,Glogin,submitprofile)
{
    function orderpricedisplay(orderprice)
    {
        var a=orderprice.reduce((a, b) => a + b, 0)
        return (a.toFixed(2));
    }
    function movingtocheckout(Glogin,submitprofile,changePage)
    {
        if(Glogin=="1" && submitprofile=="1")
        {
            changePage({page1:"none",page2:"none",loginpage:"none",signuppage:"none",pagevid:"none",pagepayment:"block",profilepage:"none",modaleFail:"none",modaleSuccess:"none"})
            return (<></>)
        }
        if(Glogin=="1" && submitprofile=="0")
        {
            changePage({page1:"none",page2:"none",loginpage:"none",signuppage:"none",pagevid:"none",pagepayment:"none",profilepage:"block",modaleFail:"none",modaleSuccess:"none"})
            return (<></>)
        }
        if(Glogin=="0" && submitprofile=="1")
        {
            changePage({page1:"none",page2:"none",loginpage:"block",signuppage:"none",pagevid:"none",pagepayment:"none",profilepage:"none",modaleFail:"none",modaleSuccess:"none"})
            return (<></>)
        }
        if(Glogin=="0" && submitprofile=="0")
        {
            changePage({page1:"none",page2:"none",loginpage:"block",signuppage:"none",pagevid:"none",pagepayment:"none",profilepage:"none",modaleFail:"none",modaleSuccess:"none"})
            return (<></>)
        }
        return (<></>)
    }
    return(
        <>
        <div className="order-outer">
            <div className="placing-order">
                <div className="order-left">
                    <div className="your-order">
                        <div className="heading-order">
                            <div className="heading-order-inner">
                                Your Order
                            </div>
                        </div>

                        <div className="your-order-display">
                            {order}
                        </div>
                    </div>
                    <div className="order-button">
                        <div className="order-button-click" onClick={()=>{changeOrder([])
                                                                        changePrice([])
                        
                        }}>
                            Cancle Order
                        </div>
                        <div className="order-button-click"  onClick={()=>{changeOrder(order.splice(0,order.length-1))
                                                                            changePrice(orderprice.splice(0,orderprice.length-1))
                        }}>
                            Remove Last Added
                        </div>
                    </div>
                </div>
                <div className="order-right">
                    <div className="order-checkout">
                        <div className="total-outer">
                            <div className="total-amount">
                                Total Amount
                            </div>
                            <div className="total-amount">
                                $ {orderpricedisplay(orderprice)}/-
                            </div>
                        </div>
                        <div className="checkout-btn" onClick={()=>movingtocheckout(Glogin,submitprofile,changePage)}>
                            CHECKOUT
                        </div>
                    </div>
                    <img src={c1} className="coupon"/>
                    <img src={c2} className="coupon"/>
                </div>
            </div>
        </div>
        </>
    )
}
// profile function ############################################
function profilefunc(Gimage,Gname,Gid,Gemail,Glogin,changePhoneno,changeAccount,changeBank,changeGid,changeGemail,changePincode,changeGname,changeAddress,changeSubmitprofile,address,phoneno,account,bank,changePage)
{
    function checkGlogin(Glogin,Gimage)
    {
        if(Glogin==0)
        {
            return(<i class="fad fa-user fa-9x"></i>)
        }
        else
        {
            return(<img src={Gimage} className="editprofile-image"/>)
        }
    }
    function checkinginfofill(Gname,Gemail,Gid,address,phoneno,account,bank,changeSubmitprofile,changePage)
    {
        if(Gname.length>1 && Gemail.length>1 && Gid.length>1 && address.length>1 && phoneno.length>1 && account.length>1 && bank.length>1)
        {
            changeSubmitprofile("1")
            changePage({loginpage:"none",signuppage:"none",page1:"none",page2:"none",pagevid:"none",pagepayment:"none",profilepage:"block",modaleFail:"none",modaleSuccess:"block"})
            return(<></>)
        }
        else
        {
            changePage({page1:"none",page2:"none",loginpage:"none",signuppage:"none",pagevid:"none",pagepayment:"none",profilepage:"block",modale:"block"})
            return(<></>)
        }
    }
    return(
        <>
            <div className="profile_outer">
                <div className="profile_left">
                    <div className="profile-left-ele">
                        Edit Profile
                    </div>
                    <div className="profile-left-ele" style={{backgroundColor:"orange"}} onClick={()=>checkinginfofill(Gname,Gemail,Gid,address,phoneno,account,bank,changeSubmitprofile,changePage)}>
                        Save Info
                    </div>
                </div>
                <div className="profile_right">
                    <div className="profile-right-editprofile">
                        <div className="editprofile-text">
                            EDIT PROFILE
                        </div>
                        <div className="profileimage_outer">
                            {checkGlogin(Glogin,Gimage)}
                        </div>
                    </div>
                    <div className="profile-online-payment-infodisplay">
                        <div className="profile-online-payment-info-ele">
                            <div className="profile-online-payment-ele-inner">
                                <div className="profile-payment-input-label">
                                    Name *
                                </div>
                                <input type="text" placeholder={Gname} className="profile-payment-input" onChange={v=>changeGname(v.target.value)} type={"text"}/>
                            </div>
                            <div className="profile-online-payment-ele-inner">
                                <div className="profile-payment-input-label">
                                    Phone Number *
                                </div>
                                <input type="number" className="profile-payment-input" onChange={v=>changePhoneno(v.target.value)} type={"number"}/>
                            </div>
                        </div>
                        <div className="profile-online-payment-info-ele">
                            <div className="profile-online-payment-ele-inner">
                                <div className="profile-payment-input-label">
                                    Email *
                                </div>
                                <input type="email" placeholder={Gemail} className="profile-payment-input" onChange={v=>changeGemail(v.target.value)} type={"email"}/>
                            </div>
                            <div className="profile-online-payment-ele-inner">
                                <div className="profile-payment-input-label">
                                    Id *
                                </div>
                                <input type="number" placeholder={Gid} className="profile-payment-input" onChange={v=>changeGid(v.target.value)} type={"text"}/>
                            </div>
                        </div>
                        <div className="profile-online-payment-info-ele">
                            <div className="profile-online-payment-ele-inner">
                                <div className="profile-payment-input-label">
                                    Address *
                                </div>
                                <input type="text" className="profile-payment-input" onChange={v=>changeAddress(v.target.value)} type={"text"}/>
                            </div>
                            <div className="profile-online-payment-ele-inner">
                                <div className="profile-payment-input-label">
                                    Pincode
                                </div>
                                <input type="text" className="profile-payment-input" onChange={v=>changePincode(v.target.value)} type={"text"}/>
                            </div>
                        </div>
                        <div className="profile-online-payment-info-ele">
                            <div className="profile-online-payment-ele-inner">
                                <div className="profile-payment-input-label">
                                    Account Number *
                                </div>
                                <input type="number" className="profile-payment-input" onChange={v=>changeAccount(v.target.value)} type={"number"}/>
                            </div>
                            <div className="profile-online-payment-ele-inner">
                                <div className="profile-payment-input-label">
                                    Bank / Branch *
                                </div>
                                <input type="text" className="profile-payment-input" onChange={v=>changeBank(v.target.value)} type={"text"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
// bill payment gateway ########################################
function onlineOrderPlacing(orderprice,order,bill,changeBill,bank,Gimage,Gname,Gid,Gemail,account,phoneno,address,Glogin)
{
    function finalpriceaftertax(orderprice)
    {
        var a=orderprice.reduce((a, b) => a + b, 0)
        var d=a.toFixed(2)
        var c=parseFloat(d)+parseFloat(d*0.1)
        return c.toFixed(2)
    }
    function checkGlogin(Glogin,Gimage)
    {
        if(Glogin==0)
        {
            return(<i class="fad fa-user fa-8x"></i>)
        }
        else
        {
            return(<img src={Gimage} className="editprofile-image"/>)
        }
    }
    return(
        <>
        <div className="online-order-outer">
            <div className="online-order-inner">
                <div class="online-payment-left">
                    <div className="online-payment-heading">
                        Required Information:
                    </div>
                    <div className="online-payment-imagedisplay">
                        {checkGlogin(Glogin,Gimage)}
                    </div>
                    <div className="online-payment-infodisplay">
                        <div className="online-payment-info-ele">
                            <div className="online-payment-ele-inner">
                                <div className="payment-input-label">
                                    Name
                                </div>
                                <input type="text" placeholder={Gname} className="payment-input"/>
                            </div>
                            <div className="online-payment-ele-inner">
                                <div className="payment-input-label">
                                    Phone Number
                                </div>
                                <input type="number" placeholder={phoneno} className="payment-input"/>
                            </div>
                        </div>
                        <div className="online-payment-info-ele">
                            <div className="online-payment-ele-inner">
                                <div className="payment-input-label">
                                    Email
                                </div>
                                <input type="email" placeholder={Gemail} className="payment-input"/>
                            </div>
                            <div className="online-payment-ele-inner">
                                <div className="payment-input-label">
                                    Id
                                </div>
                                <input type="number" placeholder={Gid} className="payment-input"/>
                            </div>
                        </div>
                        <div className="online-payment-info-ele">
                            <div className="online-payment-ele-inner">
                                <div className="payment-input-label">
                                    Address
                                </div>
                                <input type="text" placeholder={address} className="payment-input"/>
                            </div>
                            <div className="online-payment-ele-inner">
                                <div className="payment-input-label">
                                    Bank Name / Branch
                                </div>
                                <input type="text" placeholder={bank} className="payment-input"/>
                            </div>
                        </div>
                        <div className="online-payment-info-ele">
                            <div className="online-payment-ele-inner">
                                <div className="payment-input-label">
                                    Account Number
                                </div>
                                <input type="number" placeholder={account} className="payment-input"/>
                            </div>
                            <div className="online-payment-ele-inner">
                                <div className="payment-input-label">
                                    Total Purchase Amount + 10% Tax
                                </div>
                                <div className="payment-input-price">$ {finalpriceaftertax(orderprice)}/-</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="online-payment-right">
                    <div className="online-payment-coupon">
                        <div className="payment-coupon-label">
                            Enter Coupon Code
                        </div>
                        <input type="text" class="payment-input-check"/>
                        <div className="coupon-checker">
                            Check
                        </div>
                        <div className="online-payment-finalprice-button">
                            <div className="online-payment-finalprice">
                                $ {finalpriceaftertax(orderprice)}/-
                            </div>
                            <div className="online-payment-button" onClick={()=>changeBill("block")}>
                                PAY
                            </div>
                        </div>
                    </div>
                    <div className="online-payment-items">
                        {order}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
// main page  ##################################################
function Displaytext()
{
    return(
    <div className="display-text">
        <div className="display-text-top-div">
            Life’s too short for boring food...
        </div>

        <div className="display-text-middle-div">
            <i className="fas fa-map-marker-alt  fa-2x" style={{padding:10,paddingTop:5}}></i>
            <input type="text" name="searchfood" placeholder="Enter Delivery Address.."className="search-bar" style={{width:"40%",height:"95%"}}/>
            
            <div className="dropdown">
                <button className="dropbtn"><i className="far fa-clock"></i><span>Deliver Now</span><i className="fas fa-caret-down"></i></button>
                <div className="dropdown-content">
                <a href="#"><i className="far fa-clock"></i><span>Deliver Nowww!!</span></a>
                <a href="#"><i className="fas fa-archive"></i><span>Schedule for later</span></a>
                </div>
            </div>

            <div className="get-food">
                Find!!
            </div>
        </div>

        <div className="display-text-bottom-div">
            <a href="#">Sign In</a><span> {'\u00A0'}for ur recent address</span>
        </div>
    </div>
    )
}

function Main1(changeOrder,order,changePrice,orderprice,popup,changePopup)
{

    function fastfoodrow()
    {
        var namelis=["Fried Chicken", "French Fries", "Onion Rings", "Chicken Nugs", "Tacos", "Pizza"," Hot Dogs","Ice Cream"]
        var pricelis=[1.23,3.45,2.55,4.53,6.21,3.11,4.22,5.00]
        var images = [chicken, fries, onion, chickennugs, taco,food6,hotdog, icecream];
        var li = [];
        for (var i = 0; i < 8; i++) {
            li.push(fastfoodinfochange(namelis[i],pricelis[i],images[i]));
        }
        return li
    }
    
    function fastfoodinfochange(name,price,image)
    {
        const a=<div className="main1-item-display" style={{marginLeft:"40px",marginTop:"10px"}}>
        <img src={image} className="item-display-img"/>
            <div className="item-info">
            <div className="left-item">
                <span className="item-info-name">{name}</span>
            </div>
            <span className="item-info-price">${price}</span>
        </div>
    </div>
        return(
        <div className="main1-item-display">
            <img src={image} className="item-display-img"/>
                <div className="item-info">
                <div className="left-item">
                    <span className="item-info-name">{name}</span>
                    <span className="item-info-price">${price}</span>
                </div>
                <div className="right-item" onMouseOut={()=>{changePopup("none")}} onClick={()=>{
                                                        changeOrder(order=>[...order,a])
                                                        changePopup("block")
                                                        changePrice(orderprice=>[...orderprice,price])
                }}>
                    <i className="fas fa-plus"></i>TO CART
                </div>
            </div>
        </div>
        )
    }
    const a= <>
        <div className="main1-info-onclick">
            <div className="heading">
                <div className="heading-left">
                    All Available
                </div>
                <div className="heading-right">
                    Fast Food
                </div>
            </div>
            <div className="main1-info-onclick-display">
                {fastfoodrow()}
            </div>
        </div>
    </>


    function breatfastrow()
    {
        var namelis=["Boiled Eggs", "Omlet", "Sandwich", "Pancke", "Burrito", "Rs Special","Oats Bowl","Green Tea"]
        var pricelis=[1.02,2.33,3.13,1.58,5.21,6.11,2.62,3.56]
        var images = [egg, omlet, sandwich, food2, rolls,special,oats, greentea];
        var li = [];
        for (var i = 0; i < 8; i++) {
            li.push(breakfastinfochange(namelis[i],pricelis[i],images[i]));
        }
        return li
    }
    function breakfastinfochange(name,price,image)
    {
        const a=<div className="main1-item-display" style={{marginLeft:"40px",marginTop:"10px"}}>
        <img src={image} className="item-display-img"/>
            <div className="item-info">
            <div className="left-item">
                <span className="item-info-name">{name}</span>
            </div>
            <span className="item-info-price">${price}</span>
        </div>
    </div>
        return(
            <div className="main1-item-display">
                <img src={image} className="item-display-img"/>
                <div className="item-info">
                    <div className="left-item">
                        <span className="item-info-name">{name}</span>
                        <span className="item-info-price">${price}</span>
                    </div>
                    <div className="right-item" onMouseOut={()=>{changePopup("none")}} onClick={()=>{changeOrder(order=>[...order,a])
                                                            changePopup("block")
                                                            changePrice(orderprice=>[...orderprice,price])
                    }}>
                        <i className="fas fa-plus"></i> TO CART
                    </div>
                </div>
            </div>
        )
    } 
    const b=<>
    <div className="main1-info-onclick">
        <div className="heading">
            <div className="heading-left">
                All Available
            </div>
            <div className="heading-right">
                Breakfast
            </div>
        </div>
                

        <div className="main1-info-onclick-display">
            {breatfastrow()}
        </div>
    </div>
    </>
    
    function brunchrow()
    {
        var namelis=["Hot Dog", "Fried Chicken", "Sandwich", "Tacos", "Oats", "Pizza","French Fries","Onion Rings"]
        var pricelis=[3.02,1.33,4.13,3.58,2.21,4.11,3.62,2.56]
        var images = [hotdog, wings, sandwich, taco, oats,food6,fries, onion];
        var li = [];
        for (var i = 0; i < 8; i++) {
            li.push(brunchinfo(namelis[i],pricelis[i],images[i]));
        }
        return li
    }

    function brunchinfo(name,price,image)
    {
        const a=<div className="main1-item-display" style={{marginLeft:"40px",marginTop:"10px"}}>
        <img src={image} className="item-display-img"/>
            <div className="item-info">
            <div className="left-item">
                <span className="item-info-name">{name}</span>
            </div>
            <span className="item-info-price">${price}</span>
        </div>
    </div>
        return(
            <div className="main1-item-display">
                <img src={image} className="item-display-img"/>
                <div className="item-info">
                    <div className="left-item">
                        <span className="item-info-name">{name}</span>
                        <span className="item-info-price">${price}</span>
                    </div>
                    <div className="right-item" onMouseOut={()=>{changePopup("none")}} onClick={()=>{changeOrder(order=>[...order,a])
                                                            changePopup("block")
                                                            changePrice(orderprice=>[...orderprice,price])
                    }}>
                        <i className="fas fa-plus"></i> TO CART
                    </div>
                </div>
            </div>
        )
    }
    const c=<>
    <div className="main1-info-onclick">
        <div className="heading">
            <div className="heading-left">
                All Available
            </div>
            <div className="heading-right">
                Brunch{'\u00A0'}<i class="fad fa-burger-soda"></i>
            </div>
        </div>


        <div className="main1-info-onclick-display">
            {brunchrow()}
        </div>
    </div>
    </>
    
    function lunchrow(){
        var namelis=["Ham(Sand..)","Cheese(Sand..)","Salad","Spicy chicken","Fish and chips","Potato Filling","Ice Cream","Rs Special"]
        var pricelis=[1.22,1.63,3.13,4.58,2.21,7.11,3.62,2.00]
        var images = [ham, cheesesand, salad, chicken, fishchips,potatofill,icecream, special];
        var li = [];
        for (var i = 0; i < 8; i++) {
            li.push(lunchinfo(namelis[i],pricelis[i],images[i]));
        }
        return li
    }

    function lunchinfo(name,price,image)
    {
        const a=<div className="main1-item-display" style={{marginLeft:"40px",marginTop:"10px"}}>
        <img src={image} className="item-display-img"/>
            <div className="item-info">
            <div className="left-item">
                <span className="item-info-name">{name}</span>
            </div>
            <span className="item-info-price">${price}</span>
        </div>
    </div>
        return(
            <div className="main1-item-display">
                <img src={image} className="item-display-img"/>
                <div className="item-info">
                    <div className="left-item">
                        <span className="item-info-name">{name}</span>
                        <span className="item-info-price">${price}</span>
                    </div>
                    <div className="right-item" onMouseOut={()=>{changePopup("none")}} onClick={()=>{changeOrder(order=>[...order,a])
                                                             changePopup("block")
                                                            changePrice(orderprice=>[...orderprice,price])
                    }}>
                        <i className="fas fa-plus"></i> TO CART
                    </div>
                </div>
            </div>
        )
    }
    const d=<>
        <div className="main1-info-onclick">
            <div className="heading">
                <div className="heading-left">
                    All Available
                </div>
                <div className="heading-right">
                    Lunch{'\u00A0'}<i class="fad fa-sandwich"></i>
                </div>
            </div>

            <div className="main1-info-onclick-display">
            {lunchrow()}
            </div>
        </div>
        </>

    function dinnerrow()
    {
        var namelis=["Quinoa","Spicy Fish","Beefy Stuffed","Broccoli Rice","Salad","Tortilla","Rs Special","Ice Cream"]
        var pricelis=[5.02,4.33,4.13,5.58,6.21,6.11,4.62,5.56]
        var images = [q, fish, beef, brorice, salad,Tortilla,special, icecream];
        var li = [];
        for (var i = 0; i < 8; i++) {
            li.push(dinnerinfo(namelis[i],pricelis[i],images[i]));
        }
        return li
    }

    function dinnerinfo(name,price,image)
    {
        const a=<div className="main1-item-display" style={{marginLeft:"40px",marginTop:"10px"}}>
        <img src={image} className="item-display-img"/>
            <div className="item-info">
            <div className="left-item">
                <span className="item-info-name">{name}</span>
            </div>
            <span className="item-info-price">${price}</span>
        </div>
    </div>
        return(
            <div className="main1-item-display">
                <img src={image} className="item-display-img"/>
                <div className="item-info">
                    <div className="left-item">
                        <span className="item-info-name">{name}</span>
                        <span className="item-info-price">${price}</span>
                    </div>
                    <div className="right-item" onMouseOut={()=>{changePopup("none")}} onClick={()=>{changeOrder(order=>[...order,a])
                                                                changePopup("block")
                                                                changePrice(orderprice=>[...orderprice,price])
                    }}>
                        <i className="fas fa-plus"></i> TO CART
                    </div>
                </div>
            </div>
        )
    }
    const e=<>
    <div className="main1-info-onclick">
        <div className="heading">
            <div className="heading-left">
                All Available
            </div>
            <div className="heading-right">
                Dinner{'\u00A0'}<i class="fad fa-turkey"></i>
            </div>
        </div>


        <div className="main1-info-onclick-display">
            {dinnerrow()}
        </div>
    </div>
    </>
    const [display,changeDisplay]=useState({
                                            "overalldiv":"",
                                            "innercard":"",
                                            "togglechange":0,
    })

    var fastfood=(x)=>
    {
        if(x==0)
        {
            if(display.togglechange==0)
            {
                changeDisplay(display => ({...display, overalldiv: ""}))
                changeDisplay(display => ({...display, togglechange: 0}))
            }
            if(display.togglechange==0)
            {
                changeDisplay(display => ({...display, overalldiv: a}))
                changeDisplay(display => ({...display, togglechange: 0}))
            }
        }
        if(x==1)
        {
            if(display.togglechange==0)
            {
                changeDisplay(display => ({...display, overalldiv: ""}))
                changeDisplay(display => ({...display, togglechange: 0}))
            }
            if(display.togglechange==0)
            {
                changeDisplay(display => ({...display, overalldiv: b}))
                changeDisplay(display => ({...display, togglechange: 0}))
            }
        }
        if(x==2)
        {
            if(display.togglechange==0)
            {
                changeDisplay(display => ({...display, overalldiv: ""}))
                changeDisplay(display => ({...display, togglechange: 0}))
            }
            if(display.togglechange==0)
            {
                changeDisplay(display => ({...display, overalldiv: c}))
                changeDisplay(display => ({...display, togglechange: 0}))
            }
        }
        if(x==3)
        {
            if(display.togglechange==0)
            {
                changeDisplay(display => ({...display, overalldiv: ""}))
                changeDisplay(display => ({...display, togglechange: 0}))
            }
            if(display.togglechange==0)
            {
                changeDisplay(display => ({...display, overalldiv: d}))
                changeDisplay(display => ({...display, togglechange: 0}))
            }
        }
        if(x==4)
        {
            if(display.togglechange==0)
            {
                changeDisplay(display => ({...display, overalldiv: ""}))
                changeDisplay(display => ({...display, togglechange: 0}))
            }
            if(display.togglechange==0)
            {
                changeDisplay(display => ({...display, overalldiv: e}))
                changeDisplay(display => ({...display, togglechange: 0}))
            }
        }
    }

    
    return(
        <div className="main-1">

            <div className="heading">
                <div className="heading-left">
                    Food Near Me
                </div>
            </div>


            <div id="Maine1info">
                <div className="main1-info">
                    <div className="main1-info-inner" onClick={()=>fastfood(0)}>
                        <img src={food11} className="main1-food"/>
                        <span className="main1-food-text">Fast-Food</span>
                    </div>
                    <div className="main1-info-inner" onClick={()=>fastfood(1)}>
                        <img src={food2} className="main1-food"/>
                        <span className="main1-food-text">break-fast</span>
                    </div>
                    <div className="main1-info-inner" onClick={()=>fastfood(2)}>
                        <img src={omlet} className="main1-food"/>
                        <span className="main1-food-text">brunch</span>
                    </div>
                    <div className="main1-info-inner" onClick={()=>fastfood(3)}>
                        <img src={special} className="main1-food"/>
                        <span className="main1-food-text">lunch</span>
                    </div>
                    <div className="main1-info-inner" onClick={()=>fastfood(4)}>
                        <img src={beef} className="main1-food"/>
                        <span className="main1-food-text">Dinner</span>
                    </div>
                </div>
            </div>
            {display.overalldiv}
            <div id="main2-info">
                {Main2info(changeOrder,order,changePrice,orderprice,changePopup)}
            </div>
            <div id="main3-info">
                {Main3info()}
            </div>
            <div id="main4-info">
                {Main4info(changeOrder,order,changePrice,orderprice,changePopup)}
            </div>
            <div id="main5-info">
                {Main5info(changeOrder,order,changePrice,orderprice,changePopup)}
            </div>
            <div id="main6-info">
                {Main6info(changeOrder,order,changePrice,orderprice,changePopup)}
            </div>
            <div id="main7-info">
                {Main7info()}
            </div>
            <div id="main8-info">
                {Main8info()}
            </div>
            <div id="main9-info">
                {Main9info()}
            </div>

        </div>
    )
}


function Main2info(changeOrder,order,changePrice,orderprice,changePopup)
{
    const [click,changeClick]=useState({
                                        "bombaystart":0,
                                        "bombayend":3
    })
    var images = [food11, food2, hotdog, chickennugs, cheesesand,icecream];
    var namelis=["Burger","Pancake","Mcpuff","Chicken Nugs","CheezeBurger","Muffin"]
    var pricelis=[1.43,4.32,2.33,5.0,5.55,2.54,3.21,1.44]
    function mumbaimixrow()
    {
        var li = [];
        for (var i = click.bombaystart; i < click.bombayend; i++) {
            li.push(card_html(namelis[i],pricelis[i],images[i]));
        }
        return li
    }

    function card_html(name,price,image)
    {
        const a=<div className="main1-item-display" style={{marginLeft:"40px",marginTop:"10px"}}>
        <img src={image} className="item-display-img"/>
            <div className="item-info">
            <div className="left-item">
                <span className="item-info-name">{name}</span>
            </div>
            <span className="item-info-price">${price}</span>
        </div>
    </div>
        return(
            <div className="main2-info-card">
            <img src={image} className="main2-info-card-img"/>
            <div className="item-info">
                <div className="left-item">
                    <span className="item-info-name">{name}</span>
                    <span className="item-info-price">${price}</span>
                </div>
                <div className="right-item" onMouseOut={()=>{changePopup("none")}} onClick={()=>{changeOrder(order=>[...order,a])
                                                            changePopup("block")
                                                            changePrice(orderprice=>[...orderprice,price])
                    }}>
                    <i className="fas fa-plus"></i> TO CART
                </div>
            </div>
        </div>
        )
    }
    return (
        <>
        <div className="main2-heading">
            <div className="main2-heading-left">
                Best Seller!!
            </div>
            <div className="main2-heading-right">
                <i className="fas fa-arrow-circle-left"style={{cursor: "pointer"}} 
                onClick = {() => changeClick({bombaystart:0,bombayend:3})}></i><i className="fas fa-arrow-circle-right right-arrow" 
                style={{cursor: "pointer"}} onClick = {() =>changeClick({bombaystart:3,bombayend:6})} ></i>
            </div>
        </div>
        <div className="main2-info">
            {mumbaimixrow()}
        </div>
        </>
    )

}



function Main3info()
{
    function bussiness()
    {
        var images = [cooking, feedemployee, deliver];
        var namelis=["Wante us to deliver for you?","Want to start a bussiness ?","Wanna deliver with us?"]
        var aboutlis=["Connect your restaurant","Creat a bussiness account","Sign up to deliver"]
        var li = [];
        for (var i = 0; i < 3; i++) {
            li.push(bussinesscard(namelis[i],images[i],aboutlis[i]));
        }
        return li
    }

    function bussinesscard(name,image,about)
    {
        return (
            <div className="main3-info-card">
                <img src={image} className="main3-info-card-img"/>
                <div className="main3-info-card-text">{name}</div>
                <div className="main3-info-card-link">{about}</div>
            </div>
        )
    }
    return(
        <>
        <div className="main3-heading">
            <div className="main3-heading-left">
                Wanna Start Bussiness
            </div>
        </div>
        <div className="main3-info">

            {bussiness()}
            
        </div>
        </>
    )
}

function Main4info(changeOrder,order,changePrice,orderprice,changePopup)
{
    const [india,indiaChange]=useState({
                                        "indiastart":0,
                                        "indiaend":6
    })
    var images = [butterchicken, samosa, aloo, naan, matarpaneer,roganjosh, tandorichicken, chanaaloo,chai,lassi, Chutney, soup];
    var namelis=["Butter Chicken","Samosas","Aloo Gobi","Naan","Matar Paneer","Rogan Josh","Tandoori Chicken","Chana Aloo","Masala Chai","Lassi","Chutney","Tomato Soup"]
    var pricelis=[1.43,4.32,2.33,5.10,5.55,2.54,3.21,1.44,1.43,4.32,2.33,5.0,5.55,2.54,3.21,1.44]
    function indianspecial()
    {
        var li = [];
        for (var i = india.indiastart; i < india.indiaend; i++) {
            li.push(indianspecialcard(namelis[i],pricelis[i],images[i]));
        }
        return li
    }
    function indianspecialcard(name,price,image)
    {
        const a=<div className="main1-item-display" style={{marginLeft:"40px",marginTop:"10px"}}>
        <img src={image} className="item-display-img"/>
            <div className="item-info">
            <div className="left-item">
                <span className="item-info-name">{name}</span>
            </div>
            <span className="item-info-price">${price}</span>
        </div>
    </div>
        return(
            <div className="main4-info-card">
            <img src={image} className="main4-info-card-img"/>
            <div className="item-info">
                <div className="left-item">
                    <span className="item-info-name">{name}</span>
                    <span className="item-info-price">${price}</span>
                </div>
                <div className="right-item" onMouseOut={()=>{changePopup("none")}} onClick={()=>{changeOrder(order=>[...order,a])
                                                            changePopup("block")
                                                            changePrice(orderprice=>[...orderprice,price])
                    }}>
                    <i className="fas fa-plus"></i> TO CART
                </div>
            </div>
        </div>
        )
    }
    return(
        <>
        <div className="main4-heading">
            <div className="main4-heading-left">
                Indian Special
            </div>
            <div className="main4-heading-right">
                <i className="fas fa-arrow-circle-left"style={{cursor: "pointer"}} onClick={()=>indiaChange({indiastart:0,indiaend:6})} ></i><i className="fas fa-arrow-circle-right" style={{cursor: "pointer"}} onClick={()=>indiaChange({indiastart:6,indiaend:12})}></i>
            </div>
        </div>
        <div className="main4-info">
            {indianspecial()}
        </div>
        </>
    )
}
function Main5info(changeOrder,order,changePrice,orderprice,changePopup)
{
    const [chd,changeChd]=useState({
                                    "chdstart":0,
                                    "chdend":3
})
    var namelis=["Ham(Sand..)","Cheese(Sand..)","Salad","Spicy chicken","Fish and chips","Potato Filling"]
    var pricelis=[1.22,1.63,3.13,4.58,2.21,7.11]
    var images = [ham, cheesesand, salad, chicken, fishchips,potatofill];
    function chandigarhde()
    {
        var li = [];
        for (var i = chd.chdstart; i < chd.chdend; i++) {
        li.push(chdcard(namelis[i],pricelis[i],images[i]));
        }
        return li
    }
    function chdcard(name,price,image)
    {
        const a=<div className="main1-item-display" style={{marginLeft:"40px",marginTop:"10px"}}>
        <img src={image} className="item-display-img"/>
            <div className="item-info">
            <div className="left-item">
                <span className="item-info-name">{name}</span>
            </div>
            <span className="item-info-price">${price}</span>
        </div>
    </div>
        return(
            <div className="main5-info-card">
                <img src={image} className="main5-info-card-img"/>
                    <div className="item-info">
                        <div className="left-item">
                        <span className="item-info-name">{name}</span>
                        <span className="item-info-price">${price}</span>
                        </div>
                        <div className="right-item" onMouseOut={()=>{changePopup("none")}} onClick={()=>{changeOrder(order=>[...order,a])
                                                                    changePopup("block")
                                                                    changePrice(orderprice=>[...orderprice,price])
                        }}>
                        <i className="fas fa-plus"></i> TO CART
                    </div>
                </div>
            </div>
            )
    }
    return(
        <>
        <div className="main5-heading">
            <div className="main5-heading-left">
                We deliver lunch in Chandigarh
            </div>
            <div className="main5-heading-right">
                <i className="fas fa-arrow-circle-left"style={{cursor: "pointer"}} onClick={()=>changeChd({chdstart:0,chdend:3})}></i><i className="fas fa-arrow-circle-right" style={{cursor: "pointer"}} onClick={()=>changeChd({chdstart:3,chdend:6})}></i>
            </div>
        </div>
        <div className="main5-info">
            {chandigarhde()}
        </div>
        </>
    )
}

function Main6info(changeOrder,order,changePrice,orderprice,changePopup)
{
    const [ban,changeBan]=useState({
                                    "banstart":0,
                                    "banend":3
    })
    var namelis=["French Fries", "Chicken Nugs", "Tacos", "Pizza"," Hot Dogs","Ice Cream"]
    var pricelis=[3.23,4.53,6.21,3.11,4.22,5.00]
    var images = [fries, chickennugs, taco,food6,hotdog, icecream];
    function banglurude()
    {
        var li = [];
        for (var i = ban.banstart; i < ban.banend; i++) {
        li.push(bancard(namelis[i],pricelis[i],images[i]));
        }
        return li
    }
    function bancard(name,price,image)
    {
        const a=<div className="main1-item-display" style={{marginLeft:"40px",marginTop:"10px"}}>
        <img src={image} className="item-display-img"/>
            <div className="item-info">
            <div className="left-item">
                <span className="item-info-name">{name}</span>
            </div>
            <span className="item-info-price">${price}</span>
        </div>
    </div>
        return(
            <div className="main5-info-card">
                <img src={image} className="main5-info-card-img"/>
                    <div className="item-info">
                        <div className="left-item">
                        <span className="item-info-name">{name}</span>
                        <span className="item-info-price">${price}</span>
                        </div>
                        <div className="right-item" onMouseOut={()=>{changePopup("none")}} onClick={()=>{changeOrder(order=>[...order,a])
                                                                    changePopup("block")
                                                                    changePrice(orderprice=>[...orderprice,price])
                    }}>
                        <i className="fas fa-plus"></i> TO CART
                    </div>
                </div>
            </div>
            )
    }
    return(
        <>
        <div className="main5-heading">
            <div className="main5-heading-left">
                We deliver fast food in Bengaluru
            </div>
            <div className="main5-heading-right">
                <i className="fas fa-arrow-circle-left"style={{cursor: "pointer"}} onClick={()=>changeBan({banstart:0,banend:3})}></i><i className="fas fa-arrow-circle-right" style={{cursor: "pointer"}} onClick={()=>changeBan({banstart:3,banend:6})}></i>
            </div>
        </div>
        <div className="main5-info">
            {banglurude()}
        </div>
        </>
    )
}

function Main7info()
{
    function companylogo()
    {
        var link=["https://www.mcdelivery.co.in/home/trending","https://www.pizzahut.co.in/"
        ,"https://www.dominos.co.in/","https://www.starbucks.in/","https://online.kfc.co.in/home"
        ,"https://baskinrobbinsindia.com/"]
        var images = [mc,pizzahut,dominos,star,kfc,baskin];
        var li=[];
        for(var i=0;i<images.length;i++)
        {
            li.push(changinglogo(images[i],link[i]))
        }
        return li
    }
    function changinglogo(image,link)
    {
        return(
            <>
            <div className="outer-company-logo">
                <a href={link} target='_blank'><img src={image} className="company-logo-img"/></a>
            </div>
            </>
        )
    }
    return(
        <>
        <div className="main7-heading">
            <div className="main7-heading-left">
                Top Bussiness Partners
            </div>
        </div>
        <div className="main7-info">
            {companylogo()}
        </div>
        </>
    )
}

function Main8info()
{
    return(
        <>
        <div className="main8-heading">
            <div className="main8-heading-left">
                Countries with Forks&Knife
            </div>
        </div>
        <div className="main8-info">
            <div className="main8-col1">
                <div className="main8-col-ele">
                    India
                </div>
                <div className="main8-col-ele">
                    United States
                </div>
                <div className="main8-col-ele">
                    Spain
                </div>
                <div className="main8-col-ele">
                    Maxico
                </div>
                <div className="main8-col-ele">
                    Japan
                </div>
                <div className="main8-col-ele">
                    Brazil
                </div>
            </div>

            <div className="main8-col1">
                <div className="main8-col-ele">
                Ecuador
                </div>
                <div className="main8-col-ele">
                Ireland
                </div>
                <div className="main8-col-ele">
                Sri Lanka
                </div>
                <div className="main8-col-ele">
                Dominican Republic
                </div>
                <div className="main8-col-ele">
                Sweden
                </div>
                <div className="main8-col-ele">
                Guatemala
                </div>
            </div>

            <div className="main8-col1">
                <div className="main8-col-ele">
                Canada
                </div>
                <div className="main8-col-ele">
                Australia
                </div>
                <div className="main8-col-ele">
                Poland
                </div>
                <div className="main8-col-ele">
                United Kingdom
                </div>
                <div className="main8-col-ele">
                Italy
                </div>
                <div className="main8-col-ele">
                Portugal
                </div>
            </div>
            <div className="main8-col1">
                <img src={locate} className="locateimage"/>
            </div>
        </div>
        </>
    )
}

function Main9info()
{
    return(
        <>
        <div className="main9-info">
            <div className="main9-outer-top">
                <div className="main9-left">
                    <img src={endblack} className="endblackimage"/>
                </div>
                <div className="main9-right">
                    <div className="main9-text">
                        <h4 class="fromLeft">Expand from left</h4>
                        <h4 class="fromLeft">Read our blog</h4>
                        <h4 class="fromLeft">Buy gift cards</h4>
                        <h4 class="fromLeft">Create a business account</h4>
                        <h4 class="fromLeft">Add your restaurant</h4>
                        <h4 class="fromLeft">Sign up to deliver</h4>
                    </div>
                    <div className="main9-text">
                        <h4 class="fromLeft">Get Help</h4>
                        <h4 class="fromLeft">View all cities</h4>
                        <h4 class="fromLeft">View all countries</h4>
                        <h4 class="fromLeft">Restaurants near me</h4>
                        <h4 class="fromLeft">Save on your first order</h4>
                        <h4 class="fromLeft">English</h4>
                    </div>
                </div>
            </div>
            <div className="main9-outer-mid">
            </div>
            <div className="main9-outer-bottom">
                <div className="main9-bottom-text">
                    <div className="main9-heading">
                        Contact Us
                    </div>
                    <div className="main9-display">
                        <input type="name" placeholder="Full Name" className="contactusinput"/>
                        <input type="email" placeholder="Email" className="contactusinput"/>
                        <textarea placeholder="Your Message" className="contactusinput-textarea"/>
                        <div className="contactbtn">
                            <i class="far fa-paper-plane"></i>{'\u00A0'}SEND
                        </div>
                    </div>
                </div>
                <img src={contactus} className="endblackimage"/>
            </div>
        </div>
        </>
    )
}
export default App;
