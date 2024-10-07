import { Package2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <Link to="/" className="flex items-center space-x-2 text-blue-600">
            <Package2 className="h-6 w-6" />
            <span className="text-lg font-semibold">WaterForecast</span>
          </Link>
        </div>
        <nav className="mt-6">
          <Link
            to="/dashboard"
            className="block py-2 px-4 text-gray-600 hover:bg-gray-100"
          >
            Dashboard
          </Link>
          <Link
            to="/data-input"
            className="block py-2 px-4 text-gray-600 hover:bg-gray-100"
          >
            Data Input
          </Link>
          <Link
            to="/forecast-results"
            className="block py-2 px-4 text-gray-600 hover:bg-gray-100"
          >
            Forecast Results
          </Link>
          <Link
            to="/scenario-analysis"
            className="block py-2 px-4 text-gray-600 hover:bg-gray-100"
          >
            Scenario Analysis
          </Link>
          <Link
            to="/risk-assessment"
            className="block py-2 px-4 text-gray-600 hover:bg-gray-100"
          >
            Risk Assessment
          </Link>
          <Link
            to="/reports"
            className="block py-2 px-4 text-gray-600 hover:bg-gray-100"
          >
            Reports
          </Link>
        </nav>
      </aside>
      <main className="flex-1 p-8 overflow-auto">{children}</main>
    </div>
  );
}
