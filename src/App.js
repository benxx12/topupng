import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Auth pages
import LoginPage from "./frontend/src/pages/auth/LoginPage";
import SignUpPage from "./frontend/src/pages/auth/SignUpPage";
import ResetPasswordPage from "./frontend/src/pages/auth/ResetPasswordPage";

// App pages
import DashboardPage from "./frontend/src/pages/app/DashboardPage";
import BuyAirtimePage from "./frontend/src/pages/app/BuyAirtimePage";
import BuyDataPage from "./frontend/src/pages/app/BuyDataPage";
import HistoryPage from "./frontend/src/pages/app/HistoryPage";
import AccountPage from "./frontend/src/pages/app/AccountPage";
import NotFoundPage from "./frontend/src/pages/app/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default: redirect root to login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* ── Auth routes ── */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />

        {/* ── App routes ── */}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/airtime" element={<BuyAirtimePage />} />
        <Route path="/data" element={<BuyDataPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/account" element={<AccountPage />} />

        {/* ── 404 catch-all ── */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
