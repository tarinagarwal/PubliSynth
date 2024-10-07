import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const reports = [
  { id: 1, name: "Annual Water Demand Forecast", date: "2023-12-31", type: "Forecast" },
  { id: 2, name: "Quarterly Risk Assessment", date: "2023-09-30", type: "Risk" },
  { id: 3, name: "Scenario Analysis: Climate Change Impact", date: "2023-08-15", type: "Scenario" },
  { id: 4, name: "Infrastructure Gap Analysis", date: "2023-07-01", type: "Infrastructure" },
  { id: 5, name: "Water Conservation Strategies", date: "2023-06-15", type: "Strategy" },
]

export default function Reports() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Reports</h1>
      <Card>
        <CardHeader>
          <CardTitle>Available Reports</CardTitle>
          <CardDescription>Access and download generated reports</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Report Name</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reports.map((report) => (
                <TableRow key={report.id}>
                  <TableCell>{report.name}</TableCell>
                  <TableCell>{report.date}</TableCell>
                  <TableCell>{report.type}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      Download
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Generate New Report</CardTitle>
          <CardDescription>Create a custom report based on specific parameters</CardDescription>
        </CardHeader>
        <CardContent>
          <Button>Generate Custom Report</Button>
        </CardContent>
      </Card>
    </div>
  )
}