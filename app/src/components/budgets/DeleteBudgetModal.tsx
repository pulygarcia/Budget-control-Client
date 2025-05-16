import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

type Props = {
  open: boolean
  onClose: () => void
  onConfirm: () => void
}

export default function DeleteBudgetModal({open, onClose, onConfirm} : Props) {

  return (
    <>
        <Dialog open={open} as="div" className="relative z-10 focus:outline-none" onClose={onClose}>
            <div className="fixed inset-0 z-10 w-screen bg-black/60 backdrop-blur-sm">
                <div className="flex min-h-full items-center justify-center p-6">
                <DialogPanel className="w-full max-w-2xl rounded-2xl bg-gray-900 p-8 shadow-2xl ring-1 ring-white/10">
                    <div className="flex flex-col items-center text-center mb-6">
                    {/* Warning SVG */}
                    <svg
                        className="w-16 h-16 text-red-500 mb-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a1 1 0 00.86 1.5h18.64a1 1 0 00.86-1.5L13.71 3.86a1 1 0 00-1.72 0z"
                        />
                    </svg>

                    <DialogTitle as="h2" className="text-2xl font-bold text-white">
                        Delete this budget?
                    </DialogTitle>
                    <p className="mt-2 text-lg text-white/70">
                        This action is <strong>permanent</strong> and cannot be undone. All budget data will be lost.
                    </p>
                    </div>

                    <div className="mt-6 flex justify-center gap-4">
                    <Button
                        className="rounded-md bg-gray-700 px-5 py-2 text-base font-semibold text-white hover:bg-gray-600 cursor-pointer"
                        onClick={onClose}
                    >
                        Cancel
                    </Button>
                    <Button
                        className="rounded-md bg-red-700 px-5 py-2 text-base font-semibold text-white hover:bg-red-600 cursor-pointer"
                        onClick={onConfirm}
                    >
                        Delete
                    </Button>
                    </div>
                </DialogPanel>
                </div>
            </div>
        </Dialog>
    </>
  )
}
