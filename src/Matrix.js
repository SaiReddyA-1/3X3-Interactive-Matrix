import React, {useState} from 'react'
import './Matrix.css'

const Matrix = () => {
  const [clickOrder, setClickOrder] = useState([])
  const [colors, setColors] = useState(Array(9).fill('white'))

  const handleClick = index => {
    if (colors[index] === 'white') {
      const newColors = [...colors]
      newColors[index] = 'green'
      setColors(newColors)

      setClickOrder(prev => {
        const updatedOrder = [...prev, index]
        if (updatedOrder.length === 9) {
          changeToOrange(newColors, updatedOrder)
        }
        return updatedOrder
      })
    }
  }

  const changeToOrange = (currentColors, order) => {
    const newColors = [...currentColors]
    order.forEach((index, i) => {
      setTimeout(() => {
        newColors[index] = 'orange'
        setColors([...newColors])
      }, i * 500)
    })
  }

  const handleReset = () => {
    setColors(Array(9).fill('white'))
    setClickOrder([])
  }

  return (
    <div className="matrix-container">
      <h1 className="matrix-heading">Interactive 3x3 Matrix</h1>
      <div className="matrix">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`box ${color}`}
            onClick={() => handleClick(index)}
          ></div>
        ))}
      </div>
      <button className="reset-button" onClick={handleReset}>
        Reset Matrix
      </button>
    </div>
  )
}

export default Matrix
