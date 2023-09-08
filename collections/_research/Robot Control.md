---
lang: en
title: "Robot Control"
description: "We strive to control the real-time stable gait of a quadruped walking robot in various environments, aiming to maintain consistent and balanced movement through diverse attempts."
date: 2018-11-28T15:15:34+10:00
weight: 2
header_transparent: true
icon: "assets/images/icons/icons8-user-engagement-male-100.png"
thumbnail: "/assets/images/gen/research/research-2-thumbnail.webp"
image: "/assets/images/gen/research/research-2.webp"

hero:
  enabled: true
  heading: "Robot Control"
  sub_heading: "We strive to control the real-time stable gait of a quadruped walking robot in various environments, aiming to maintain consistent and balanced movement through diverse attempts."
  text_color: "#ffffff"
  background_color: ""
  background_gradient: true
  background_image_blend_mode: "overlay" # "overlay", "multiply", "screen"
  background_image: "/assets/images/gen/research/research-2.webp"
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

## The Significance of Quadruped Robot Control in Modern Robotics

When we look at nature, we're often awestruck by the agility and adaptability of legged creatures. Cats, for instance, possess an uncanny ability to traverse over diverse terrains and make versatile movements. This is largely due to their sophisticated body structures and the harmonious coordination of their limbs. Bringing such intricate dynamics into the world of robotics is no simple feat.

### Quadruped Robots: Advantages and Observations

Legged robots, specifically the four-legged or **quadruped robots**, offer promising potential in terms of mobility. This is especially true when it comes to complex outdoor terrains where traditional wheeled robots might falter. The inspirations for these robots are often drawn from observing animal structures, emphasizing the intricate relationship between biology and technology.

In recent times, we've witnessed commendable advancements in this area. Dynamic motion and stability have seen incredible breakthroughs with robots like [BigDog](https://en.wikipedia.org/wiki/BigDog), [StarIETH](https://www.idsc.ethz.ch/research-dandrea/research-projects/starlETH.html), [HyQ](https://www.iit.it/research/lines/hyq-hydraulic-quadruped), [ANYmal](https://www.anybotics.com/anymal-research), and [MIT Cheetah](http://biomimetics.mit.edu/research/mit-cheetah). To leverage these robots for practical applications, such as material transport or rescue missions in challenging terrains, it becomes imperative to deeply understand and refine their leg structures and enhance locomotion stability.

### The Core of Dynamic Locomotion: Ground Reaction Force (GRF)

At the heart of dynamic locomotion lies the **ground reaction force (GRF)**, majorly influenced by the robot's leg structure and actuators. Robots can primarily have two types of leg topologies: series and parallel. The former has an extensive range of motion, yet it might struggle under heavy loads or require rapid joint velocities for swift movements. Conversely, while parallel legs can produce force efficiently, they might not be energy-efficient during oscillatory movements.

When discussing actuation, torque density is a pivotal metric. Traditional hydraulic actuations offer significant GRF but may not be suitable for everyday scenarios. Modern solutions now leverage high-torque density electromagnetic actuators combined with low-ratio gears to strike a balance between transparent transmission and robust torque generation. Drawing from such insights, custom motors paired with two-stage planetary gearboxes have been developed to optimize actuation.

### Enhancing Quadruped Robots for Complex Terrains

To effectively deploy these robots in uneven terrains, two core aspects need refinement: accurate terrain estimation and adaptive robot movements. By modeling the walking surface, we can approximate local slopes even without vision. Recent techniques use the **inertial measurement unit (IMU)** data to calculate slope angles. Also, to adapt to these terrains, several methods have been proposed, encompassing control frame adaptation, stance leg adaptation, and the modulation of swing leg motions. However, there's room for improvement in solution accuracy.

To truly revolutionize quadruped robot dynamics, this research focused on integrating parallel leg structures with symmetrical rods. These rods, when paired with low reduction ratio planetary reducers, enhance back-drivability. Further, by employing a **locomotion control framework based on VMC**, we've developed GRFs optimal allocation strategies using the QP method, paving the way for comprehensive terrain adaptation without any perception.

### Concluding Thoughts

In conclusion, the quest to perfect the locomotion and control of quadruped robots is an intricate dance between drawing inspiration from nature and pushing the boundaries of modern engineering. As we continue to refine these machines, the horizons of their applications in real-world scenarios expand, bringing us closer to a future where robots seamlessly integrate into our everyday environments.
