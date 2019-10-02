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
                    <p>I'll start by answering the first question, since I have yet to find a satisfying answer to the second. I am a grad student in Mechanical Engineering with a BS in Physics under my belt (BS stands for Bachelor of Science...in case...you know, that were misinterpreted). I love science and math, and I want to help foster more inclusive spaces for women and underrepresented groups to explore those fields with complete freedom!</p>
                    <p>Right now I work as a freelance web developer based in Chicago, IL, and I'm currently on a learning safari. Just me, my keyboard, and a mysterious series of tubes filled to the brim with info on crazy new Javascript frameworks and other web technologies ripe for the picking! I am especially interested in React, its unique applications, and elegant style. I built most of this website using it! </p>
                    <p>My interests are not so singular as to never deviate outside of the STEM fields, though. My other hobbies include skating, cooking, running, and eating nutella out of the jar with an ice cream scoop (it's more popular than you think, try it, it'll change your life).</p>
                    <p>I tried to compile my more interesting experience and projects here, and will be trying to keep up with updating, so take a look and let me show you what I got! :D </p>
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
                <h2 className="colorlib-heading">Here's some of my primary expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon icon-keyboard" >
                    <i className="icon-heart-outline" />
                </span>
                <div className="desc">
                    <h3>Web Development, General Programming </h3>
                    <p>I have experience developing web applications using JavaScript, React, PHP, HTML, CSS. I also had a whale of a time scripting for an obscure molecular mechanics simulation software while working on my master's thesis and writing oodles of fun TCL and python tools to help me with it.</p>
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
                    <p>My background is mostly in these two fields, with my Bachelor's in Physics and Master's in Mechanical Engineering. I've done some pretty fun stuff in my internships and research, including contributing to the restoration of a sick 500 keV Van de Graaff powered proton accelerator! I wrote my undergraduate honors thesis on the accelerator's bending electromagnet :D</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-pencil" />
                </span>
                <div className="desc">
                    <h3>Education</h3>
                    <p>I am very passionate about spreading love in the form of knowledge and information! I worked and volunteered as a lab instructor and tutor for the Beloit College Physics Dept and the Girls and Women in Science program - both were immensely fun and rewarding. I would love to do this more in the future and I hope I get the chance!</p>
                </div>
                </div>
            </div>
            {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
            </div>
        </div>
        </section>
      </div>
    )
  }
}
