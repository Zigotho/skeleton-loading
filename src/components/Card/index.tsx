'use client'
import './index.css'
import React, { useState } from 'react'

interface CardProps {
  apolice: number
  cnpj: number
  subs: number
  vidas: number
  isLoading?: boolean
}

export const Card = (props: CardProps) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleMouseEnter = () => {
    setIsFlipped(true)
  }

  const handleMouseLeave = () => {
    setIsFlipped(false)
  }

  if (props.isLoading) {
    return (
      <div className="card">
        <CardSkeleton />
      </div>
    )
  }

  return (
    <div
      className={`relative ${isFlipped ? 'flipped' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card">
        <CardFront {...props} />
        <CardBack {...props} />
      </div>
    </div>
  )
}

const CardFront = ({ apolice, cnpj, subs, vidas }: CardProps) => {
  return (
    <div className="card-face card-front">
      <div className="flex flex-col gap-3 border border-black p-3 w-48 rounded-lg">
        <div>
          <div className="flex flex-row gap-3">
            <p>Nº Apólice:</p>
            <p>{apolice}</p>
          </div>
        </div>
        <div>
          <div className="flex flex-row gap-3">
            <p>Nº CNPJ:</p>
            <p>{cnpj}</p>
          </div>
          <div className="flex flex-row gap-3">
            <p>Subs:</p>
            <p>{subs}</p>
          </div>
          <div className="flex flex-row gap-3">
            <p>Vidas:</p>
            <p>{vidas}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

type CardBackProps = Pick<CardProps, 'apolice'>

const CardBack = ({ apolice }: CardBackProps) => {
  return (
    <div className="card-face card-back">
      <div className="flex flex-col gap-3 border border-black w-48 rounded-lg">
        <div className="ml-3">
          <div className="flex flex-row gap-3">
            <p>Nº Apólice:</p>
            <p>{apolice}</p>
          </div>
        </div>
        <div>
          <div className="flex flex-row gap-3 ml-3">
            <button className="underline">Alterar vidas</button>
          </div>
          <div className="flex flex-row gap-3 ml-3">
            <button className="underline">Alterar Subs</button>
          </div>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
          <div className="flex flex-row gap-3 ml-3">
            <button className="underline">Detalhes</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const CardSkeleton = () => {
  return (
    <div className="card-face card-front max-w-sm animate-pulse">
      <div className="flex flex-col gap-3 border border-black p-3 w-48 rounded-lg">
        <div>
          <div className="flex flex-row gap-3">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          </div>
        </div>
        <div>
          <div className="flex flex-row gap-3">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          </div>
          <div className="flex flex-row gap-3">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          </div>
          <div className="flex flex-row gap-3">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
