'use client'

import { useState, useEffect } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Textfield from '@mui/material/TextField'
import { useNumericFormat } from 'react-number-format'

import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function Home() {

  const [isLoading, setIsLoading] = useState(true)
  const [fiatPerBtc, setFiatPerBtc] = useState(0)
  const [fiat, setFiat] = useState("$")
  const [sats, setSats] = useState("")
  
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
    decimalScale: 0,
  })

  const handleFiatChange = (e: any) => {
    let v = e.target.value

    // chop off last digit if it has 3 digits past the last decimal
    if (v[v.length - 4] === '.') {
      v = v.slice(0, -1)
    }

    if (v === "" || v === "$") {
      setFiat("$")
      setSats("")
      return
    }

    if (v === "$.") {
      setFiat("$0.")
      setSats("0")
      return
    }

    const newFiat = Number(fiatFormat.removeFormatting?.(v))
    const newSats = Math.round(100_000_000 / fiatPerBtc * newFiat)
    let reformat = String(fiatFormat.format?.(newFiat.toString()))

    // if ends with ".", then add back the decimal point
    if (v.endsWith(".")) {
      reformat = reformat + "."
    } // if ends with  ".0", then add back the ".0"
    else if (v.endsWith(".0")) {
      reformat = reformat + ".0"
    } // if ends with ".00", then add back the ".00"
    else if (v.endsWith(".00") || v.endsWith(".000")) {
      reformat = reformat + ".00"
    } // ends with .[d],  then 0 at the end
    else if (v.endsWith("0") && v[v.length - 3] === '.') {
      console.log('ennds with the decimal')
      reformat = reformat + "0"
    }

    setFiat(reformat)
    setSats(String(satsFormat.format?.(newSats.toString())))
  }

  const handleSatsChange = (e: any) => {
    const newSats = Number(satsFormat.removeFormatting?.(e.target.value))
    const newFiat = fiatPerBtc * newSats / 100_000_000
    setFiat(String(fiatFormat.format?.(newFiat.toString())))
    setSats(String(satsFormat.format?.(newSats.toString())))
  }

  const handleFocus = (e: any) => {
    e.target.select() 
  }

  const handleRefresh = () => window.location.reload()

  const handleFocusWithSymbol = (event: any) => {
    const t = event.target
    t.setSelectionRange(1, t.value.length)
  }

  let priceVal = <span className="inline-flex">{priceFormat.format?.(fiatPerBtc.toString())} <p className="ml-5 text-[#90caf9] hover:text-[#42a5f5]" onClick={handleRefresh}>{'\u27F3'}</p></span>

  if (isLoading) {
    priceVal = <CircularProgress size={"1.5rem"}/>  
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main className="bg-black flex min-h-screen flex-col items-center px-5">
        <div className="w-9/10">
          <div className="inline-flex">
            <div className="mt-5 mb-10 text-white text-3xl">
              BTC/USD: {priceVal}
            </div>
          </div>
          <div className="mb-5">
            <Textfield
              label="Dollars" 
              variant="standard" 
              inputProps={{
                style: { fontSize: '4rem'},
                inputMode: 'decimal'
              }}
              value={fiat}
              onFocus={handleFocusWithSymbol}
              onChange={handleFiatChange} />
          </div>
          <div className="mb-5">
            <Textfield 
              label="Sats" 
              variant="standard" 
              inputProps={{
                style: { fontSize: '4rem'},
                inputMode: 'numeric',
              }}
              className={"focus:overflow-hidden"}
              value={sats}
              onFocus={handleFocus}
              onChange={handleSatsChange}
            />
          </div>
        </div>
      </main>
    </ThemeProvider>
  )
}
