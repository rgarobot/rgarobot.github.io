---
permalink: "/ko/research/Mechanical%20Design/"
layout: ko/research
lang: ko
title: "로봇 설계"
description: "생체 모방 관절 모방을 통한 정적 및 동적 구조 설계"
date: 2017-11-28T15:14:54+10:00
weight: 1
header_transparent: true
fa_icon: false
icon: "assets/images/icons/icons8-source-code-100.png"
thumbnail: "/assets/images/gen/research/research-1-thumbnail.webp"
image: "/assets/images/gen/research/research-1.webp"

hero:
  enabled: true
  heading: "로봇 설계"
  sub_heading: "생체 모방 관절 모방을 통한 정적 및 동적 구조 설계"
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

# 네 발 로봇의 안정적인 기동성을 위한 구조적 전제

네 발 로봇의 좋은 이동 능력을 위한 전제 조건은 매우 안정적인 구조이다.
자연에서 복잡한 지형을 자유롭게 걷고 높은 부하를 견디는 말이나 개와 같은 네 발 동물의 내부 구조는 학자들이 이 주제에 대한 일련의 연구를 수행하게 했다.
현재 네 발 로봇의 기계적 설계는 대부분 네 발 포유류의 관절 배치를 기반으로 하며, 로봇의 필요에 부합하는 바이오닉 구조를 제공하도록 개선되었다.

## 네 발 로봇의 위상 구조

네 발 로봇 설계의 위상 형태는 다양하나, 8, 12 또는 16 자유도 (DOF) 디자인이 일반적으로 사용된다.
8-DOF 구조는 네 개의 엉덩이 관절과 네 개의 무릎 관절을 포함하며, 모든 관절 축이 서로 평행하다.
8-DOF 로봇은 매우 빠르게 앞뒤로 움직일 수 있으며 제어하기 상대적으로 쉽다. 그러나 힙 관절의 횡스윙 자유도 없이는 횡방향 운동을 달성할 수 없으므로 운동 성능이 떨어진다.

반면 16-DOF 네 발 로봇은 더 많은 관절을 가지고 있어 민첩한 이동이 가능하지만, 또한 제어하기가 더 어렵다.

이러한 사실을 고려하여, 각 다리마다 세 개의 회전 관절을 가진 12-DOF 디자인이 사용된다.
다리 구성면에서 내부 무릎-팔꿈치, 외부 무릎-팔꿈치, 전체 무릎 및 전체 팔꿈치가 가장 인기 있다.
처음 세 가지 다리 구성은 완전히 대칭적인 다리 구조를 가지므로 로봇이 더 안정적이며, 마지막 두 가지는 움직임에 더 많은 공간을 제공하며 제어하기가 더 쉽다.
따라서 이 논문에서는 전체 무릎 구성이 선택된다.

## 토르소 디자인
네 발 로봇의 토르소는 전체 로봇 구조의 중심 부품이다.
네 개의 다리는 토르소를 통해 연결되므로, 토르소 디자인은 다음 요구 사항을 충족해야 한다.

우선, 걷는 과정에서 변형, 파열 등이 없도록 충분한 강도가 필요하다.

다음으로, 민첩한 기동성과 에너지 효율을 위해 토르소는 가능한 가볍게 설계되어야 한다.

또한, 네 발 로봇 토르소 내부에 서보, 배터리, 제어 보드, 전압 변환 모듈 및 기타 구성 요소를 설치하기에 충분한 공간이 있어야 한다.

마지막으로, 로봇 다리 관절에 장착된 12개의 서보는 회전할 때 토르소에 대해 지속적으로 움직이므로 전용 디자인 및 배선 액세스가 필요하다.

위의 요구 사항을 기반으로 토르소는 통합 설계를 채택하며, 변형 또는 파열을 방지하기 위해 벽 두께가 2mm인 빛에민감한 수지를 사용한다.

## 엉덩이 관절 디자인
네 발 로봇의 엉덩이 관절은 롤 운동과 피치 운동을 위해 두 자유도를 생성하도록 설계되었다.
각 운동은 방향 서보에 의해 작동된다. 우리의 설계에서 사용된 서보가 단축 서보이기 때문에, 서보 축의 반대쪽에 F6801zz 플랜지 베어링을 사용하여 방사 힘을 줄인다.

## 다리 디자인
네 발 로봇의 다리는 지면과 자주 접촉하는 힘의 원천이므로 다리 설계는 성공적인 기동성을 위해 중요하다.

## 액츄에이터의 선택
액츄에이터의 선택은 네 발 로봇의 이동 성능을 크게 결정한다.
로봇의 무게 때문에, 액츄에이터는 빠른 반응과 컴팩트한 크기로 고토크를 생성해야 한다.
