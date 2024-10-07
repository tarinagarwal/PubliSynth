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

const forecastData = [
  { year: 2024, actual: null, forecast: 140 },
  { year: 2025, actual: null, forecast: 145 },
  { year: 2026, actual: null, forecast: 150 },
  { year: 2027, actual: null, forecast: 155 },
  { year: 2028, actual: null, forecast: 160 },
];

export default function ForecastResults() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Forecast Results</h1>
      <Card>
        <CardHeader>
          <CardTitle>Water Demand Forecast</CardTitle>
          <CardDescription>
            Projected water demand for the next 5 years
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              actual: {
                label: "Actual Usage",
                color: "hsl(var(--chart-1))",
              },
              forecast: {
                label: "Forecasted Usage",
                color: "hsl(var(--chart-2))",
              },
            }}
            className="h-[400px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={forecastData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="actual"
                  stroke="var(--color-actual)"
                  name="Actual Usage (MGD)"
                />
                <Line
                  type="monotone"
                  dataKey="forecast"
                  stroke="var(--color-forecast)"
                  name="Forecasted Usage (MGD)"
                  strokeDasharray="5 5"
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Forecast Summary</CardTitle>
          <CardDescription>
            Key insights from the water demand forecast
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Projected water demand is expected to increase by 14% over the
              next 5 years.
            </li>
            <li>
              The most significant increase is anticipated in the industrial
              sector.
            </li>
            <li>
              Climate change effects may lead to higher variability in seasonal
              demand.
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
