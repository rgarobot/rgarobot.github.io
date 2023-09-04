---
title: "Robot Control"
description: "We strive to control the real-time stable gait of a quadruped walking robot in various environments, aiming to maintain consistent and balanced movement through diverse attempts."
date: 2018-11-28T15:15:34+10:00
weight: 2
lang: ko
permalink: "/ko/research/Robot%20Control/"
header_transparent: true
icon: "assets/images/icons/icons8-user-engagement-male-100.png"
thumbnail: "/assets/images/gen/services/service-2-thumbnail.webp"
image: "/assets/images/gen/services/service-2.webp"

hero:
  enabled: true
  heading: "Robot Control"
  sub_heading: "We strive to control the real-time stable gait of a quadruped walking robot in various environments, aiming to maintain consistent and balanced movement through diverse attempts."
  text_color: "#ffffff"
  background_color: ""
  background_gradient: true
  background_image_blend_mode: "overlay" # "overlay", "multiply", "screen"
  background_image: "/assets/images/gen/services/service-2.webp"
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

Legged animals, such as cats, can perform versatile movements on diverse terrain, owing to their structure and cooperative motion. 
Imparting this ability to an artificial robot is an enormous challenge in the field of robotics. 
The design of legged robots has benefited from the observation of animal structure. 
Quadruped robots have the natural advantages of trafficability and agility on complex outdoor terrain compared with wheeled robots. 

In recent years, many advanced quadruped robots have been achieved in terms of dynamic motion and stability, such as BigDog, StarIETH, HyQ, ANYmal and MIT Cheetah. 
To realize the more practical tasks of quadruped robots, such as material transportation and rescue in complex environments, it is important to investigate the leg structure and locomotion stability on uneven terrain.


Dynamic locomotion is preliminarily determined by the ground reaction force (GRF), which can be characterized by the leg structure and actuators. 
Generally, series and parallel are the main two leg topologies, and series articulated robots have a big leg motion range.

However, one of the joints may be subjected to a heavy load or need more higher joint velocity for fast dynamic movement. 
The parallel leg is advantageous for force production but may waste energy when the leg swings back and forth. 
Torque density may be a significant metric for actuators design for dynamic robot. 

Hydraulic actuation can provide a powerful GRF, but it is not ideal for use in everyday situations.
Recently, an electric actuation method combining a high-torque density electromagnetic actuator and low-ratio gear was proposed and can effectively balance the requirements for transparent transmission and high-torque generation.
Inspired by this, a high-torque density actuator was designed and assembled using a custom motor and two-stage planetary gearbox.

To improve the trafficability on uneven terrain, accurate terrain estimation and robot adaptation are necessary.
The walking surface modeling method has been proposed to approximate the local slope for each walking position with the absence of vision, and the least squares problem has been solved using the pseudoinverse. 

The slope angle was calculated by considering the weighted average of the inertial measurement unit (IMU) information, and the support plane was calculated using least squares estimation. 
The previously proposed locomotion adaptation method consists of the adaption of control frame, trunk orientation, stance legs, and swing leg motion.

The spatial positions of three feet were selected to fit the support plane based on the vertical relationship between in-plane vector and normal vector. 
Additionally, some studies have used the straight slope between the front and back footholds to approximate the inclination of the support plane directly.

These two methods are convenient to calculate, but the solution accuracy is poor.

To enhance the dynamic motion ability and controllability of quadruped robot, this study implemented parallel leg structures with symmetrical rods which match with the low reduction ratio planetary reducer to improve the back-drivability. 
Then, aiming at traffic capacity in uneven terrain, the locomotion control framework based on VMC was established and mainly includes GRFs optimal allocation based on the QP method and a full terrain adaptation method without perception. 
