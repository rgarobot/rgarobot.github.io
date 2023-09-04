---
title: "Mechanical Design"
description: "Static and dynamic structural design through biomimetic joint mimicry"
date: 2017-11-28T15:14:54+10:00
weight: 1
lang: ko
header_transparent: true
fa_icon: false
icon: "assets/images/icons/icons8-source-code-100.png"
thumbnail: "/assets/images/gen/services/service-1-thumbnail.webp"
image: "/assets/images/gen/services/service-1.webp"

hero:
  enabled: true
  heading: "Mechanical Design"
  sub_heading: "Static and dynamic structural design through biomimetic joint mimicry"
  text_color: "#FFFFFF"
  background_color: ""
  background_gradient: true
  background_image_blend_mode: "overlay" # "overlay", "multiply", "screen"
  background_image: "/assets/images/gen/services/service-1-large.webp"
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

A prerequisite for good locomotion in quadruped robots is an extremely stable structure.
The internal structure of quadrupeds, such as horses and dogs, which in nature can walk freely over complex terrain and have high load-bearing capacities, has inspired scholars to carry out a series of studies on this subject.
The mechanical design of quadruped robots is now largely based on the joint arrangement of quadruped mammals and has been improved to provide a bionic structure that meets the needs of the robot.

## Topological Structure of the Quadruped Robot

While there is a variety of topology forms for quadruped robot design, the 8, 12 or 16 degrees of freedom (DOF) designs are commonly used.
The 8-DOF structure contains four hip joints and four knee joints, with all joint axis parallel to each other.
The 8-DOF robot can move forwards or backwards very fast and is relatively easy to control, without the transverse swing freedom of the hip joint. 
However, the 8-DOF quadruped robot cannot achieve transverse movement and its steering capability is rather limited, leading to poor motion performance.

The 16-DOF quadruped robot, on the other hand, has more joints for dexterous locomotion, but it is also more difficult to control.

In light of this, the 12-DOF design, with three rotational joints for each leg, is used for our design.
In terms of leg configurations, the inner knee-elbow, outer knee-elbow, full-knee and full-elbow are most popular.
The first three leg configurations have a completely symmetrical leg structure, so the robot is more stable, while the last two have more space for movement and are easier to control. 
Therefore, the full-knee configuration is chosen in this paper. The simplified structural topology is shown, where the hip joint has both lateral swing and longitudinal swing freedoms, with another swing freedom of the knee joint.

## Torso Design
The torso of the quadruped robot is the central component of the entire robot structure. 
Four legs are connected together through the torso, so the torso design needs to meet the following requirements. 

First, sufficient strength is needed to ensure that there will be no deformation, fracture, etc., during the walking process.

Next, for dexterous locomotion and energy efficiency, the torso should be designed to be as light as possible.

Moreover, there should be sufficient space inside the quadruped robot torso for the installation of servos, batteries, control boards, voltage-converting modules and other components.

Finally, the 12 servos mounted on the robot leg joints require a dedicated design and access for wiring, as they are in constant movement, in respect to the torso, when the quadruped robot walks or jogs.

Based on the above requirements, the torso adopts an integrated design, using photosensitive resin with a wall thickness of 2 mm to prevent deformation or fracture.
The four corners of the torso are designed to interface with the hip-joint assembly, so that no mechanical interference occurs as the hip joint rotates in any direction.
In addition, appropriate hollowing is added at the locations with low load-bearing capacities to reduce weight.

## Hip Joint Design
The hip joint of the quadruped robot is designed to generate two degrees of freedom, one for the roll movement and one for the pitch movement.
Each movement is actuated by the rudder servo. Since the servo used in our design is a single-axis servo, the F6801zz flange bearings are used on the opposite side of the servo shaft in order to reduce the radial force on it.
The shaft end and the hip joint are integrated during fabrication, which facilitates installation and reduces assembly errors. 
In addition, the servo for the forward swing (i.e., pitch) motion of the hip joint is mounted inside the hip-joint bracket to save space.

## Leg Design
The legs of the quadruped robot are in frequent contact with the ground as a power source, so leg design is crucial for successful locomotion.
The forward swing of the hip joint of the thigh uses bearings to carry axial forces.
As the mass of the leg has been ignored in the kinematic calculations presented below, the thigh and lower leg should be designed so that the weight and inertia are as low as possible to reduce theoretical errors.

Here, instead of using a direct rudder connection at the knee joint, a ball-head linkage is used with the lower leg being driven indirectly by the rudder rocker arm.
This allows for the rudder to be placed on the upper side of the thigh near the hip joint, where the rotational inertia of the leg is relatively low.

Based on the leg structure of the quadruped robot, it can be seen that the lower leg is most susceptible to fracture and bending as it has to bear the weight of the machine, as well as compact forces, when it touches ground.
Here, the ground contact forces are simplified to the normal contact force 𝐹𝑁 and tangential contact force 𝐹𝜇 in the vertical plane only. 
As the lower leg rotates around the knee-joint axis, ignoring joint friction and contact friction force, the maximum external torque load can be obtained as

$𝑇_{𝑚𝑎𝑥}=𝜂𝐹_{𝑁}𝑎_{3}sin(𝛼)$

where $𝐹_𝑁$ is the normal contact force, $a_3$ is the length between the knee-joint axis and the ground contact point, $𝛼$ is the angle between the lower leg and the vertical direction and $𝜂$ is the dynamic load coefficient. 
By defining appropriate material properties for each component of the quadruped robot in the SOLIDWORKS model, a total robot weight of approximately 𝑀 = 2.3 kg is obtained. 
Assuming the four legs bear the entire weight evenly, the normal contact force $F_N$ is Mg/4 for static situations.

## Selection of Actuators
The choice of actuator largely determines the locomotion performance of the quadruped robot. 
Due to the weight of the robot itself, the actuator has to generate high torque with a fast response and a compact size.
Brushless motors are widely used because of their excellent dynamic characteristics, but they are generally less affordable and large in size.
Since the main focus of this paper is the implementation and preliminary evaluation of the gait algorithm on the desktop-level model, the rudder servo is selected as the drive source. 

While the servo does not provide feedback for the angular displacement signal directly, the very high built-in gear ratio of the servo makes it acceptable for low-speed gait and self-balancing tests.
