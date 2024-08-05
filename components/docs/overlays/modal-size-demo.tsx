'use client'

import * as React from 'react'

import {
  Button,
  Grid,
  GridItem,
  ModalContent,
  type ModalContentProps,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle
} from 'ui'

type Size = Pick<ModalContentProps, 'size'>['size']
const sizes: Size[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl']
export default function ModalSizeDemo() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [modalSize, setModalSize] = React.useState<Size>('md')

  const handlePress = (size: Size, open: boolean) => {
    setModalSize(size)
    setIsOpen(open)
  }
  return (
    <>
      <Grid columns={{ initial: 2, sm: 3, lg: 4 }} gap={2}>
        {sizes.map((size, idx) => (
          <GridItem key={idx}>
            <Button appearance="outline" onPress={() => handlePress(size, true)}>
              Open {size}
            </Button>
          </GridItem>
        ))}
      </Grid>

      <ModalContent isOpen={isOpen} onOpenChange={setIsOpen} size={modalSize}>
        <ModalHeader>
          <ModalTitle>Project Update</ModalTitle>
          <ModalDescription>
            Dive deep into our project’s latest updates where we've streamlined workflow and
            improved user interfaces.
          </ModalDescription>
        </ModalHeader>
        <ModalFooter>
          <Button appearance="outline" onPress={() => setIsOpen(false)}>
            Close
          </Button>
          <Button className="ml-2" onPress={() => setIsOpen(false)}>
            Confirm
          </Button>
        </ModalFooter>
      </ModalContent>
    </>
  )
}
