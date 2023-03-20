import React from 'react'

import Box from './Box'

export default function LoaderText({ ...props }) {
  return <Box bg="light" width={120} height={16} {...props} />
}