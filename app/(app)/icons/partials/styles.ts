import { tv } from 'tailwind-variants'

const styles = tv({
  slots: {
    box: 'flex justify-around flex-wrap gap-2',
    item: [
      // 'border rounded-lg w-[6.8rem] sm:w-32 p-4 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20',
      // '[&[data-focused]_.icstyl]:bg-primary/10 [&[data-focused]_.icstyl]:text-primary [&[data-focused]_.icstyl]:border-primary/30'
      'size-8 sm:size-12 grid cursor-pointer text-fg/80 place-content-center rounded-md',
      'focus:bg-primary focus:text-primary-fg focus:outline-none',
      'selected:bg-primary selected:text-primary-fg',
      'open:bg-primary open:text-primary-fg',
      'hover:bg-secondary hover:text-secondary-fg',
      'focus-visible:ring-4 focus-visible:ring-primary-fg/15'
      // '[&[data-focused]_.mxtr]:bg-primary [&[data-focused]_.mxtr]:text-primary-fg [&[data-focused]_.mxtr]:outline-none',
    ],
    iconStyles: 'icstyl bg-background grid size-12 place-content-center mx-auto border rounded-full'
  }
})

const { item, box, iconStyles } = styles()

export { item, box, iconStyles }
