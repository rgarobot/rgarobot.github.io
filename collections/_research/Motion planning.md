---
title: "Motion Planning"
description: "Motion planning is a term used in robotics for the process of breaking down a desired movement task into discrete motions that satisfy movement constraints and possibly optimize some aspect of the movement."
date: 2018-11-28T15:15:34+10:00
weight: 4
header_transparent: true
fa_icon: false
icon: "assets/images/icons/icons8-design-100.png"
thumbnail: "/assets/images/gen/research/research-4-thumbnail.webp"
image: "/assets/images/gen/research/research-4.webp"

hero:
  enabled: true
  heading: "Motion Planning"
  sub_heading: "Motion planning is a term used in robotics for the process of breaking down a desired movement task into discrete motions that satisfy movement constraints and possibly optimize some aspect of the movement."
  text_color: "#ffffff"
  background_color: ""
  background_gradient: true
  background_image_blend_mode: "overlay" # "overlay", "multiply", "screen"
  background_image: "/assets/images/gen/research/research-4-large.webp"
  fullscreen_mobile: true
  fullscreen_desktop: false
  height: 660px;
  buttons:
    enabled: false
    list:
      - text: "Buy Now"
        url: "https://www.zerostatic.io/theme/jekyll-advance/"
        external: true
        fa_icon: false
        size: large
        outline: false
        style: "primary"
---

# Legged Robotics: A Deep Dive into Terrain Locomotion

Legged robots have opened avenues in robotic mobility, offering unparalleled capabilities, especially when compared to their wheeled counterparts. While their design and function echo the organic world, replicating the agility and adaptability of legged creatures in man-made robots is a daunting challenge.

## The Current State of Legged Robotics

Despite their potential, most legged robots today are limited to structured terrains. This limitation primarily stems from the intricate challenge of generating dynamic motions that are adaptive to varying terrains.

Many current strategies for legged locomotion prioritize terrain-blind methodologies, opting for instantaneous, reactive actions. The inherent assumption is that these quick, heuristic responses would be sufficient to maintain robot stability even when the terrain is unpredictable.

However, this assumption falls short in real-world scenarios, especially on terrains with significant discontinuities. Consequently, legged robots, in their current state, remain restrained to specific terrain profiles, limiting their practical applications.

## Trajectory Optimization: A Potential Solution

Recent trends in the legged robotics community have gravitated towards trajectory optimization with contacts. This approach seeks to surmount the limitations of terrain-blind methods by envisioning a series of future events, allowing for better anticipation and response.

Yet, much of the existing work in this area remains tethered to ideal conditions, either emphasizing flat terrains or relying heavily on simulations. A significant gap in these studies is the absence of a terrain-risk model, an essential component that quantifies the challenges and uncertainties of foot placements.

The integration of such a model into the trajectory optimization framework remains a nebulous area. Consequently, terrain models, as of now, are predominantly utilized for foothold planning in a decoupled fashion.

## Our Proposition for Advanced Terrain Locomotion

In light of these challenges, our team has built upon our prior methodologies, introducing enhancements in two pivotal areas:

1. **Robot Attitude Planning**: Our innovative approach introduces heuristic adaptations to the robot's trunk orientation to maintain stability. By imposing constraints on angular acceleration, we ensure the robot's estimated Centroidal Moment Pivot (CMP) remains within the support domain. This advancement empowers the robot to traverse terrains with variable height elevations, as evident in our experiments navigating stairs and ramps.

2. **Terrain Model Incorporation**: We introduce a terrain model founded on log-barrier functions, offering a robust representation of feasible footstep locations. Our preliminary studies shed light on the profound influence of these models on legged locomotion across challenging terrains.

![Innovations in Legged Robotics](/assets/images/gen/content/content-2.webp)

In conclusion, the realm of legged robotics stands at the cusp of transformative advancements. By addressing the aforementioned challenges and continuing interdisciplinary research, the horizon of legged robot applications is poised to expand exponentially.
