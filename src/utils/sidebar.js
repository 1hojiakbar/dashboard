// sidebar item svg
import SummaryIcon from "../assets/icons/summary.svg?react";
import PaymentIcon from "../assets/icons/payment.svg?react";
import CustomersIcon from "../assets/icons/customers.svg?react";
import OrdersIcon from "../assets/icons/orders.svg?react";

// Generics
import Generic from "../view/Generic";

import Summary from "../pages/Summary/";
import Customers from "../pages/Customers/";
import Payment from "../pages/Payment";
import Orders from "../pages/Orders";

// ------------------------------

// sidebar items data
const sidebarData = [
  {
    id: 1,
    path: "/summary",
    label: "Summary",
    icon: SummaryIcon,
    element: Summary,
  },
  {
    id: 2,
    path: "/payment",
    label: "Payment",
    icon: PaymentIcon,
    element: Payment,
  },
  {
    id: 3,
    path: "/customers",
    label: "Customers",
    icon: CustomersIcon,
    element: Customers,
  },
  {
    id: 4,
    path: "/orders",
    label: "Orders",
    icon: OrdersIcon,
    element: Orders,
  },
];

export default sidebarData;
