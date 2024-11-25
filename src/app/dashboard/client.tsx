import { Bell } from "lucide-react"

export default function DashBoardClient() {
  return (
    <div className=" bg-gray-50">


      <div className="py-6 space-y-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-semibold">
              S
            </div>
            <h2 className="text-xl font-semibold">Hello Samuel</h2>
          </div>
          <div className="relative">
            <Bell className="h-6 w-6" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              3
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "All Time Earnings", value: "₦ 12,000.00", icon: "₦" },
            { title: "Total Withdrawn", value: "₦ 10,000.00", icon: "₦" },
            { title: "Total Survey", value: "10,000", icon: "📋" },
          ].map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">{item.title}</span>
                <span className="text-gray-600">{item.icon}</span>
              </div>
              <div className="text-2xl font-bold">{item.value}</div>
              <div className="text-xs text-gray-500">Updated at every new Survey</div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="w-full max-w-md py-2 px-4 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            Take Survey
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Recent Transactions</h3>
            <button className="text-green-500 text-sm font-medium">See All</button>
          </div>

          <div className="space-y-3">
            {[
              { status: "Pending", color: "text-amber-500" },
              { status: "Successful", color: "text-green-500" },
              { status: "Failed", color: "text-red-500" },
              { status: "Successful", color: "text-green-500" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm"
              >
                <div className="space-y-1">
                  <div className="font-semibold">Withdrawal</div>
                  <div className="text-sm text-gray-500">June 3, 3:40am</div>
                </div>
                <div className="space-y-1 text-right">
                  <div className="font-semibold">- ₦ 3,000.00</div>
                  <div className={`text-sm ${item.color}`}>{item.status}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}