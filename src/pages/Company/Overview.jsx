import React from "react";

const Overview = () => {
  return (
    <div className="overview-container ml-[17%]">
      <h2 className="overview-title">Overview</h2>
      <div className="overview-content">
        {/* Summary Section */}
        <section className="summary-section">
          <h3>Summary</h3>
          <p>Brief description or key highlights go here.</p>
        </section>

        {/* Statistics Section */}
        <section className="statistics-section">
          <h3>Statistics</h3>
          <div className="stats-grid">
            {/* Add statistic items here */}
          </div>
        </section>

        {/* Recent Activity Section */}
        <section className="recent-activity-section">
          <h3>Recent Activity</h3>
          <ul>
            {/* List of recent actions or updates */}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Overview;
