import Navigation from '../../components/Navigation';
import './awards.css';

export default function Awards() {
  return (
    <>
      <Navigation />
      <main className="awards-page">
        <div className="container">
          {/* Hero Section */}
          <section className="awards-hero">
            <h1>Awards</h1>
            <p className="awards-tagline">
              Recognition for dedication, excellence, and achievement
            </p>
          </section>

          {/* Awards Content */}
          <section className="awards-content">
            <div className="awards-grid">
              {/* Award 1 */}
              <div className="award-card">
                <div className="award-icon">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div className="award-content">
                  <h3>
                    Best Project Award in the Annual Final Year Projects
                    Exhibition
                  </h3>
                  <div className="award-institution">
                    University of Engineering and Technology (UET) - Lahore
                  </div>
                  <div className="award-year">2017</div>
                  <p className="award-description">
                    Awarded the title of the best project over computer science
                    batch in the Final Year Projects Exhibition organized by The
                    Computer Science and Engineering department in UET Lahore.
                    The award was given for our project titled &quot;Gesture
                    Identification using Image Processing&quot;.
                  </p>
                  <div className="award-tags">
                    <span className="tag">Academic Excellence</span>
                    <span className="tag">First Position</span>
                    <span className="tag">Computer Science</span>
                    <span className="tag">Image Processing</span>
                    <span className="tag">Team Project</span>
                  </div>
                </div>
              </div>

              {/* Award 2 */}
              <div className="award-card">
                <div className="award-icon">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 11H7v3h2v-3zm4 0h-2v3h2v-3zm4 0h-2v3h2v-3zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
                  </svg>
                </div>
                <div className="award-content">
                  <h3>
                    Winner of the Third Annual Computer Competition for Students
                    of The Republic of Yemen
                  </h3>
                  <div className="award-institution">
                    Ministry of Education - Republic of Yemen
                  </div>
                  <div className="award-year">2008</div>
                  <p className="award-description">
                    Secured the first position in the computer competition held
                    in the capital Sana&apos;a that was organized by the
                    Ministry of Education for the students of the Republic of
                    Yemen. Represented Taiz governorate in the competition and
                    was awarded a PC as a prize for winning the title.
                  </p>
                  <div className="award-tags">
                    <span className="tag">National Competition</span>
                    <span className="tag">First Position</span>
                    <span className="tag">Computer Skills</span>
                    <span className="tag">Regional Representative</span>
                  </div>
                </div>
              </div>

              {/* Award 3 */}
              <div className="award-card">
                <div className="award-icon">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div className="award-content">
                  <h3>
                    Winner of the Second Annual Computer Competition for
                    Students of Taiz Governorate
                  </h3>
                  <div className="award-institution">
                    Educational Authority - Taiz Governorate
                  </div>
                  <div className="award-year">2007</div>
                  <p className="award-description">
                    Secured the first position in the regional computer
                    competition organized for students of Taiz governorate. This
                    achievement led to the opportunity to represent the
                    governorate in the national competition the following year.
                  </p>
                  <div className="award-tags">
                    <span className="tag">Regional Competition</span>
                    <span className="tag">First Position</span>
                    <span className="tag">Computer Skills</span>
                    <span className="tag">Governorate Champion</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
