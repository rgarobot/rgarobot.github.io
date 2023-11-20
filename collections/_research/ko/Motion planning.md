---
permalink: "/ko/research/Motion%20planning/"
layout: ko/research
lang: ko
title: "모션 계획"
description: "다양한 환경에서 움직임 제약 조건을 파악하고 스스로 위치를 추정하여 최적화된 경로 및 동작을 선택합니다."
date: 2018-11-28T15:15:34+10:00
weight: 4
header_transparent: true
fa_icon: false
icon: "assets/images/icons/icons8-design-100.png"
thumbnail: "/assets/images/gen/research/research-4-thumbnail.webp"
image: "/assets/images/gen/research/research-4.webp"

hero:
  enabled: true
  heading: "모션 계획"
  sub_heading: "다양한 환경에서 움직임 제약 조건을 파악하고 스스로 위치를 추정하여 최적화된 경로 및 동작을 선택합니다."
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

# 다리가 있는 로봇의 도전과 발전

**다리가 있는 로봇**은 바퀴가 달린 로봇과는 비교할 수 없는 이동성을 실제 환경에서 제공할 수 있습니다.
그러나 대부분의 다리가 있는 로봇은 아직도 구조화된 지형에만 제한되어 있습니다. 주요한 원인 중 하나는 지형 조건을 고려하면서 복잡한 동적 움직임을 생성하는 어려움 때문입니다.

이러한 복잡성으로 인해 많은 다리로 이동하는 접근법은 순간적인 행동을 중심으로 한 지형-무시 방법에 중점을 둡니다.
이러한 휴리스틱 접근법은 반응적인 행동만으로 로봇의 안정성을 보장하기에 충분하다고 가정합니다.

불행히도 이러한 접근법은 모든 종류의 지형, 특히 큰 불연속성이 있는 지형에는 적용할 수 없습니다.
이러한 어려움으로 인해 다리가 있는 시스템의 사용이 특정 지형 유형에 제한되어 있습니다.

다리 로봇 공동체에서는 접촉을 동반한 궤적 최적화에 주목하고 있습니다.
이는 미래의 사건들에 대한 지평선을 고려함으로써 지형-무시 접근법의 단점을 극복하기 위한 것입니다.
이렇게 하면 특정 지형에서 로봇의 안정성을 개선할 수 있습니다.

그러나 유망한 이점에도 불구하고 대부분의 연구는 평평한 조건이나 시뮬레이션에 중점을 둡니다.
예를 들어, 이러한 궤적 최적화 방법은 지형 위험 모델을 포함하지 않습니다.
이 모델은 발걸음의 어려움과 불확실성을 정량화하는 데 사용됩니다.

그럼에도 불구하고 궤적 최적화 프레임워크 내에서 이 모델을 어떻게 적절하게 포함시킬지는 아직 분명하지 않습니다.
이러한 이유로 지형 모델은 종종 발걸음 계획에만 사용됩니다(분리된 접근법).

어려운 지형에서의 이동을 해결하기 위해, 우리는 이전의 계획 방법을 두 가지 방법으로 확장합니다.

1. **로봇 태도 계획 방법 제안** : 로봇의 안정성을 계속 보장하는 동안 체중 중심의 방향을 직관적으로 조정하는 새로운 방법을 제안합니다.
우리의 접근법은 지지 영역 내에서 추정된 중심 모멘트 피벗(CMP)을 유지하는 각 가속도에 제한을 설정합니다.
우리의 태도 계획자로 로봇은 높이의 변화가 있는 어려운 지형을 건널 수 있습니다. 
계단과 경사로를 오르내리는 등의 이동 능력은 실험과 시뮬레이션 시험에서 보여졌습니다.

2. **지형 모델 제안** : 실행 가능한 발걸음 위치를 강인하게 설명하는 로그-배리어 함수를 기반으로 한 지형 모델을 제안합니다.
이 연구는 두 모델이 어려운 지형 위에서 다리로 이동하는 것에 어떻게 영향을 주는지에 대한 첫 번째 실험적 연구를 제시합니다.

![디자인 인 피그마](/assets/images/gen/content/content-2.webp)

