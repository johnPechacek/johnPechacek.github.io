---
title: Designing Buck List
description: Launched Buck List, a system for identifying and tracking individual bucks across trail camera images.
date: 2026-08-31
skills: ["Product Design", "User Research", "UI/UX", "Feature Design"]
---

# Designing Buck List

**Role:** Product Designer
**Timeline:** April to August 2025
**Team:** 2 Designers, Product Manager, Engineering, Machine Learning

**Outcome:**
Launched Buck List, a system for identifying and tracking individual bucks across trail camera images.

Since release:
- 27% of users created at least one buck profile
- Over 300,000 unique bucks identified
- Engagement deepened through the season, with images per buck growing from 2.7 to over 4

The system created a structured dataset to support AI-assisted identification, planned for release this coming season.

---

## Problem

Hunting a specific buck starts with understanding that buck individually. Hunters study when and where an animal shows up on camera. That tells them where to sit, when to go out, and which bucks are worth chasing that season. Trail cameras generate the data to support all of that. But the product presented everything as a continuous feed of disconnected images, with no system for connecting sightings of the same animal over time.

Most hunters were working around this on their own. They kept target lists in photo albums and notes apps. The product had no way to connect any of that to what they were seeing in their image feed. The data was there but difficult for hunters to digest.

---

## Where This Started

Buck profiles weren't the project I was assigned. I introduced the concept while designing Deer Census, a feature for understanding the buck population on a property. The approach I had in mind wasn't just a counting tool. I wanted users to be able to create named profiles for individual bucks, document their antler characteristics, and build up a tagged collection of images from their gallery showing that specific animal.

When I presented those designs, the reaction split. The Deer Census approach had problems the team wanted to work through, but the profiles concept landed differently. Leadership got excited about it and made the call to break it out as a standalone feature. Deer Census was put on hold. It was a good outcome for an idea I was genuinely excited about.

---

## Research

An internal Moultrie survey of 3,844 deer hunters put numbers to both the behavior and the opportunity. The average user sees about 5.5 unique bucks in a season. 67% keep a seasonal target list, and 73% of those manage it with a photo album on their phone or computer. The workaround was widespread.

The survey also revealed what hunters actually wanted from a product-level solution. 85% wanted to know what time of day a specific buck tends to show up. 77% wanted to know which cameras it appears on. Both require a system that connects images to individual animals over time. A Kano analysis confirmed that both manual and AI-assisted identification were attractive but unexpected. Neither was assumed. Both were wanted. 92% said they were very likely or somewhat likely to use either. The appetite was there.

---

## Product Approach

We built Buck List as a system for identifying and tracking individual bucks across trail camera images, and across multiple seasons. Each profile is a persistent record of a single animal, collecting images and activity over time.

Phase 1 is manual. Users review their recent images, assign them to profiles, and build up a record of which bucks are on their property. Each profile captures a tagged image gallery, a profile photo, antler point counts, notes, and automatically surfaces when and where the buck was last seen. Phase 2 uses AI to suggest matches between new images and existing profiles, and to flag potential unknowns. For both, users confirm before anything is applied. Phase 1 is not just a starting point. The data users generate there is what trains and improves Phase 2.

---

## Design Decisions

### Designing the Profile

The priority when designing the profile was minimizing friction. The more effort profile creation requires, the fewer profiles users will make, and a thin dataset going into Phase 2 is a problem.

We considered including an age estimate field, since hunters do think about a buck's age when deciding whether to target it. But estimating age from a trail camera image is genuinely uncertain. Asking users to enter an exact year produces guesses more than data. We landed on a simple toggle between young and mature. It captures the decision hunters are actually making without asking for precision the images can't support.

The harder question was what to lead with when a user opens a profile. We prioritized last seen location and time. If a buck showed up on camera yesterday afternoon on the east side of the property, that is what a hunter needs before they go out. Historical pattern data is still there. It just doesn't lead.

### A Workflow Built for Volume

Hunters reviewing images from a session might be sorting through hundreds of photos, almost always on a phone. I designed the flow around newly detected images. Users can triage in bulk when the context is clear, which is common when a buck has been loitering near a feeder and appears across a run of consecutive images. For harder calls, they step into individual photos and take a closer look.

The harder part was giving users something to compare against when an image wasn't obvious. Fitting two trail camera images side by side and expecting users to read subtle biological cues like tine count, spread, and brow tine shape is asking a lot. We solved it with a flyout sheet of profile pictures. Users can pull it up while viewing a new image, browse their existing bucks, and dismiss it when they are ready to move on. The tradeoff is that for a hard identification, asking users to hold an incoming image in memory while browsing the flyout is a real limitation. For easy decisions it works well. For harder ones it is a compromise.

### A Guided AI Confirmation Flow

For Phase 2, the goal was to make AI useful without making it autonomous. The system suggests matches between new images and existing profiles, and flags potential unknowns, but users confirm before anything is applied. We considered a more automated approach. A bad match affects planning in a real way, and a bad new buck flag fills profiles with noise. The speed tradeoff is real. But a system users stop trusting is worse than a slower one.

### Adapting When the Plan Changed

About three weeks before development started, a research spike came back with bad news. The bounding box data from smart tagging that we planned to use for automatic profile image cropping was not going to be available in a usable way.

Without automatic cropping, the fallback was to use full trail camera images as profile thumbnails. That creates two problems. Trail camera images occasionally capture multiple deer, so a full-image thumbnail doesn't tell you which buck a profile is actually for. And the app already uses full images as thumbnails for camera albums, so profile cards would have looked identical to an existing UI pattern just doing something different. I pushed to solve it rather than accept that.

We introduced a manual cropping step during profile creation. I worked through the implementation with engineering. We tested a Syncfusion library first. It did not give us the control we needed and felt clunky to use. We moved to a custom solution, which took more refinement but gave us better control over the interaction. I simplified the controls, added a movable selection area, and reduced the precision the crop required. It was not the automated experience we originally planned, but this impacted everything that came after.

---

## Outcomes

Phase 1 launched in time for opening day of deer season. The platform now holds a structured dataset of how individual animals move across a property, which cameras they appear on, and when they tend to show up. That is exactly what the survey told us hunters wanted. It is also what Phase 2 needs to function well.

Phase 2 is in development. The 2025 season generated the training data we needed. AI-assisted identification is planned for the coming season.

From a business standpoint, the system adds meaningful value to Moultrie's existing premium hunt planning subscription. Internal forecasts project $11.8M in new revenue in FY27, driven by acquisition and retention gains as the feature deepens what the subscription offers.

---

## Reflection

The ML constraint situation was the most instructive part of this project. Not because things went wrong, but because of what solving it required. I had to understand enough about how the model worked to identify the problem, make an alternative case to engineering and product, and then follow through on an implementation that was more complex than the original plan. That kind of work sits between design and engineering. It's where the most interesting problems tend to show up.

The comparison experience is where I would go back and push harder. The flyout works, but that compromise on hard identifications is exactly what a round of usability testing would have caught early. We did not have time to test before the season deadline, and the comparison experience is the clearest example of what that cost us.

Phase 2 will be the real measure of whether the system works at scale. Phase 1 tells us users are willing to put in the manual effort. Whether they trust the AI's suggestions is one question. The other is how well the model actually performs once it has a full season of training data behind it. Buck identification is hard for experienced hunters working from good photos in daylight. Doing it reliably from trail camera images at night is a different problem entirely. I am genuinely curious to see how it holds up.
