import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("common/pages/home-page.tsx"),
  ...prefix("home", [
    index("features/home/pages/home-page.tsx"),
    route("/about", "features/home/pages/about-page.tsx"),
    route("/coaches", "features/home/pages/coaches-page.tsx"),
    route("/schedule", "features/home/pages/schedule-page.tsx"),
  ]),
  ...prefix("membership", [
    index("features/membership/pages/membership-page.tsx"),
    route("/my-plan", "features/membership/pages/my-plan-page.tsx"),
    route("/payment", "features/membership/pages/payment-page.tsx"),
    route("/renew-upgrade", "features/membership/pages/renew-upgrade-page.tsx"),
    route("/cancel", "features/membership/pages/cancel-page.tsx"),
  ]),
  ...prefix("attendance", [
    index("features/attendance/pages/attendance-page.tsx"),
    route("/my-attendance", "features/attendance/pages/my-attendance-page.tsx"),
    route("/check-in", "features/attendance/pages/check-in-page.tsx"),
  ]),
] satisfies RouteConfig;
