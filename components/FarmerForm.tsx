"use client"
import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export function FarmerForm({ onClose }: any) {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        bankAccount: '',
        ifscCode: '',
        crop: '',
        quantity: '',
        farmArea: '',
        price: ''
    })

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        // Here you would typically send this data to your backend
        console.log(formData)
        onClose()
    }

    return (
        <Dialog open={true} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add New Crop Entry</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div>
                            <Label htmlFor="surname">Surname</Label>
                            <Input id="surname" name="surname" value={formData.surname} onChange={handleChange} required />
                        </div>
                    </div>
                    <div>
                        <Label htmlFor="bankAccount">Bank Account Number</Label>
                        <Input id="bankAccount" name="bankAccount" value={formData.bankAccount} onChange={handleChange} required />
                    </div>
                    <div>
                        <Label htmlFor="ifscCode">IFSC Code</Label>
                        <Input id="ifscCode" name="ifscCode" value={formData.ifscCode} onChange={handleChange} required />
                    </div>
                    <div>
                        <Label htmlFor="crop">Crop</Label>
                        <Input id="crop" name="crop" value={formData.crop} onChange={handleChange} required />
                    </div>
                    <div>
                        <Label htmlFor="quantity">Quantity (in kg)</Label>
                        <Input id="quantity" name="quantity" type="number" value={formData.quantity} onChange={handleChange} required />
                    </div>
                    <div>
                        <Label htmlFor="farmArea">Farm Area (in sq. meters)</Label>
                        <Input id="farmArea" name="farmArea" type="number" value={formData.farmArea} onChange={handleChange} required />
                    </div>
                    <div>
                        <Label htmlFor="price">Price (per kg)</Label>
                        <Input id="price" name="price" type="number" value={formData.price} onChange={handleChange} required />
                    </div>
                    <Button type="submit">Submit</Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}