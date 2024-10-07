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
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

const riskData = [
  {
    region: "North",
    shortageRisk: 70,
    overflowRisk: 20,
    infrastructureGap: 50,
  },
  {
    region: "South",
    shortageRisk: 40,
    overflowRisk: 60,
    infrastructureGap: 30,
  },
  { region: "East", shortageRisk: 55, overflowRisk: 35, infrastructureGap: 45 },
  { region: "West", shortageRisk: 30, overflowRisk: 50, infrastructureGap: 20 },
];

export default function RiskAssessment() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Risk Assessment</h1>
      <Card>
        <CardHeader>
          <CardTitle>Regional Risk Analysis</CardTitle>
          <CardDescription>
            Assessment of water-related risks by region
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              shortageRisk: {
                label: "Shortage Risk",
                color: "hsl(var(--chart-1))",
              },
              overflowRisk: {
                label: "Overflow Risk",
                color: "hsl(var(--chart-2))",
              },
              infrastructureGap: {
                label: "Infrastructure Gap",
                color: "hsl(var(--chart-3))",
              },
            }}
            className="h-[400px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={riskData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="region" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Bar
                  dataKey="shortageRisk"
                  fill="var(--color-shortageRisk)"
                  name="Shortage Risk"
                />
                <Bar
                  dataKey="overflowRisk"
                  fill="var(--color-overflowRisk)"
                  name="Overflow Risk"
                />
                <Bar
                  dataKey="infrastructureGap"
                  fill="var(--color-infrastructureGap)"
                  name="Infrastructure Gap"
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Risk Mitigation Strategies</CardTitle>
          <CardDescription>
            Recommended actions to address identified risks
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Implement water conservation programs in high-risk shortage areas.
            </li>
            <li>
              Upgrade flood control systems in regions with high overflow risk.
            </li>
            <li>
              Prioritize infrastructure investments in areas with significant
              gaps.
            </li>
            <li>Develop drought management plans for vulnerable regions.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
