import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import priceList from './priceList.json'
import styles from './pricingPage.module.sass'

const PricingPage = () => {
  return (
    <>
      <Header />

      <main className={styles.container}>
        <ul className={styles.ulPrice}>
          {priceList.map((item, index) => {
            return (
              <li className={styles.pricingShow}>
                <div style={{ borderColor: item.color }} className={styles.containerPrice}>
                  <div className={styles.texts}>
                    <h2 style={{ color: item.color }}>{item.mode}</h2>
                    <p >{item.description}</p>
                  </div>
                  <div className={styles.pricing}>
                    <div style={{ color: item.color }} className={styles.currency}>{item.currency}</div>
                    <div  style={{ color: item.color }} className={styles.price}>{item.price}</div>
                  </div>
                </div>
                <ul>
                  <li className={styles.pricingBox}>{item.prize}</li>
                  <li className={styles.pricingBox}>{item.validation}</li>
                  <li className={styles.pricingBox}> {item.entries}</li>
                  {/* <li className={styles.pricingBox}> {item.entries}</li> */}
                  <li> {item.text}</li>
                </ul>
                <Link to='#'>
                  <button style={{ backgroundColor: item.color }} className={styles.buttonStart}>Start</button>
                </Link>
              </li>
            )
          })}
        </ul>
      </main>
      <Footer />
    </>
  )
}

export default PricingPage
