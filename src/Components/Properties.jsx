import React from 'react'
import property1 from '../assets/property1.png'
import property2 from '../assets/property2.png'
import property3 from '../assets/property3.png'
import property4 from '../assets/property4.jpg'
import property5 from '../assets/property5.jpg'
import property6 from '../assets/property6.jpg'
import property7 from '../assets/property7.jpg'
import './properties.css'

const propertiesData=[
    {
        image:property1,
        title:"Modern Apartment ",
        bed:2,
        bath:2,
        area:1200
    },
    {
        image:property2,
        title:"Luxury Apartment",
        bed:3,
        bath:2,
        area:2000
    },
    {
        image:property3,
        title:"Cozy Apartment",
        bed:1,
        bath:3,
        area:800
    },
    {
        image:property4,
        title:"Elysian Heights",
        bed:5,
        bath:3,
        area:4000
    },
    {
        image:property5,
        title:"Opal Crest Villas",
        bed:7,
        bath:5,
        area:6000
    },
    {
        image:property6,
        title:"Regency Grove",
        bed:6,
        bath:3,
        area:5000
    },
    {
        image:property7,
        title:"The Grand Solace",
        bed:8,
        bath:5,
        area:7000
    }
];

const Properties = () => {
  return (
    <div className="properties-container" id='properties'>
        <div className="align">
            <h2>Featured Properties</h2>
        <div className='properties'>
      {propertiesData.map((property,index)=>(
        <div className="list" key={index} >
            <img src={property.image} alt="#" />
            <h3>{property.title}</h3>
            <span>{property.bed}beds</span>|<span>{property.bath}baths</span>|<span>{property.area}sq.ft</span>
        </div>
      ))}
    </div>
        </div>
    </div>
  )
}

export default Properties
