"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// This would typically come from your backend
const mockEntries = [
    { id: 1, crop: 'Wheat', quantity: 1000, price: 20 },
    { id: 2, crop: 'Rice', quantity: 1500, price: 25 },
]

export function FarmerEntries() {
    return (
        <div className="space-y-4">
            <h2 className="text-xl font-semibold">Your Crop Entries</h2>
            {mockEntries.map((entry) => (
                <Card key={entry.id}>
                    <CardHeader>
                        <CardTitle>{entry.crop}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Quantity: {entry.quantity} kg</p>
                        <p>Price: ${entry.price} per kg</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}