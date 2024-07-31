import { IconBill, IconCheck, IconCube, IconFile } from '@irsyadadl/paranoid'
import { Command, CommandMenu, CommandWrapper, useCommands, useKmenu } from 'kmenu'

const generate = (length: number) => {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength)
    result += characters.charAt(randomIndex)
  }

  return result
}

export const ModalX = () => {
  const { setInput } = useKmenu()

  const main: Command[] = [
    {
      category: 'Options',
      commands: [
        {
          icon: <IconCheck />,
          text: 'Confirm',
          shortcuts: { modifier: <IconBill />, keys: ['1'] }
        },
        {
          icon: <IconFile />,
          text: 'Cancel',
          shortcuts: { modifier: <IconCube />, keys: ['2'] }
        },
        {
          icon: <IconCheck />,
          text: 'Generate Password',
          perform: () => setInput(generate(12))
        }
      ]
    }
  ]

  const [mainCommands] = useCommands(main)

  return (
    <CommandWrapper>
      <CommandMenu
        commands={mainCommands}
        crumbs={['OAuth', 'Password']}
        index={1}
        placeholder="Enter new password..."
        preventSearch
      />
    </CommandWrapper>
  )
}
