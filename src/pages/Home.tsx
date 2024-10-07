import {
  Package2,
  LayoutDashboard,
  Database,
  LineChart,
  GitCompare,
  AlertTriangle,
  FileText,
  Bell,
  Settings,
  LogOut,
  BarChart,
  CloudRain,
  Zap,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const navItems = [
  { to: "/", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/data-input", icon: Database, label: "Data Input" },
  { to: "/forecast-results", icon: LineChart, label: "Forecast Results" },
  { to: "/scenario-analysis", icon: GitCompare, label: "Scenario Analysis" },
  { to: "/risk-assessment", icon: AlertTriangle, label: "Risk Assessment" },
  { to: "/reports", icon: FileText, label: "Reports" },
];

const featureCards = [
  {
    title: "Water Demand Forecasting",
    description:
      "Predict future water needs with advanced machine learning models.",
    icon: BarChart,
  },
  {
    title: "Climate Scenario Analysis",
    description:
      "Assess the impact of various climate scenarios on water resources.",
    icon: CloudRain,
  },
  {
    title: "Risk Assessment",
    description:
      "Identify and mitigate potential risks to water supply and infrastructure.",
    icon: AlertTriangle,
  },
  {
    title: "Real-time Monitoring",
    description:
      "Track water usage and reservoir levels in real-time for informed decision-making.",
    icon: Zap,
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 text-blue-600">
              <Package2 className="h-8 w-8" />
              <span className="text-xl font-bold">WaterForecast</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">John Doe</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      john.doe@example.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="w-64 bg-white shadow-md">
          <nav className="p-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="flex items-center py-2 px-4 rounded-md text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                <item.icon className="h-5 w-5 mr-3" />
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>
        <main className="flex-1 overflow-auto p-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
              {featureCards.map((card, index) => (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                    <CardTitle className="text-lg font-semibold">
                      {card.title}
                    </CardTitle>
                    <card.icon className="h-6 w-6 text-blue-500 ml-auto" />
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">{card.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            {children}
          </div>
        </main>
      </div>
      <footer className="bg-white shadow-sm mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            © 2023 WaterForecast. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link to="#" className="text-sm text-gray-500 hover:text-blue-600">
              Privacy Policy
            </Link>
            <Link to="#" className="text-sm text-gray-500 hover:text-blue-600">
              Terms of Service
            </Link>
            <Link to="#" className="text-sm text-gray-500 hover:text-blue-600">
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
