"use client"
import React from 'react'
import "../../styles/tips.css"
import { useState } from 'react';
import Image from 'next/image'

const page = () => {

  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);
  const longText = 'Travelling can be scary but it is not as scary as you think and when armed with information and the tools you need before flying, you can feel safer traveling while making the most of your time exploring the world. So, before you book your dream trip, go through this checklist of things to help make traveling safer in 2023. Even though people are ready to make this year their greatest year of travel, there still may be a lingering uneasiness about traveling again. How can we feel safer traveling after so much has happened around the world?';
  const summary = longText.slice(0, 100);
  const toggleExpand = (event) => {
    event.preventDefault();
    setIsExpanded(!isExpanded);
  };
  const longText2 = 'Vaxholm, just an hour by the archipelago boat from Stockholm, is often called the capital of the archipelago. It may be due to Vaxholms history and the fact that here you disembark in a lively archipelago village with genuine restaurants and quaint shops, while at the same time you get to experience the magnificent archipelago nature with hiking trails, paddling trails and fishing waters just inside the knot. And perhaps best of all you can do it all year round';
  const summary2 = longText2.slice(0, 100);
  const toggleExpand2 = (event) => {
    event.preventDefault();
    setIsExpanded2(!isExpanded2);
  };
  const longText3 = 'Camping is a fantastic way to calm the mind, connect with nature and have an adventure. But it is not easy to make it perfect on your first try. Years of trial and error camping on every continent and we have put together our best camping tips to help make the great outdoors more comfortable and fun. In this guide, we are going to cover camping essentials, meal planning, how to set up your camp, and much more. So get ready to plan your next camping trip with our help';
  const summary3 = longText3.slice(0, 100);
  const toggleExpand3 = (event) => {
    event.preventDefault();
    setIsExpanded3(!isExpanded3);
  };

  return (
    <div>
        <div className='intro-quote'>
        <h1>Travel Tips</h1>
        <p>Adventures are the best way to learn</p>
        </div>
        <div className='all-cards'>
          <div className='one-card'>
          <Image src="/plane.jpg" width="380" height="368" alt="Plane picture"/>
          <h2>10 safety tips when travelling</h2>
            {summary}
            {isExpanded ? <p>{longText}</p> : null}
            <a href="#" onClick={toggleExpand}>
              {isExpanded ? 'Show Less' : 'Read More'}
            </a>
          </div>
          <div className='one-card'>
          <Image src="/vaxolm.jpg" width="380" height="368" alt="Picture of Vaxolm"/>
          <h2>Discover your home town</h2>
            {summary2}
            {isExpanded2 ? <p>{longText2}</p> : null}
            <a href="#" onClick={toggleExpand2}>
              {isExpanded2 ? 'Show Less' : 'Read More'}
            </a>
          </div>
          <div className='one-card'>
          <Image src="/camping.jpg" width="380" height="368" alt="picture of camping"/>
          <h2>The most usefull camping tips</h2>
            {summary3}
            {isExpanded3 ? <p>{longText3}</p> : null}
            <a href="#" onClick={toggleExpand3}>
              {isExpanded3 ? 'Show Less' : 'Read More'}
            </a>
          </div>
        </div>
    </div>
  )
}
export default page
