import React, { useState, useEffect } from 'react'
import {useSelector} from 'react-redux'

import { useDrop } from 'react-dnd'
import Task from './Task'
import update from 'immutability-helper'
import { ItemTypes } from './ItemTypes'
const style = {
  width: 400,
}
const ITEMS = [
  {
    id: 1,
    text: 'Write a cool JS library',
  },
  {
    id: 2,
    text: 'Make it generic enough',
  },
  {
    id: 3,
    text: 'Write README',
  },
  {
    id: 4,
    text: 'Create some examples',
  },
  {
    id: 5,
    text: 'Spam in Twitter and IRC to promote it',
  },
  {
    id: 6,
    text: '???',
  },
  {
    id: 7,
    text: 'PROFIT',
  },
]
const Container = ({data}) => {

  const [cards, setCards] = useState(data);
  const [, drop] = useDrop({ accept: ItemTypes.CARD })

  const moveCard = (id, atIndex) => {
    const { card, index } = findCard(id)
    setCards(
      update(cards, {
        $splice: [
          [index, 1],
          [atIndex, 0, card],
        ],
      }),
    )
  }
  const findCard = (id) => {
    const card = cards.filter((c) => `${c.id}` === id)[0]
    return {
      card,
      index: cards.indexOf(card),
    }
  }

  useEffect(() => {
    setCards(data)
  },[data]) 

  return (
    <>
      <div ref={drop} style={style}>
        {cards.map((card) => (
          <Task
            key={card.id}
            id={`${card.id}`}
            text={card.task}
            moveCard={moveCard}
            findCard={findCard}
          />
        ))}
      </div>
    </>
  )
}

export default Container;
