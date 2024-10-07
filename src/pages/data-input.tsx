import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function DataInput() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Data Input</h1>
      <Card>
        <CardHeader>
          <CardTitle>Upload Historical Data</CardTitle>
          <CardDescription>Upload CSV files containing historical water usage data</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="waterUsage">Water Usage Data</Label>
              <Input id="waterUsage" type="file" accept=".csv" />
            </div>
            <div>
              <Label htmlFor="climateData">Climate Data</Label>
              <Input id="climateData" type="file" accept=".csv" />
            </div>
            <div>
              <Label htmlFor="populationData">Population Data</Label>
              <Input id="populationData" type="file" accept=".csv" />
            </div>
            <Button>Upload Files</Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Configure Scenario Parameters</CardTitle>
          <CardDescription>Set parameters for scenario analysis</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="populationGrowth">Population Growth Rate (%)</Label>
              <Input id="populationGrowth" type="number" placeholder="1.5" />
            </div>
            <div>
              <Label htmlFor="climateScenario">Climate Scenario</Label>
              <Select>
                <SelectTrigger id="climateScenario">
                  <SelectValue placeholder="Select a climate scenario" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="normal">Normal</SelectItem>
                  <SelectItem value="drought">Drought</SelectItem>
                  <SelectItem value="wet">Wet</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button>Save Configuration</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}