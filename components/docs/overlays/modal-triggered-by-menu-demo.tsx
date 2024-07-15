'use client'

import React from 'react'

import { wait } from '@/lib/utils'
import { IconDotsVertical } from '@irsyadadl/paranoid'
import {
  Button,
  buttonStyles,
  LoadingDots,
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalTitle
} from 'ui'

export default function ModalTriggeredByMenuDemo() {
  const [state, setState] = React.useState<string | null>(null)
  const [loading, setLoading] = React.useState<boolean>(false)
  const closeModal = () => setState(null)
  const executeAction = (action: string) => {
    console.log(`${action} is executing`)
    setLoading(true)
    wait(2000).then(() => {
      setLoading(false)
      closeModal()
    })
  }

  const actionType = (t: string | null) => {
    switch (t) {
      case 'delete':
        return {
          title: 'Delete User',
          description: 'Are you sure you want to delete this item?',
          confirmText: 'Delete',
          action: () => executeAction(t)
        }

      case 'ban':
        return {
          title: 'Ban User',
          description: 'Are you sure you want to ban this user?',
          confirmText: 'Ban',
          action: () => executeAction(t)
        }

      case 'restore':
        return {
          title: 'Restore User',
          description: 'Are you sure you want to restore this user?',
          confirmText: 'Restore',
          action: () => executeAction(t)
        }
      default:
        return
    }
  }
  return (
    <>
      <Menu>
        <MenuTrigger className={buttonStyles({ appearance: 'outline' })}>
          <IconDotsVertical />
        </MenuTrigger>
        <MenuContent placement="bottom">
          <MenuItem onAction={() => setState('delete')}>Delete</MenuItem>
          <MenuItem onAction={() => setState('ban')}>Ban</MenuItem>
          <MenuItem onAction={() => setState('restore')}>Restore</MenuItem>
        </MenuContent>
      </Menu>

      <ModalOverlay isOpen={state !== null} onOpenChange={closeModal}>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>{actionType(state)?.title}</ModalTitle>
            <ModalDescription>{actionType(state)?.description}</ModalDescription>
          </ModalHeader>
          <ModalFooter>
            <ModalClose>Cancel</ModalClose>
            <Button
              className="min-w-24"
              isDisabled={loading}
              onPress={actionType(state)?.action}
            >
              {loading ? (
                <LoadingDots className={'bg-fg'} />
              ) : (
                actionType(state)?.confirmText
              )}
            </Button>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </>
  )
}
