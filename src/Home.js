import React from 'react'
import './Home.css'
import Product from './Product'

export default function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'/>
            
            <div className="home__row">
                {/* Product */}
                <Product
                    id="12321"
                    title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
                    price={20}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"
                />
                <Product
                    id="12321"
                    title="Samsung 192 L Direct Cool Single Door 2 Star"
                    price={400}
                    rating={4}
                    image="https://rukminim1.flixcart.com/image/352/352/k4ss2a80/refrigerator-new/n/x/b/rr19t241bse-nl-2-samsung-original-imafnmkcsmkchra8.jpeg?q=70"
                />
            </div>
            <div className="home__row">
                {/* Product */}
                <Product
                    id="12321"
                    title="Mi 4A PRO 80 cm (32) HD Ready LED Smart Android TV With Google Data Saver"
                    price={230}
                    rating={4}
                    image="https://rukminim1.flixcart.com/image/416/416/k98tdow0/television/d/t/k/mi-l32m5-al-original-imafr2zw3jmpwymm.jpeg?q=70"
                />
                <Product
                    id="12321"
                    title="Casio B186 Baby-G Analog-Digital Watch "
                    price={90}
                    rating={3}
                    image="https://rukminim1.flixcart.com/image/714/857/j8ndea80/watch/z/g/s/b186-casio-original-imaeymgnaes6hhkg.jpeg?q=50"
                />
                <Product
                    id="12321"
                    title="Realme Narzo 10A"
                    price={170}
                    rating={4}
                    image="https://rukminim1.flixcart.com/image/352/352/k8ddoy80/mobile/u/g/w/realme-narzo-10a-rmx2020-original-imafqechxsprgfgr.jpeg?q=70"
                />
            </div>
            <div className="home__row">
                {/* Product */}
                <Product
                    id="12321"
                    title="boAt Rockerz 510 Super Extra Bass Bluetooth Headset  (Raging Red, On the Ear)"
                    price={40}
                    rating={5}
                    image="https://rukminim1.flixcart.com/image/416/416/k51cpe80pkrrdj/headphone-refurbished/y/b/c/c-rockerz-on-ear-510-boat-original-imafn6u7ec8cmk8y.jpeg?q=70"
                />
            </div>
            
            </div>
            
        </div>
    )
}
