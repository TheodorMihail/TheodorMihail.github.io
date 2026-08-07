---
title: BaseArchitecture
tagline: Foundation package for new Unity projects
role: Author
year: '2025'
status: v1.3.0
blurb: A Unity package that establishes the foundation layer for new projects, providing tested implementations of the design patterns, tools and systems most titles require, so development begins from an established base rather than from scratch.
tags:
  - Factory
  - State Machine
  - MVC
  - Messaging System
  - Repositories
  - Persistence
  - Object Pooling
  - Audio
tech:
  - Unity 6
  - C#
  - Zenject
  - UniTask
  - Addressables
  - UPM
repoUrl: https://github.com/TheodorMihail/BaseArchitecture
highlights:
  - Message bus, repositories, persistence, pooling, factory, audio, addressables, scene management, state machine
  - Screen and HUD MVC base types with a UI manager over them
  - Consumed as a versioned UPM dependency, pinned by release tag
hasPage: false
order: 2
---

The foundation package that Space Invaders and my other Unity work consume as a versioned
dependency, rather than copying the same systems between projects.
