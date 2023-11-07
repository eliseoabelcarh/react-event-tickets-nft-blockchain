import React from 'react'
import { Button } from '@mui/material'
import { myColors } from '../../helpers/myColors'

type Props = {
    title?: string
    handleClick?: () => void
}

export default function OutlinedButton({title, handleClick = ()=>{}}: Props) {
  return (
    <Button
    sx={{ borderColor: myColors.ligthText }}
    variant="outlined"
    color="secondary"
    size="small"
    onClick={()=>handleClick()}
  >
    {title ? title : "Button"}
  </Button>
  )
}