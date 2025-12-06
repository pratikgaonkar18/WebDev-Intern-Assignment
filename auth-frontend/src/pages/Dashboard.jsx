import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  async function loadUser() {
    try {
      const res = await api.get("/auth/me");
      setUser(res.data.user);
    } catch (err) {
      // token invalid, go back to login
      localStorage.removeItem("authToken");
      navigate("/login");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  if (loading) {
    return (
      <div className="full-center">
        <div className="loader" />
        <p>Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <div className="dashboard-header">
          <div>
            <h1>Welcome, {user?.name || user?.email} 🎉</h1>
            <p className="dashboard-subtitle">
              You have successfully logged in. This is your dashboard.
            </p>
          </div>
          <button className="btn btn-outline" onClick={handleLogout}>
            Logout
          </button>
        </div>

        <div className="dashboard-boxes">
          <div className="dash-box">
            <h3>Profile</h3>
            <p>
              Email: <strong>{user?.email}</strong>
            </p>
            <p>
              Joined on:{" "}
              <strong>{new Date(user?.createdAt).toLocaleDateString()}</strong>
            </p>
          </div>
          <div className="dash-box">
  <h3>Account Details</h3>
  <p>User ID: <strong>{user?._id}</strong></p>
  <p>Role: <strong>Member</strong></p>
  <p>Status: <strong>Active</strong></p>
</div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;
