import { tv } from 'tailwind-variants'

const styles = tv({
  slots: {
    item: [
      'size-8 sm:size-12 grid cursor-pointer text-fg/80 place-content-center rounded-md',
      'focus:bg-primary focus:text-primary-fg focus:outline-none',
      'hover:bg-primary hover:text-primary-fg',
      'focus-visible:ring-4 focus-visible:ring-primary-fg/15'
    ],
    box: 'flex justify-around flex-wrap gap-4'
  }
})

const { item, box } = styles()

export { item, box }
