// Default redirect path after logging in
export const DEFAULT_LOGIN_REDIRECT = "/admin";

// Prefix for API authentication routes
export const apiAuthPrefix = "/api";

// Prefix for Jobs routes
export const JobsPrefix = "/jobs";

// Public Routes, Do not require authentication
export const publicRoutes = [
  "/",
  "/about",
  "/partners",
  "/contact",
];  

// Used for authentication, Redirect to /settings
export const authRoutes = [
  "/auth/login", 
  "/auth/register",
  "/auth/error",
  "/auth/reset",
];  

