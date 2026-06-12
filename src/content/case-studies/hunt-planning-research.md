---
title: Hunt Planning Research
description: A multi-method research project into how hunters plan their hunts, culminating in Moultrie's first cross-functional design workshop.
date: 2026-01-14
skills:
  [
    "User Research",
    "Design Workshop",
    "Product Strategy",
    "Cross-functional Leadership",
  ]
---

# Hunt Planning Research

**Role:** Product Designer (research lead)
**Timeline:** September 2025 to January 2026
**Team:** Design Team, Cross-Functional Workshop Participants

**Outcome:**
A multi-method research project into how hunters plan their hunts, culminating in Moultrie's first cross-functional design workshop. The research reframed how the team understands hunt planning, and that framing became the reference point for a major product initiative now in development. One concept from the workshop is confirmed for that initiative.

---

This project produced no shipped feature, and that's the point of including it. The work here is research that changed what the company decided to build:

- Reframed hunt planning from a missing-features problem to a coordination and timing problem
- Designed and helped run Moultrie's first cross-functional design workshop: 13 participants, 75% strongly agreed it was valuable, 88% wanted to participate again
- A workshop prototype surfaced an offseason opportunity that is now confirmed scope in a major initiative in development

---

## Problem

Moultrie already had tools for hunt planning. Game Plan combined activity forecasts with property maps. There was a wind tool. Property lines overlaid satellite imagery. But usage told a different story. Hunters weren't finding these features, and the ones who found them often didn't stick with them.

Meanwhile, hunters were juggling apps. Weather from one, wind forecasts from another, their camera feed from Moultrie, scouting notes somewhere else. The data they needed existed. Getting it in one place didn't.

I was asked to understand why the planning features weren't landing and what a better version of hunt planning could look like. The honest version of the brief was a question the team couldn't yet answer: were we missing features, or were we misunderstanding the problem?

---

## Research

I planned the project as a funnel: start with what the company already knew, establish the competitive bar, go deep with interviews to find the right questions, then validate at scale with a survey.

### Existing Research

I started by going through dozens of past research projects for anything relevant to hunt planning. One survey of 216 hunters had mapped the basic shape of how hunters think about their time. 83% hunt 2 to 5 days at a time, and family commitments and work schedule are the top constraints on when they go out. Hunters are making the best of whatever window they have, not waiting for a perfect scenario. That framing held up through everything that followed, and it cost nothing to find. It was already sitting in a drive.

### Competitive Analysis

In September I went deep on HuntStand, DeerCast, Spartan Forge, and Windy.app, among others. The pattern across all of them was the same problem stated differently: wind is where the most important design decisions in this category live. HuntStand's per-stand wind analysis gives hunters a clear, trustworthy read on conditions across multiple upcoming days. That was the bar Moultrie was being measured against. The data Moultrie offered was there. The trust and readability were not.

### User Interviews

In October and November I ran 8 interviews, five virtual and three in person, each about an hour, ranging from casual weekend hunters to people who run hunt clubs and teach others to hunt. All of them juggled at least two apps as a normal part of their routine.

One hunter put it plainly: "I wish I didn't have to use OnX for property lines, HuntStand for wind and Moultrie for pictures." He wasn't complaining about any one app. He was describing a coordination tax that had become so normal he barely registered it as a problem.

The interviews also surfaced something the app's structure didn't account for: planning happens on two timescales. One hunter described checking the general forecast early in the week just to rule out terrible conditions, then shifting entirely to hourly wind forecasts and specific stands by Thursday or Friday. Same person, two different sets of needs depending on where they were in the week. An app presenting a single planning experience serves neither moment particularly well.

The frustrations were consistent: insufficient wind tools, leaving the app for a reliable forecast, a camera gallery hard to manage at scale, no good way to do bigger mapping work on a laptop. And several hunters had no idea Game Plan existed. Property lines were unknown. The features with the most potential value were invisible to the people who would have used them. That answered half the original brief on its own.

### Survey

I ran a survey in December and collected 151 responses, built to pressure-test what the interviews suggested.

It overturned one of my assumptions. Several interviewees drove significant distances to their land, and I expected travel time to push planning windows out. The data went the other direction. Most hunters live within an hour of where they hunt. The long-commute stories were outliers, and if I'd built recommendations around the interviews alone, I'd have designed for the wrong planning window.

The real driver is schedule. 50% say free time or availability decides whether they go out on a given day, with another 26% pointing to camera activity. 39% decide 1 to 3 days ahead; 8% decide same-day. And the interviews had already shown how fluid plans stay even after the decision: which stand, and whether to go at all, can shift right up until morning, almost always because of wind. That combination drove my core recommendation: adaptable planning tools that update with conditions, rather than fixed itinerary-style features that require replanning from scratch.

On information priority, camera activity ranks first at a mean of 2.3 with weather forecast at 2.4, and within weather, wind direction dominates at 1.9 versus 3.1 for wind speed. A wind feature that requires navigating to a separate section and reading a chart the user hasn't learned to trust will not be part of a decision made the night before.

---

## What the Research Reframed

Synthesizing across methods, three insights changed how the team talks about hunt planning:

**The problem is coordination, not capability.** Hunters had the data they needed. It lived in four apps. Moultrie's planning features weren't losing on function; they were losing on being one more place to check, and in some cases on being invisible entirely.

**Planning runs on two timescales.** A rule-out pass early in the week, then a high-resolution wind-and-stand decision in the final day or two. One planning experience can't serve both moments the same way.

**The window is short and schedule-driven.** Hunters decide based on when they're free, mostly 1 to 3 days out, and the plan stays fluid until morning. Tools should adapt to changing conditions, not ask hunters to commit to itineraries.

To make the reframing concrete for a December leadership presentation, I designed concept screens. The one I focused on was a per-property dashboard surfacing the highest-impact planning information at a glance: buck activity, wind direction, camera highlights, when a stand was last hunted. The concepts were deliberately provocations, single high-fidelity screens meant to spark discussion rather than specify a direction. They did their job. The discussion that followed set up the more interesting work.

---

## The Workshop

I had been pushing for a design workshop since early in the project. My case to my manager had two parts. First, the problem deserved it: we had clear research on how hunters think and plan, and a cross-functional group working through it would find directions the design team wouldn't arrive at alone. Second, the team needed the capability: we had never run a workshop, and this project had the right conditions to learn on. He agreed.

We organized the session over several weeks. My specific contribution to preparation was writing the three personas teams would use throughout the day, each a synthesis of the interview and survey findings. The personas were how the research entered the room: instead of hearing findings from a slide, participants would spend the day inside them.

On January 14, 2026, 13 people came together for Moultrie's first cross-functional design workshop, spanning product management, development, marketing, QA, and customer experience, with a mix of leadership and junior team members. The company's key decision-maker was on one of the three teams, doing the work alongside everyone else. My manager facilitated from outside the teams; another designer and I each embedded with a team to answer questions and keep momentum.

Teams worked through empathy mapping, as-is journey maps, big idea generation, and force ranking before landing on paper prototyping. The moment that justified the whole format came from the decision-maker's team. Following a persona through a journey map, they kept going past the hunt itself, into the months between seasons when a property sits mostly unvisited, and asked what the app does for a hunter then. The answer was nothing. Their prototype described an offseason experience: helping hunters plan the physical placement of stands and blinds using camera data and map information. Nobody had that on a roadmap. And the decision-maker didn't hear about the gap in a readout. He found it himself, with the persona in his hands.

Afterward I wrote and sent a feedback survey to all participants. 75% strongly agreed the session was valuable, and 88% wanted to participate again. The written responses flagged two things: scope had drifted from hunt planning toward the broader Moultrie ecosystem, and people wanted a clearer path from ideas to roadmap.

---

## What Came Next

Leadership made a bigger bet than what I had recommended. There is a major product initiative in development that I'm not in a position to describe publicly, which is its own kind of result: the research didn't decorate a roadmap that already existed, it redirected one.

What I can describe is what carried forward. The team now has a working model of how hunters actually plan: what their goals are at each phase, why the planning window is shorter and more schedule-driven than we assumed, and why the final call almost always comes down to wind and recent camera activity. That framing has been the reference point in planning discussions since the research concluded. And the offseason prototype from the workshop is confirmed scope in the new initiative.

---

## Reflection

This project didn't produce a feature recommendation that got built. It produced something more durable: a clear picture of what hunters are doing and where the experience fails them, and that framing survived a pivot. Concepts get discarded when strategy changes. A correct model of the user doesn't.

The survey result that contradicted my interview-based assumption is the part of the process I'd defend hardest. Eight interviews generate conviction, and conviction from a small sample is exactly the thing a survey exists to check. Mine didn't survive the check, and the recommendations were better for it.

The workshop taught me something about how insight moves through an organization. Getting a cross-functional group to physically work a user's journey produces a different kind of understanding than a presentation. The offseason insight didn't come from my interviews or my survey. It came from a team following a persona past the edge of where I had been looking. I could have asked about the offseason in an interview. I don't think the answer would have carried the same weight as a decision-maker discovering the gap himself.

The participant feedback gave me the two fixes for next time. Tighter exercise constraints to hold scope, and a closing activity that converts prototypes into prioritized, owned next steps, because the jump from exciting idea to actionable item was the gap people felt most. Both are now part of how I'd design the next one, which is the other thing this project produced: the company has a workshop capability it didn't have before, and an appetite to use it.
