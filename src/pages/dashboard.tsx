import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts"

const waterUsageData = [
  { year: 2018, usage: 100 },
  { year: 2019, usage: 120 },
  { year: 2020, usage: 110 },
  { year: 2021, usage: 130 },
  { year: 2022, usage: 140 },
  { year: 2023, usage: 135 },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Water Demand Forecasting Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Current Water Usage</CardTitle>
            <CardDescription>Total usage in million gallons per day</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">135 MGD</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Reservoir Capacity</CardTitle>
            <CardDescription>Current storage level</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">75%</div>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Historical Water Usage</CardTitle>
          <CardDescription>Past 6 years of water usage data</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              usage: {
                label: "Water Usage",
                color: "hsl(var(--chart-1))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={waterUsageData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Line type="monotone" dataKey="usage" stroke="var(--color-usage)" name="Water Usage (MGD)" />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}