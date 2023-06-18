'use client'

import { useState, useEffect, useRef } from 'react'
import TextField from '@mui/material/TextField'
import { NumericFormat, numericFormatter, useNumericFormat } from 'react-number-format';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const priceFormat = useNumericFormat({
    thousandSeparator: ",",
    decimalScale: 0,
    prefix: '$',
  })

  const fiatFormat = useNumericFormat({
    thousandSeparator: ",",
    decimalScale: 2,
    prefix: '$',
  })

  const satsFormat = useNumericFormat({
    thousandSeparator: ",",
    decimalScale: 0
  })

  const [fiatPerBtc, setFiatPerBtc] = useState(0)
  const [sats, setSats] = useState("")
  const [fiat, setFiat] = useState("")

  useEffect( () => {
    async function fetchData() {
      const response = await fetch("https://blockchain.info/ticker")
      const jsonData = await response.json()
      const price = Math.round(jsonData['USD'].last)
      setFiatPerBtc(price)
      const newFiat = 1
      const newSats = 100_000_000 / price * 1
      setFiat(String(fiatFormat.format?.(newFiat.toString())))
      setSats(String(satsFormat.format?.(newSats.toString())))
      setIsLoading(false)
    }
    fetchData()
  }, [])

  const handleFiatChange = (event: any) => {
    const v = event.target.value
    const newFiat = Number(fiatFormat.removeFormatting?.(v))
    const newSats = Math.round(100_000_000 / fiatPerBtc * newFiat)
    console.log(`newSats: ${newSats}, newFiat: ${newFiat}`)
    setFiat(String(fiatFormat.format?.(newFiat.toString())))
    setSats(String(satsFormat.format?.(newSats.toString())))
  }

  const handleSatsChange = (event: any) => {
    console.log(`values: ${JSON.stringify(event.target.value)}`)
    const newSats = Number(satsFormat.removeFormatting?.(event.target.value))
    const newFiat = fiatPerBtc * newSats / 100_000_000
    console.log(`newSats: ${newSats}, newFiat: ${newFiat}`)
    setFiat(String(fiatFormat.format?.(newFiat.toString())))
    setSats(String(satsFormat.format?.(newSats.toString())))
  }

  if (isLoading) {
    return (
      <main className="flex min-h-screen flex-col items-center">
        <p>Loading</p>
      </main>
    )
  }

  const handleFocus = (event: any) => event.target.select()

  const handleFocusWithSymbol = (event: any) => {
    const t = event.target
    t.setSelectionRange(1, t.value.length)
  }

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="w-9/10">
        <h1 className="mt-10 mb-10">
          Price per bitcoin: { priceFormat.format?.(fiatPerBtc.toString()) }
        </h1>
        <div className="mb-5">
          <TextField
            label="Dollars" 
            variant="standard" 
            className="text-4xl"
            inputmode="numeric"
            value={fiat}
            onFocus={handleFocusWithSymbol}
            onChange={handleFiatChange} />
        </div>
        <div className="mb-5">
          <TextField 
            label="Sats" 
            variant="standard" 
            value={sats}
            onFocus={handleFocus}
            onChange={handleSatsChange} 
          />
        </div>
      </div>
    </main>
  )
}
