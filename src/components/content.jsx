import "./content.css";
import house from "../assets/DashboardHousePhoto.png";

import {
  Plus,
  HousePlus,
  LayoutGrid,
  ClipboardList,
  ChartNoAxesCombined,
} from "lucide-react";

export function Content() {
  return (
    <main className="dashboard-content">
      <div className="welcome-content">
        <h1>Welcome</h1>
        <p>Manage your property renovation projects.</p>

        {/* Empty project state */}
        <section className="start-new-project-container">
          <div className="new-project-content">
            <img
              className="house-img"
              src={house}
              alt="Illustration of a house representing a new renovation project"
            />

            <h2>You don't have any projects yet</h2>

            <p className="text-content">
              Start a new renovation project to organise your rooms, track work,
              manage costs and keep everything in one place.
            </p>

            <button className="start-new-project-btn" type="button">
              <Plus size={18} />
              Start a New Project
            </button>
          </div>
        </section>

        {/* How it works */}
        <section className="project-instructions-container">
          <h2>How it works</h2>

          <div className="project-instructions-content">
            {/* Step 1 */}
            <div className="project-instructions-content-card">
              <div className="step-card-header">
                <div className="step-icon">
                  <HousePlus size={24} />
                </div>
                <span className="step-number">STEP 01</span>
              </div>

              <div className="step-text">
                <h3>Create a Project</h3>
                <p className="paragraph-content">
                  Enter your property details and renovation goals.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="project-instructions-content-card">
              <div className="step-card-header">
                <div className="step-icon">
                  <LayoutGrid size={24} />
                </div>
                <span className="step-number">STEP 02</span>
              </div>

              <div className="step-text">
                <h3>Add Property Areas</h3>
                <p className="paragraph-content">
                  Set up your rooms, floors and outdoor spaces.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="project-instructions-content-card">
              <div className="step-card-header">
                <div className="step-icon">
                  <ClipboardList size={24} />
                </div>
                <span className="step-number">STEP 03</span>
              </div>

              <div className="step-text">
                <h3>Define the Work</h3>
                <p className="paragraph-content">
                  Add tasks, materials and estimated costs.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="project-instructions-content-card">
              <div className="step-card-header">
                <div className="step-icon">
                  <ChartNoAxesCombined size={24} />
                </div>
                <span className="step-number">STEP 04</span>
              </div>

              <div className="step-text">
                <h3>Track & Manage</h3>
                <p className="paragraph-content">
                  Monitor progress and update tasks as work is completed.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
