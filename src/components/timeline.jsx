import React, { Component } from 'react'

export default class Timeline extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-experience" data-section="timeline">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">highlights</span>
                                <h2 className="colorlib-heading animate-box">Timeline</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="timeline-centered">
                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-3">
                                                <i className="icon-pen2" />
                                            </div>
                                            <div className="timeline-label">
                                                <h2>Junior Software Developer @ Almotech Media Solutions <span>October 2018-present</span></h2>
                                                <p> I strated in Almotech as a Graduate Software Developer and soon after i was promoted to Junior Software Developer. At my position with Almotech Media Solutions we used Java EE, Spring, MySQL and Java Server Faces as our main tech stack. Recently I have moved projects where we are using the React Framework.    </p>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-4">
                                                <i className="icon-pen2" />
                                            </div>
                                            <div className="timeline-label">
                                                <h2>Student Placement @ Studio93 <span>February 2017-September 2017</span></h2>
                                                <p>For my 3rd year work placement i spent 8 months in Studio93 a web design studio. Here my love for UI design and UX grew. I helped on many different projects working with graphic designers to build new and maintain existing websites for clients. </p>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-5">
                                                <i className="icon-book2" />
                                            </div>
                                            <div className="timeline-label">
                                                <h2>Bachelor of Science in Computer Science & Software Engineering <span>2014-2018</span></h2>
                                                <p>I graduated from Maynooth University with a Bachelor of Science degree in Computer Science & Software Engineering. During this time i developed my problem solving skills working on my own and as part of many teams. </p>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-none">
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}