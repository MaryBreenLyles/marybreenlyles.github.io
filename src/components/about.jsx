import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About</span>
                    <h2 className="colorlib-heading">Who am I? What Am I?</h2>
                    <p>I'll start by answering the first question, since I have yet to find a satisfying answer to the second. I am a self-taught software developer with a couple degrees under my belt. I relish opportunities to solve problems, and I'm always learning!</p>
                    <p>Currently based in Chicago, IL, I live inside my computer. Just me, my keyboard, and a mysterious series of tubes filled with information and cat memes. </p>
                    <p>I also enjoy skating, running, cartooning, and nutella directly from the jar.</p>
                    <p>I've tried to compile my most relevant experience and projects here, and will be trying to keep up with updating, so take a look and let me show you what I got! :D </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What do I do?</span>
                <h2 className="colorlib-heading">Here's some of my primary experience</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon icon-keyboard" >
                    <i className="icon-heart-outline" />
                </span>
                <div className="desc">
                    <h3>Web Development, Programming </h3>
                    <p>I've developed web apps using Ruby on Rails, React, PHP, HTML, CSS, and Javascript, in addition to the asynchronous web scraper I built using Python last year. I had a whale of a time scripting for an obscure molecular mechanics simulation software while working on my master's thesis and writing oodles of TCL and Python tools to help me with it.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-study" />
                </span>
                <div className="desc">
                    <h3>Mechanical Engineering and Physics</h3>
                    <p>My formal educational background is mostly in these two fields, with my Bachelor's in Physics and Master's in Mechanical Engineering. I've done some pretty fun stuff in my internships and research, including contributing to the restoration of a sick 500 keV Van de Graaff powered proton accelerator!</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-food" />
                </span>
                <div className="desc">
                    <h3>Volunteering</h3>
                    <p>Spreading love in the form of good food is one of my biggest motivators, especially as more and more people are losing access to it. I'm a volunteer food distributor with The Love Fridge here in Chicago, and I also do farm work with Urban Growers Collective during the growing season. </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
