---
permalink: "/ko/research/Motion%20planning/"
layout: ko/research
lang: ko
title: "동작 계획"
description: "동작 계획은 로봇공학에서 사용되는 용어로, 움직임 제약 조건을 만족하고 움직임의 어떤 측면을 최적화할 수 있는 이산 움직임으로 원하는 움직임 작업을 분해하는 과정을 나타냅니다."
date: 2018-11-28T15:15:34+10:00
weight: 4
header_transparent: true
fa_icon: false
icon: "assets/images/icons/icons8-design-100.png"
thumbnail: "/assets/images/gen/research/research-4-thumbnail.webp"
image: "/assets/images/gen/research/research-4.webp"

hero:
  enabled: true
  heading: "동작 계획"
  sub_heading: "동작 계획은 로봇공학에서 사용되는 용어로, 움직임 제약 조건을 만족하고 움직임의 어떤 측면을 최적화할 수 있는 이산 움직임으로 원하는 움직임 작업을 분해하는 과정을 나타냅니다."
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

LEGGED robots can deliver substantial advantages in real-world environments by offering mobility that is unmatched by wheeled counterparts. 
Nonetheless, most legged robots are still confined to structured terrain. One of the main reasons is the difficulty on generating complex dynamic motions while considering the terrain conditions. 

Due to this complexity, many legged locomotion approaches focus on terrain-blind methods with instantaneous actions. 
These heuristic approaches assume that reactive actions are enough to ensure the robot stability under unperceived terrain conditions.

Unfortunately, these approaches cannot tackle all types of terrain, in particular terrains with big discontinuities.
Such difficulties have limited the use of legged systems to specific terrain topologies.

Trajectory optimization with contacts has gained attention in the legged robotics community. 
It aims to overcome the drawbacks of terrain-blind approaches by considering a horizon of future events. 
It could potentially improve the robot stability given a certain terrain. 

However, in spite of the promising benefits, most of the works are focused on flat conditions or on simulation. 
For instance, these trajectory optimization methods do not incorporate any terrain-risk model. 
This model serves to quantify the footstep difficulty and uncertainty. 

Nonetheless, it is not yet clear how to properly incorporate this model inside a trajectory optimization framework. 
Reason why terrain models are often used only for foothold planning (decoupled approach).


To address challenging terrain locomotion, we extend our previous planning method in two ways. 

First, we propose a novel robot attitude planning method that heuristically adapts trunk orientation while still guaranteeing the robot’s stability. 
Our approach establishes limits in the angular acceleration that keep the estimated Centroidal Moment Pivot (CMP) inside the support region. 
With our attitude planner, the robot can cross challenging terrain with height elevation changes. 
It allows the robot to navigate over stairs and ramps, as shown in the experimental and simulation trials. 

Second, we propose a terrain model (based on log-barrier functions) that robustly describes feasible footstep locations.
This work presents first experimental studies on how both models influence the legged locomotion over challenging terrain. 

![Design In Figma](/assets/images/gen/content/content-2.webp)
