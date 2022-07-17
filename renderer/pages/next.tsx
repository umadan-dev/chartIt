import React, { useReducer, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Chart } from './../components/ChartComponent'
import {
  dispatchPacket,
  initState,
  namesArray,
  reducer,
} from '../components/Assets'
const { ipcRenderer } = require('electron')

function Next() {
  const [isActive, setActive] = useState(true)
  const [buttonText, setButtonText] = useState('Fetch Data Stream')
  const [listenerCount, setCount] = useState(0)
  const [state, dispatch] = useReducer(reducer, initState)

  const getData = () => {
    ipcRenderer.on('device-data', (_event, packets) => {
      dispatchPacket(packets, dispatch)
      setCount(prevCount => prevCount + 1)
    })
    ipcRenderer.on('fetch-data', (_event, message) => {
      if (message == 'completed') {
        setActive(true)
        setButtonText('Fetch Data Stream')
      }
    })
  }

  const fetchData = () => {
    setActive(false)
    ipcRenderer.invoke('fetch-data').then(() => {
      setButtonText('Fetching In Progress')
    })
    if (listenerCount == 0) getData()
  }

  return (
    <React.Fragment>
      <Head>
        <title>Neuphony - Chart It</title>
      </Head>
      <div className="grid grid-col-1 text-2xl w-full text-center">
        <img className="ml-auto mr-auto" src="/images/logo.png" />
        <span>⚡ Render the Graph on this Page ⚡</span>
      </div>

      <div className="mt-4 w-full flex-wrap flex justify-center">
        <button
          className={
            isActive
              ? 'btn-blue'
              : 'bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed'
          }
          onClick={fetchData}
        >
          {buttonText}
        </button>
      </div>

      <div id="chartIt">
        <span className="mt-4 w-full flex-wrap flex justify-center">
          ⚡ Render Chart Here ⚡
        </span>
        {namesArray.map(e => (
          <Chart key={e} data={state[e]} />
        ))}
      </div>

      <div className="mt-10 w-full flex-wrap flex justify-center">
        <Link href="/home">
          <a className="btn-blue">Go to home page</a>
        </Link>
      </div>
    </React.Fragment>
  )
}

export default Next