import styled from 'styled-components'
import React from 'react'

interface Props {
    color: Colors
}

type Colors = 'red' | 'blue'

export default function Button ({color}: Props) {
    return color === 'red'? <RedButton /> : color === 'blue' ? <BlueButton /> : <button></button>
}

const RedButton = styled.div`
    background:red
`

const BlueButton = styled.div`
    background:blue
`