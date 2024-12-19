"use client"

import { useState } from "react"

import { wait } from "@/resources/lib/utils"
import { IconDotsVertical } from "justd-icons"
import { Button, Loader, Menu, Modal, buttonStyles } from "ui"

export default function ModalTriggeredByMenuDemo() {
  const [state, setState] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const closeModal = () => setState(null)
  const executeAction = (action: string) => {
    setLoading(true)
    wait(2000).then(() => {
      setLoading(false)
      closeModal()
    })
  }

  const actionType = (t: string | null) => {
    switch (t) {
      case "delete":
        return {
          title: "Delete User",
          description: "Are you sure you want to delete this item?",
          confirmText: "Delete",
          action: () => executeAction(t),
        }

      case "ban":
        return {
          title: "Ban User",
          description: "Are you sure you want to ban this user?",
          confirmText: "Ban",
          action: () => executeAction(t),
        }

      case "restore":
        return {
          title: "Restore User",
          description: "Are you sure you want to restore this user?",
          confirmText: "Restore",
          action: () => executeAction(t),
        }
      default:
        return
    }
  }
  return (
    <>
      <Menu>
        <Menu.Trigger className={buttonStyles({ appearance: "outline" })}>
          <IconDotsVertical />
        </Menu.Trigger>
        <Menu.Content placement="bottom">
          <Menu.Item onAction={() => setState("delete")}>Delete</Menu.Item>
          <Menu.Item isDanger onAction={() => setState("ban")}>
            Ban
          </Menu.Item>
          <Menu.Item onAction={() => setState("restore")}>Restore</Menu.Item>
        </Menu.Content>
      </Menu>

      <Modal.Content isOpen={state !== null} onOpenChange={closeModal}>
        <Modal.Header>
          <Modal.Title>{actionType(state)?.title}</Modal.Title>
          <Modal.Description>{actionType(state)?.description}</Modal.Description>
        </Modal.Header>
        <Modal.Footer>
          <Modal.Close>Cancel</Modal.Close>
          <Button
            intent={state === "ban" ? "danger" : "primary"}
            className="min-w-24"
            isDisabled={loading}
            onPress={actionType(state)?.action}
          >
            {loading ? <Loader variant="spin" /> : actionType(state)?.confirmText}
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </>
  )
}