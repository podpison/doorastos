import { FC } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import CloseIcon from '../icons/CloseIcon';
import cn from 'classnames';

type Props = {
  className?: string
  closeIconClassName?: string
} & Dialog.DialogProps

const DialogBase: FC<Props> = ({ open, children, className, closeIconClassName, ...props }) => {
  return <Dialog.Root open={open} {...props}>
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 fixed inset-0 z-[51]" />
      <Dialog.Content
        className={cn(
          "flex flex-col fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white z-[52] px-2.5 esm:px-5 w-[calc(100vw_-_20px)] esm:w-[calc(100vw_-_40px)]",
          className,
        )}
      >
        <Dialog.Close asChild>
          <button
            className={cn("absolute", closeIconClassName)}
            aria-label="Close"
          >
            <CloseIcon />
          </button>
        </Dialog.Close>
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
};

export default DialogBase;