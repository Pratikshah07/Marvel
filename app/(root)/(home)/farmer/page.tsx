"use client"
import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { FarmerForm } from '@/components/FarmerForm'
import { FarmerEntries } from '@/components/FarmerEntries'

export default function Farmer() {
    const [showForm, setShowForm] = useState(false)

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Farmer Dashboard</h1>
            <Button onClick={() => setShowForm(true)} className="mb-4">
                <Plus className="mr-2 h-4 w-4" /> Add New Crop Entry
            </Button>
            {showForm && <FarmerForm onClose={() => setShowForm(false)} />}
            <FarmerEntries />
        </div>
    )
}