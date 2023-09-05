---
title: "Mechanical Design"
description: "Static and dynamic structural design through biomimetic joint mimicry"
date: 2017-11-28T15:14:54+10:00
weight: 1
header_transparent: true
fa_icon: false
icon: "assets/images/icons/icons8-source-code-100.png"
thumbnail: "/assets/images/gen/research/research-1-thumbnail.webp"
image: "/assets/images/gen/research/research-1.webp"

hero:
  enabled: true
  heading: "Mechanical Design"
  sub_heading: "Static and dynamic structural design through biomimetic joint mimicry"
  text_color: "#FFFFFF"
  background_color: ""
  background_gradient: true
  background_image_blend_mode: "overlay" # "overlay", "multiply", "screen"
  background_image: "/assets/images/gen/research/research-1-large.webp"
  fullscreen_mobile: false
  fullscreen_desktop: false
  height: 660px
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
# Quadruped Robot Design

A prerequisite for good locomotion in quadruped robots is an extremely stable structure.
The internal structure of quadrupeds, such as horses and dogs, which in nature can walk freely over complex terrain and have high load-bearing capacities, has inspired scholars to carry out a series of studies on this subject.
The mechanical design of quadruped robots is now largely based on the joint arrangement of quadruped mammals and has been improved to provide a bionic structure that meets the needs of the robot.


## Introduction

A well-designed quadruped robot relies heavily on a stable structure. Nature provides us with robust examples like horses and dogs, which maneuver challenging terrains effortlessly and bear heavy loads. These natural marvels have driven academic interest in replicating their stability and mobility.

## Key Insights

- Most quadruped robot designs today mirror the joint configurations of mammals.
- Efforts are underway to develop a bionic structure tailored to robotic needs.

## Topological Structure

### **8-DOF Design**
- Consists of four hip and knee joints with parallel joint axes.
- Allows rapid forward and backward motion.
- Lacks transverse movement and has limited steering - a hindrance to overall motion performance.

### **16-DOF Design**
- Offers dexterous movement due to additional joints.
- Complex to control due to increased degrees of freedom.

### **12-DOF Design**
- Contains three rotational joints per leg.
- Provides a good balance between control and movement complexity.
- Popular leg configurations: inner knee-elbow, outer knee-elbow, full-knee, and full-elbow.
- Full-knee configuration preferred due to its enhanced stability and control.

## Torso Design

- Central component connecting all four legs.
- Must ensure strength and avoid deformations during walking.
- Prioritize lightweight design for efficient movement.
- Ample space required for critical components like servos, batteries, and control boards.
- Dedicated access needed for wiring due to constant leg movement.

## Hip Joint Design

- Provides two degrees of freedom: roll and pitch.
- Use of rudder servo for actuation.
- Prioritize reducing radial force on the servo shaft.
- Integration of shaft end and hip joint for simplified assembly.

## Leg Design

- Essential for effective movement as it's the primary contact with the ground.
- Bearing usage for axial forces in the thigh's forward swing.
- Design should minimize weight and inertia for accurate kinematic calculations.
- Lower leg design must consider risks of fracture due to the machine's weight and contact forces.

## Mathematical Modelling

Given the robot parameters, the maximum torque can be modeled as:

$$ T_{max} = \eta F_{N} a_{3} \sin(\alpha) $$

Where:

- $$ F_{N} $$: Normal contact force.
- $$a_{3}$$: Distance between knee-joint axis and ground contact.
- $$\alpha$$: Angle between the lower leg and vertical direction.
- $$\eta$$: Dynamic load coefficient.

Given:

- Approximate robot weight: $$M = 2.3 \text{kg} $$.
- Normal contact force for static situations: $$F_N = \frac{Mg}{4}$$.

## Selection of Actuators

- Actuator choice is pivotal for the robot's movement performance.
- Brushless motors are commonly used due to their dynamic properties but are often bulky and costly.
- For the paper's purpose, the rudder servo, despite lacking direct feedback, is deemed suitable for low-speed gait and balance tests.

