import React from 'react'
import { Link } from 'react-router-dom'
import priceList from './priceList.json'
import styles from './pricingPage.module.sass'
import cx from 'classnames'

const PricingList = props => {

  const styless = (index, priceList) =>
    index !== priceList.length - 1 ? {} : { borderBottom: '2px solid #fff' }

  return (
    <>
      <main className={styles.container}>
        <ul className={styles.ulPrice}>
          {priceList.map((elem, index) => {
            return (
              <li className={styles.pricingShow}>
                <div style={{ borderColor: elem.color }}className={styles.containerPrice}>
                  <div className={styles.texts}>
                    <h2 style={{ color: elem.color }}>{elem.mode}</h2>
                    <p>{elem.description}</p>
                  </div>
                  <div className={styles.pricing}>
                    <div style={{ color: elem.color }} className={styles.currency}>{elem.currency} </div>
                    <div style={{ color: elem.color }} className={styles.price}>{elem.price}</div>
                  </div>
                </div>
                <ul>
                  <li className={styles.pricingBox}style={styless(index, priceList)}>{elem.prize}</li>
                  <li className={styles.pricingBox}style={styless(index, priceList)}>{elem.validation}</li>
                  <li className={cx(styles.pricingBox, styles.bordersBottom)}style={styless(index, priceList)}>{elem.entries}</li>
                </ul>
                <Link to='#'>
                  <button style={{ backgroundColor: elem.color }}className={styles.buttonStart}>Start</button>
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