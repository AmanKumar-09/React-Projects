import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount , setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  // swaping two variables 
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div
    className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{
      backgroundImage: `url('https://as1.ftcdn.net/v2/jpg/04/34/58/54/1000_F_434585463_zpdtTpTEbqQFfsp6RVEW6IIxEM9dHf86.jpg')`,
    }}
    >
      <div className='w-full' >
        <div className='w-full max-w-md mx-auto
         border border-gray-60 rounded-lg p-5
         backdrop-blur-sm bg-white/30 ' >
          <form 
          onSubmit={(e) => {
            e.preventDefault();
            convert()
          }}
          >
            <div className='w-full mb-1' >
              <InputBox 
              label="from"
              amount={amount}
              currencyOption={options}
              onCurrencyChange={(currency) => setAmount(amount)}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
              />              
            </div>
            <div className='relative w-full h-0.5'>
              <button
              type="button"
              className="absolute left-1/2
              -translate-x-1/2
              -translate-y-1/2 border-2
              border-white rounded-md
              bg-blue-500 text-white px-2
              py-0.5"
              onClick={swap}
              >
                swap
              </button>
            </div>
            <div className='w-full mt-1 mb-4'>
              <InputBox
              label="to"
              amount={convertedAmount}
              currencyOption={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={from}
              amountDisable
              />
            </div>
            <button type="Submit"
            className="w-full bg-green-500 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toLocaleUpperCase()} = {convertedAmount.toFixed(2)}
            </button>

          </form>

        </div>

      </div>


    </div>
  )
}

export default App
