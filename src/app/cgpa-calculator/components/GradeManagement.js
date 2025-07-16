import PropTypes from 'prop-types';
import {GRADE_POINT_LIMITS} from '../constants';

export default function GradeManagement({
  customGrades,
  onUpdateGrade,
  onAddGrade,
  onRemoveGrade,
  onResetGrades,
}) {
  const handleGradeNameChange = (oldGrade, newGrade) => {
    const points = customGrades[oldGrade];
    onUpdateGrade(oldGrade, newGrade, points);
  };

  const handlePointsChange = (grade, points) => {
    onUpdateGrade(grade, grade, points);
  };

  const handlePointsInputChange = (e, grade, currentPoints) => {
    const value = e.target.value;

    // Allow temporary values while typing
    if (
      value === '' ||
      (parseFloat(value) >= GRADE_POINT_LIMITS.min &&
        parseFloat(value) <= GRADE_POINT_LIMITS.max)
    ) {
      // Valid input or empty, let it be
    } else {
      // Invalid input, reset to current value
      e.target.value = currentPoints;
    }
  };

  return (
    <section className="custom-system-config">
      <div className="grade-management-header">
        <h3>Configure Grade Points</h3>
        <div className="grade-management-actions">
          <button
            onClick={onResetGrades}
            className="reset-grades-btn"
            title="Reset to default grades"
          >
            Reset to Default
          </button>
        </div>
      </div>

      <div className="custom-grades-grid">
        {Object.entries(customGrades).map(([grade, points]) => (
          <div key={grade} className="custom-grade-item">
            <div className="grade-header">
              <input
                type="text"
                defaultValue={grade}
                onBlur={(e) => handleGradeNameChange(grade, e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.target.blur();
                  }
                }}
                className="grade-name-input"
                placeholder="Grade"
                title="Click to edit grade name"
              />
              <div className="grade-actions">
                <button
                  onClick={() => onRemoveGrade(grade)}
                  className="grade-action-btn delete"
                  title="Delete this grade"
                  disabled={Object.keys(customGrades).length <= 1}
                >
                  ×
                </button>
              </div>
            </div>
            <input
              type="number"
              step={GRADE_POINT_LIMITS.step}
              min={GRADE_POINT_LIMITS.min}
              max={GRADE_POINT_LIMITS.max}
              defaultValue={points}
              onBlur={(e) => handlePointsChange(grade, e.target.value)}
              onChange={(e) => handlePointsInputChange(e, grade, points)}
              className="grade-points-input"
              placeholder="Points"
              title={`Grade point value (${GRADE_POINT_LIMITS.min}-${GRADE_POINT_LIMITS.max})`}
            />
          </div>
        ))}
      </div>

      <div className="add-grade-container">
        <button onClick={onAddGrade} className="add-grade-btn">
          Add New Grade
        </button>
      </div>
    </section>
  );
}

GradeManagement.propTypes = {
  customGrades: PropTypes.objectOf(PropTypes.number).isRequired,
  onUpdateGrade: PropTypes.func.isRequired,
  onAddGrade: PropTypes.func.isRequired,
  onRemoveGrade: PropTypes.func.isRequired,
  onResetGrades: PropTypes.func.isRequired,
};
