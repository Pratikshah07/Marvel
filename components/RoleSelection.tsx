// components/RoleSelectionDialog.tsx
"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function RoleSelection() {
    const [open, setOpen] = useState(false)
    const router = useRouter()

    const selectRole = (role: 'farmer' | 'distributor') => {
        setOpen(false)
        router.push(`/${role}`)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>Select Your Role</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Select Your Role</DialogTitle>
                    <DialogDescription>
                        Choose whether you are a farmer or a distributor.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex justify-center space-x-4 mt-4">
                    <Button onClick={() => selectRole('farmer')}>Farmer</Button>
                    <Button onClick={() => selectRole('distributor')}>Distributor</Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}