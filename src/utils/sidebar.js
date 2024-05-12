// sidebar item svg
import SummaryIcon from "../assets/icons/summary.svg?react";
import PaymentIcon from "../assets/icons/payment.svg?react";
import CustomersIcon from "../assets/icons/customers.svg?react";
import OrdersIcon from "../assets/icons/orders.svg?react";

// Generics
import Generic from "../view/Generic";

import Elements from "../pages/Summary/";

// ------------------------------

// sidebar items data
const sidebarData = [
  {
    id: 1,
    path: "/summary",
    label: "Summary",
    icon: SummaryIcon,
    element: Elements,
  },
  {
    id: 2,
    path: "/payment",
    label: "Payment",
    icon: PaymentIcon,
    element: Generic,
  },
  {
    id: 3,
    path: "/customers",
    label: "Customers",
    icon: CustomersIcon,
    element: Generic,
  },
  {
    id: 4,
    path: "/orders",
    label: "Orders",
    icon: OrdersIcon,
    element: Generic,
  },
];

export default sidebarData;
