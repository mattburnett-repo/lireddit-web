import { Box } from '@chakra-ui/react';
import React from 'react'

interface WrapperProps {
  children: any, // FIXME: should be something like React.FC and not 'any' ...
  variant?: 'small' | 'regular'
}

export const Wrapper: React.FC<WrapperProps> = ({children, variant='regular'}) => {
    return (
      <Box mt={8} mx="auto" maxW={variant === 'regular' ? "800px" : '400px'} w="100%">
        {children}
      </Box>
    );
}