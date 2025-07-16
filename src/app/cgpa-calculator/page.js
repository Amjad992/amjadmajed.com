'use client';
import Navigation from '../../components/Navigation';
import HeroSection from './components/HeroSection';
import GradeManagement from './components/GradeManagement';
import CalculatorHeader from './components/CalculatorHeader';
import SemesterCard from './components/SemesterCard';
import ResultsSection from './components/ResultsSection';
import {useCGPACalculator, useGradeManagement} from './hooks';
import './cgpa-calculator.css';

export default function CGPACalculator() {
  // Grade management hook
  const {
    customGrades,
    updateCustomGrade,
    addCustomGrade,
    removeCustomGrade,
    resetGradesToDefault,
  } = useGradeManagement();

  // CGPA calculator hook
  const {
    semesters,
    cgpa,
    totalCredits,
    addSemester,
    removeSemester,
    updateSemesterName,
    addSubject,
    removeSubject,
    updateSubject,
    resetCalculator,
  } = useCGPACalculator(customGrades);

  // Helper to update subject with access to customGrades
  const handleUpdateSubject = (semesterId, subjectIndex, field, value) => {
    updateSubject(semesterId, subjectIndex, field, value, customGrades);
  };

  return (
    <>
      <Navigation />
      <main className="cgpa-calculator-page">
        <div className="container">
          <HeroSection />

          <GradeManagement
            customGrades={customGrades}
            onUpdateGrade={updateCustomGrade}
            onAddGrade={addCustomGrade}
            onRemoveGrade={removeCustomGrade}
            onResetGrades={resetGradesToDefault}
          />

          {/* Calculator Section */}
          <section className="calculator-section">
            <CalculatorHeader
              onAddSemester={addSemester}
              onResetCalculator={resetCalculator}
            />

            {/* Semesters */}
            {semesters.map((semester) => (
              <SemesterCard
                key={semester.id}
                semester={semester}
                customGrades={customGrades}
                onUpdateSemesterName={updateSemesterName}
                onAddSubject={addSubject}
                onRemoveSubject={removeSubject}
                onUpdateSubject={handleUpdateSubject}
                onRemoveSemester={removeSemester}
                canRemoveSemester={semesters.length > 1}
              />
            ))}
          </section>

          <ResultsSection
            cgpa={cgpa}
            totalCredits={totalCredits}
            semesterCount={semesters.length}
          />
        </div>
      </main>
    </>
  );
}
