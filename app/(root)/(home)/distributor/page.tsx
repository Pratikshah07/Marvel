"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, ShoppingCart } from 'lucide-react'

// This would typically come from your backend
const mockFarmerEntries = [
    { id: 1, name: 'John Doe', crop: 'Wheat', quantity: 1000, price: 20, phone: '1234567890' },
    { id: 2, name: 'Jane Smith', crop: 'Rice', quantity: 1500, price: 25, phone: '0987654321' },
]

export default function Distributor() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Distributor Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {mockFarmerEntries.map((entry) => (
                    <Card key={entry.id}>
                        <CardHeader>
                            <CardTitle>{entry.crop}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Farmer: {entry.name}</p>
                            <p>Quantity: {entry.quantity} kg</p>
                            <p>Price: ${entry.price} per kg</p>
                            <div className="flex space-x-2 mt-4">
                                <Button onClick={() => window.location.href = `tel:${entry.phone}`}>
                                    <Phone className="mr-2 h-4 w-4" /> Call
                                </Button>
                                <Button>
                                    <ShoppingCart className="mr-2 h-4 w-4" /> Buy
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}