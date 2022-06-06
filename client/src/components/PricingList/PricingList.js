import React from 'react'
import { Link } from 'react-router-dom'
import priceList from './priceList.json'
import styles from './pricingPage.module.sass'

const PricingList = props => {
  const styless = (index, priceList) =>
    index !== priceList.length - 1 ? {} : { borderBottom: '2px solid #fff' }

  return (
    <>
      <main className={styles.container}>
        <ul className={styles.ulPrice}>
          {priceList.map((item, index) => {
            return (
              <li className={styles.pricingShow}>
                <div
                  style={{ borderColor: item.color }}
                  className={styles.containerPrice}
                >
                  <div className={styles.texts}>
                    <h2 style={{ color: item.color }}>{item.mode}</h2>
                    <p>{item.description}</p>
                  </div>
                  <div className={styles.pricing}>
                    <div
                      style={{ color: item.color }}
                      className={styles.currency}
                    >
                      {item.currency}
                    </div>
                    <div style={{ color: item.color }} className={styles.price}>
                      {item.price}
                    </div>
                  </div>
                </div>
                <ul>
                  <li className={styles.pricingBox} style={styless(index, priceList)}>
                    {item.prize}
                  </li>
                  <li className={styles.pricingBox} style={styless(index, priceList)}>{item.validation}</li>
                  <li className={styles.pricingBox} style={styless(index, priceList)}> {item.entries}</li>
                </ul>
                <Link to='#'>
                  <button
                    style={{ backgroundColor: item.color }}
                    className={styles.buttonStart}
                  >
                    Start
                  </button>
                </Link>
              </li>
            )
          })}
        </ul>
      </main>
    </>
  )
}

export default PricingList
