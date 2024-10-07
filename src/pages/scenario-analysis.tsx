import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const scenarioData = [
  { year: 2024, baseline: 140, lowGrowth: 138, highGrowth: 142 },
  { year: 2025, baseline: 145, lowGrowth: 142, highGrowth: 148 },
  { year: 2026, baseline: 150, lowGrowth: 146, highGrowth: 154 },
  { year: 2027, baseline: 155, lowGrowth: 150, highGrowth: 160 },
  { year: 2028, baseline: 160, lowGrowth: 154, highGrowth: 166 },
];

export default function ScenarioAnalysis() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Scenario Analysis</h1>
      <Card>
        <CardHeader>
          <CardTitle>Scenario Comparison</CardTitle>
          <CardDescription>
            Compare water demand under different scenarios
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Label htmlFor="scenario">Select Scenario</Label>
            <Select>
              <SelectTrigger id="scenario">
                <SelectValue placeholder="Choose a scenario" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="population">Population Growth</SelectItem>
                <SelectItem value="climate">Climate Change</SelectItem>
                <SelectItem value="economic">Economic Development</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <ChartContainer
            config={{
              baseline: {
                label: "Baseline",
                color: "hsl(var(--chart-1))",
              },
              lowGrowth: {
                label: "Low Growth",
                color: "hsl(var(--chart-2))",
              },
              highGrowth: {
                label: "High Growth",
                color: "hsl(var(--chart-3))",
              },
            }}
            className="h-[400px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={scenarioData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="baseline"
                  stroke="var(--color-baseline)"
                  name="Baseline Scenario"
                />
                <Line
                  type="monotone"
                  dataKey="lowGrowth"
                  stroke="var(--color-lowGrowth)"
                  name="Low Growth Scenario"
                />
                <Line
                  type="monotone"
                  dataKey="highGrowth"
                  stroke="var(--color-highGrowth)"
                  name="High Growth Scenario"
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Scenario Insights</CardTitle>
          <CardDescription>
            Key takeaways from the scenario analysis
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              High growth scenario could lead to a 15% increase in water demand
              by 2028.
            </li>
            <li>
              Low growth scenario shows a more sustainable water usage pattern.
            </li>
            <li>
              Climate change scenarios indicate potential stress on water
              resources during summer months.
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
