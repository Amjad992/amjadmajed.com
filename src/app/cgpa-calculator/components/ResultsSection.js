import PropTypes from 'prop-types';
import {
  getPerformanceLevel,
  getPerformanceBarWidth,
  formatToDecimalPlaces,
} from '../utils';
import {PERFORMANCE_BAR_LABELS} from '../constants';

export default function ResultsSection({cgpa, totalCredits, semesterCount}) {
  const performanceText = getPerformanceLevel(cgpa, totalCredits);
  const performanceWidth = getPerformanceBarWidth(cgpa);

  return (
    <section className="results-section">
      <div className="results-grid">
        <div className="result-card">
          <h3>CGPA</h3>
          <div className="result-value">{formatToDecimalPlaces(cgpa)}</div>
          <p>Cumulative Grade Point Average</p>
        </div>
        <div className="result-card">
          <h3>Total Credits</h3>
          <div className="result-value">{totalCredits}</div>
          <p>Total Credit Hours</p>
        </div>
        <div className="result-card">
          <h3>Semesters</h3>
          <div className="result-value">{semesterCount}</div>
          <p>Number of Semesters</p>
        </div>
      </div>

      {/* Performance Indicator */}
      <div className="performance-indicator">
        <h3>Performance Level</h3>
        <div className="performance-bar">
          <div
            className="performance-fill"
            style={{width: `${performanceWidth}%`}}
          ></div>
        </div>
        <div className="performance-labels">
          {PERFORMANCE_BAR_LABELS.map((label, index) => (
            <span key={label}>{label}</span>
          ))}
        </div>
        <p className="performance-text">{performanceText}</p>
      </div>
    </section>
  );
}

ResultsSection.propTypes = {
  cgpa: PropTypes.number.isRequired,
  totalCredits: PropTypes.number.isRequired,
  semesterCount: PropTypes.number.isRequired,
};
