---
permalink: "/ko/research/Robot%20Control/"
layout: ko/research
lang: ko
title: "로봇 제어"
description: "다양한 환경에서 4족 보행 로봇이 실시간으로 안정적 보행을 할 수 있도록 제어하고 로봇이 일관되게 균형잡힌 움직임을 유지할 수 있는 기술을 개발합니다."
date: 2018-11-28T15:15:34+10:00
weight: 2
header_transparent: true
icon: "assets/images/icons/icons8-user-engagement-male-100.png"
thumbnail: "/assets/images/gen/research/research-2-thumbnail.webp"
image: "/assets/images/gen/research/research-2.webp"

hero:
  enabled: true
  heading: "로봇 제어"
  sub_heading: "다양한 환경에서 4족 보행 로봇이 실시간으로 안정적 보행을 할 수 있도록 제어하고 로봇이 일관되게 균형잡힌 움직임을 유지할 수 있는 기술을 개발합니다."
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

# 네 발로 걷는 동물과 로봇의 운동 능력

네 발로 걷는 동물, 예를 들면 고양이,는 그들의 구조와 협력적인 움직임 덕분에 다양한 지형에서 다양한 움직임을 수행할 수 있다. 이 능력을 인공 로봇에 부여하는 것은 로봇공학 분야에서 큰 도전과제이다. 네 발 로봇의 디자인은 동물의 구조를 관찰함으로써 이득을 얻었다. 네 발 로봇은 바퀴 로봇에 비해 복잡한 야외 지형에서의 통행 능력과 민첩성에서 자연스러운 장점을 가지고 있다.

최근 몇 년 동안, BigDog, StarIETH, HyQ, ANYmal 및 MIT Cheetah와 같은 많은 고급 네 발 로봇이 동적 움직임과 안정성 측면에서 달성되었다. 복잡한 환경에서의 물자 운송 및 구조와 같은 네 발 로봇의 더 실용적인 작업을 실현하기 위해서는 불규칙한 지형에서의 다리 구조와 움직임의 안정성을 연구하는 것이 중요하다.

동적 움직임은 초기에 지면 반응 힘(GRF)에 의해 결정된다. 이는 다리의 구조와 액추에이터에 의해 특성화될 수 있다. 일반적으로, 시리즈와 병렬은 두 가지 주요 다리 토폴로지이며, 시리즈 결합 로봇은 큰 다리 움직임 범위를 가지고 있다.

그러나, 일부 관절은 빠른 동적 움직임을 위해 무거운 부하를 견딜 수 있거나 더 높은 관절 속도가 필요할 수 있다. 병렬 다리는 힘 생성에 유리하지만 다리가 앞뒤로 흔들릴 때 에너지를 낭비할 수 있다. 동적 로봇을 위한 액추에이터 디자인에서 토크 밀도는 중요한 척도일 수 있다.

유압 구동은 강력한 GRF를 제공할 수 있지만, 일상적인 상황에서 사용하기에 이상적이지 않다. 최근에는 고토크 밀도 전자기 액추에이터와 저비율 기어를 결합한 전기 구동 방법이 제안되었으며, 투명한 전송과 고토크 생성의 요구사항을 효과적으로 균형잡을 수 있다. 이에 영감을 받아, 사용자 정의 모터와 2단 행성 기어박스를 사용하여 고토크 밀도 액추에이터가 설계 및 조립되었다.

불규칙한 지형에서의 통행 능력을 향상시키기 위해, 정확한 지형 추정과 로봇의 적응이 필요하다. 비전의 부재에서 각 걷기 위치에 대한 지역 경사를 근사화하기 위한 걷기 표면 모델링 방법이 제안되었고, 유사 역행렬을 사용하여 최소 제곱 문제가 해결되었다.

경사 각도는 관성 측정 장치(IMU) 정보의 가중 평균을 고려하여 계산되었으며, 지지 평면은 최소 제곱 추정을 사용하여 계산되었다. 이전에 제안된 움직임 적응 방법은 제어 프레임, 트렁크 방향, 서 있는 다리 및 휘두르는 다리 움직임의 적응으로 구성되었다.

세 발의 공간 위치는 평면 벡터와 정규 벡터 사이의 수직 관계를 기반으로 지지 평면에 맞게 선택되었다. 또한, 일부 연구에서는 지지 평면의 경사를 직접 근사화하기 위해 전후 발판 사이의 직선 경사를 사용하였다.

이 두 방법은 계산이 편리하지만, 해결 정확도는 떨어진다.

네 발 로봇의 동적 움직임 능력과 제어 능력을 강화하기 위해, 이 연구에서는 뒷쪽 구동성을 향상시키기 위해 저 감소 비 행성 감속기와 일치하는 대칭 막대로 병렬 다리 구조를 구현하였다. 그런 다음, 불규칙한 지형에서의 통행 능력을 목표로, VMC를 기반으로 한 움직임 제어 프레임워크가 구축되었으며, 이는 주로 QP 방법을 기반으로 한 GRFs 최적 할당 및 인식 없는 전체 지형 적응 방법을 포함한다.
