import React from 'react'
import { Button } from '@mui/material'
import { myColors } from '../../helpers/myColors'

type Props = {
    title?: string
}

export default function OutlinedButton({title}: Props) {
  return (
    <Button
    sx={{ borderColor: myColors.ligthText }}
    variant="outlined"
    color="secondary"
    size="small"
  >
    {title ? title : "Button"}
  </Button>
  )
}