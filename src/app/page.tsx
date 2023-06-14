'use client'

import { useState, useEffect } from 'react'
import { Button, Input } from "@material-tailwind/react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  const [fiatPerBtc, setFiatPerBtc] = useState(0)
  const [currency, setCurrency] = useState('USD')

  const [sats, setSats] = useState(0)
  const [fiat, setFiat] = useState(0)

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  useEffect( () => {
    async function fetchData() {
      const response = await fetch("https://blockchain.info/ticker")
      const jsonData = await response.json()
      const price = Math.round(jsonData[currency].last)
      setFiatPerBtc(price)
      setFiat(1)
      setSats(Math.round(100_000_000 / price * 1))
      setIsLoading(false)
    }
    fetchData()
  }, [])

  const handleFiatChange = (event: any) => {
    const newFiat = event.target.value
    setFiat(newFiat)
    setSats(Math.round(100_000_000 / fiatPerBtc * newFiat))
  }

  const handleSatsChange = (event: any) => {
    const newSats = event.target.value
    setSats(newSats)
    setFiat(Math.round(fiatPerBtc * newSats / 100_000_000))
  }

  if (isLoading) {
    return (
      <main className="flex min-h-screen flex-col items-center">
        <p>Loading</p>
      </main>
    )
  }

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="w-96">
        <h1 className="mb-5">Price per bitcoin: {fiatPerBtc}</h1>
        <div className="mb-5">
          <Input label="Dollars" variant="standard" value={fiat} onChange={handleFiatChange}/>
        </div>
        <div className="mb-5">
          <Input label="Sats" variant="standard" value={sats} onChange={handleSatsChange}/>
        </div>
      </div>
    </main>
  )
}
