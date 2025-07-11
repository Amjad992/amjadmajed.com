import Navigation from '../../components/Navigation';
import './voluntary.css';

export default function Voluntary() {
  return (
    <>
      <Navigation />
      <main className="voluntary-page">
        <div className="container">
          {/* Hero Section */}
          <section className="voluntary-hero">
            <h1>Voluntary Work</h1>
            <p className="voluntary-tagline">
              Community service, leadership, and making a positive impact
              through volunteer initiatives
            </p>
          </section>

          {/* Voluntary Work Content */}
          <section className="voluntary-content">
            <div className="voluntary-grid">
              {/* Voluntary Work 1 */}
              <div className="voluntary-card">
                <div className="voluntary-header">
                  <div className="voluntary-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div className="voluntary-main">
                    <h3>
                      Founding member and The Cultural and Social officer - YSUP
                    </h3>
                    <div className="voluntary-organization">
                      The Yemeni Students Union in Punjab - Pakistan
                    </div>
                    <div className="voluntary-period">
                      November 2016 - March 2018
                    </div>
                  </div>
                </div>
                <div className="voluntary-description">
                  <p>
                    I have been involved in establishing a structure that
                    embraces the Yemeni students in Punjab Province - Pakistan.
                    The Yemeni Students Union in Punjab - Pakistan aims to serve
                    Yemenis, ease their lives, encourage their talents and
                    connect them in a better way.
                  </p>
                  <p>
                    Being the cultural and social officer, I am responsible to
                    manage different activities like trips, celebrations and
                    culture day activities with the goal of bringing Yemenis
                    closer to each other.
                  </p>
                </div>
                <div className="voluntary-tags">
                  <span className="tag leadership">Founding Member</span>
                  <span className="tag community">Cultural Officer</span>
                  <span className="tag community">Social Activities</span>
                  <span className="tag">Student Union</span>
                </div>
              </div>

              {/* Voluntary Work 2 */}
              <div className="voluntary-card">
                <div className="voluntary-header">
                  <div className="voluntary-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                  <div className="voluntary-main">
                    <h3>Yemeni Community Representative - UET Lahore</h3>
                    <div className="voluntary-organization">
                      University of Engineering and Technology (UET) - Lahore
                    </div>
                    <div className="voluntary-period">May 2016 - May 2017</div>
                  </div>
                </div>
                <div className="voluntary-description">
                  <p>
                    In my final year at the university, I represented the Yemeni
                    community studying at The University of Engineering and
                    Technology (UET) - Lahore - Pakistan.
                  </p>
                  <p>
                    My duties included representing my country fellows before
                    the university officials, deliver their voices and concerns
                    for the upper management and fight for their rights when
                    needed. I also had to be the link between my colleagues and
                    our embassy in Islamabad for any required communication.
                  </p>
                  <p>
                    I was responsible too for ensuring the settlement, stability
                    and guiding the new Yemenis admitted into UET. Also, I had
                    been the second vice representative than the vice
                    representative in my second and third years respectively.
                  </p>
                </div>
                <div className="voluntary-tags">
                  <span className="tag leadership">
                    Community Representative
                  </span>
                  <span className="tag">Student Affairs</span>
                  <span className="tag">Embassy Liaison</span>
                  <span className="tag community">Mentorship</span>
                </div>
              </div>

              {/* Voluntary Work 3 */}
              <div className="voluntary-card">
                <div className="voluntary-header">
                  <div className="voluntary-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                    </svg>
                  </div>
                  <div className="voluntary-main">
                    <h3>
                      Founding Board Member and Financial Officer - Pioneers of
                      Charity
                    </h3>
                    <div className="voluntary-organization">
                      Pioneers of Charity Organization - UET Lahore
                    </div>
                    <div className="voluntary-period">
                      April 2016 - July 2017
                    </div>
                  </div>
                </div>
                <div className="voluntary-description">
                  <p>
                    I was a founding board member and financial officer of
                    Pioneers of Charity organization that was formed inside
                    Iqbal hall in UET Lahore. The goal was to allow the
                    foreigner community residing in Iqbal hall to help a bit and
                    give back even a little for the Pakistani community that
                    showed us all the love and acceptance.
                  </p>
                  <p>
                    With Allah grace and help We are now sponsoring 5 families
                    and providing them with the basic needs of their life from
                    wheat and rice up to the tea and cooking oil. The charity
                    has also started a program of drilling water wells in some
                    of the neediest areas in Pakistan, and Alhamdulillah first
                    well has been completed in April 2017 and the second one is
                    about to be started.
                  </p>
                </div>
                <div className="voluntary-tags">
                  <span className="tag leadership">Founding Member</span>
                  <span className="tag charity">Financial Officer</span>
                  <span className="tag charity">Family Sponsorship</span>
                  <span className="tag charity">Water Wells Project</span>
                </div>
              </div>

              {/* Voluntary Work 4 */}
              <div className="voluntary-card">
                <div className="voluntary-header">
                  <div className="voluntary-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" />
                    </svg>
                  </div>
                  <div className="voluntary-main">
                    <h3>
                      Media And Communications Officer - The Youth Committee of
                      Al-Rahman Mosque
                    </h3>
                    <div className="voluntary-organization">
                      Al-Rahman Mosque Youth Committee
                    </div>
                    <div className="voluntary-period">
                      January 2009 - December 2013
                    </div>
                  </div>
                </div>
                <div className="voluntary-description">
                  <p>
                    I was the media and communications officer in our local
                    mosque youth committee which is a reputable committee across
                    the city.
                  </p>
                  <p>
                    My duties included but weren't limited to managing small
                    teams to prepare magazines, fliers, booklets. I also had to
                    make sure our events announcements and advertisements was
                    covering the largest part of the city. All techy tasks
                    needed for our work had to be done by me or under my
                    supervision.
                  </p>
                </div>
                <div className="voluntary-tags">
                  <span className="tag technical">Media Officer</span>
                  <span className="tag">Communications</span>
                  <span className="tag community">Event Management</span>
                  <span className="tag technical">Publications</span>
                </div>
              </div>

              {/* Voluntary Work 5 */}
              <div className="voluntary-card">
                <div className="voluntary-header">
                  <div className="voluntary-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                    </svg>
                  </div>
                  <div className="voluntary-main">
                    <h3>Founding Board Member - Basmat Development Forum</h3>
                    <div className="voluntary-organization">
                      Basmat Development Forum
                    </div>
                    <div className="voluntary-period">
                      April 2012 - December 2013
                    </div>
                  </div>
                </div>
                <div className="voluntary-description">
                  <p>
                    I was a founding board member of this forum that aimed to
                    spread knowledge in the youth generation to face the
                    dangerous ideas and misconceptions that might affect the
                    youth of our country.
                  </p>
                  <p>
                    It also aimed to give the young the weapon of skills to help
                    them in facing what is coming in life.
                  </p>
                </div>
                <div className="voluntary-tags">
                  <span className="tag leadership">Founding Member</span>
                  <span className="tag educational">Youth Development</span>
                  <span className="tag educational">Knowledge Sharing</span>
                  <span className="tag community">Skills Training</span>
                </div>
              </div>

              {/* Voluntary Work 6 */}
              <div className="voluntary-card">
                <div className="voluntary-header">
                  <div className="voluntary-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.5 6c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 8c1.86.5 4 .83 6 1v13h2v-6h2v6h2V9c2-.17 4.14-.5 6-1l-.5-2zM12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                    </svg>
                  </div>
                  <div className="voluntary-main">
                    <h3>
                      Volunteer to solve technical problems - The Counseling and
                      Psychological Researches Center
                    </h3>
                    <div className="voluntary-organization">
                      Taiz University
                    </div>
                    <div className="voluntary-period">2007 - 2010</div>
                  </div>
                </div>
                <div className="voluntary-description">
                  <p>
                    I had volunteered to solve technical issues faced by the
                    staff of the center, as they were not experts in dealing
                    with computers and many of their problems weren't that much
                    of an issue.
                  </p>
                  <p>
                    I had solved many of their issues and helped to ease their
                    experience and work when needed.
                  </p>
                </div>
                <div className="voluntary-tags">
                  <span className="tag technical">Technical Support</span>
                  <span className="tag technical">
                    Computer Troubleshooting
                  </span>
                  <span className="tag">University Service</span>
                  <span className="tag">Staff Support</span>
                </div>
              </div>

              {/* Voluntary Work 7 */}
              <div className="voluntary-card">
                <div className="voluntary-header">
                  <div className="voluntary-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M14 6V4h-4v2h4zM4 8v11h16V8H4zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2h4z" />
                    </svg>
                  </div>
                  <div className="voluntary-main">
                    <h3>
                      Volunteer in the arrangement of - The Fourth National
                      Conference of Childhood
                    </h3>
                    <div className="voluntary-organization">
                      Taiz University
                    </div>
                    <div className="voluntary-period">June 2009</div>
                  </div>
                </div>
                <div className="voluntary-description">
                  <p>
                    This conference was held at Taiz University and attracted
                    participants interested in psychology and child issues from
                    all over the Arab world.
                  </p>
                  <p>
                    The organizing committee had planned to present a paper
                    discussing the designs and specifications required for an
                    ideal kindergarten. As an accompanying material to the
                    paper, they assigned me to deliver an AutoCAD design of
                    their proposed ideas to show in the conference.
                  </p>
                </div>
                <div className="voluntary-tags">
                  <span className="tag technical">AutoCAD Design</span>
                  <span className="tag educational">Conference Support</span>
                  <span className="tag">Child Development</span>
                  <span className="tag">International Event</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
