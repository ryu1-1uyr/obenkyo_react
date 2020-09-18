import styled from 'styled-components'
import React from 'react'

interface Props {
    color: Colors
}

type Colors = 'red' | 'blue'

export default function Button ({color}: Props) {
    return color === 'red'? <RedButton />: null
}

const RedButton = styled.div`
    background:red
`