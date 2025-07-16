import PropTypes from 'prop-types';

export default function CalculatorHeader({onAddSemester, onResetCalculator}) {
  return (
    <div className="calculator-header">
      <h3>Enter Your Semesters and Subjects</h3>
      <div className="calculator-actions">
        <button onClick={onAddSemester} className="add-btn">
          Add Semester
        </button>
        <button onClick={onResetCalculator} className="reset-btn">
          Reset All
        </button>
      </div>
    </div>
  );
}

CalculatorHeader.propTypes = {
  onAddSemester: PropTypes.func.isRequired,
  onResetCalculator: PropTypes.func.isRequired,
};
