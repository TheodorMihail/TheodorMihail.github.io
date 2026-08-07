---
title: Space Invaders
tagline: An arcade shooter with rogue-like progression and RPG systems
role: Solo developer
year: '2025'
status: In development
blurb: 'A Unity arcade shooter that layers rogue-like and RPG systems over the classic loop: level progression, loot and equipment, a talent tree, power-ups and boss fights.'
tags:
  - Loot & Equipment
  - Talent Tree
  - Power-ups
  - Levels Progression
  - Boss Fights
tech:
  - Zenject
  - UniTask
  - Addressables
  - Object Pooling
  - SOLID
  - MVC
repoUrl: https://github.com/TheodorMihail/SpaceInvaders
playUrl: /play/space-invaders/
cover: ../../assets/projects/space-invaders/gameplay.png
gallery:
  - ../../assets/projects/space-invaders/gameplay.png
  - ../../assets/projects/space-invaders/talents.png
  - ../../assets/projects/space-invaders/inventory.png
highlights:
  - Interface-driven throughout, so every system is substitutable, including under test
  - Entities are decoupled, so one can be implemented or removed without disturbing the rest
  - Lifecycle interfaces let managers and services hook into different phases of the game
  - The UI is implemented entirely separately from the rest of the game
  - No singletons, no static state and no dependency lookups inside the scene, every dependency is injected
order: 1
---

## Architecture

Built on [BaseArchitecture](https://github.com/TheodorMihail/BaseArchitecture), consumed as a
versioned UPM package, so framework code stays separate from game code.

- **Communication**
  - Managers expose no C# events, so nothing can bind itself to another system's internals
  - Entities communicate over a message bus
- **Flow**
  - Each scene is driven by its own state machine and divided into discrete states
  - Lifecycle work runs through `IGameInitializeListener`, `IGameStartListener` and
    `IGameEndListener`, so states orchestrate and managers participate
- **Structure**
  - Responsibilities follow SOLID, so each manager, service and component owns a single concern
    and depends on abstractions rather than implementations
  - Managers are split by scope, project-wide ones persisting across scenes and scene-scoped ones
    bound to their own state machine
  - Managers delegate to services where responsibilities need distributing
  - UI is decoupled through MVC
- **Data**
  - ScriptableObjects configure almost every in-game entity
  - Progression and settings persist through the framework's persistence manager
- **Performance**
  - The important processes are awaitable, built on UniTask
  - Object pooling for frequently spawned entities
  - Assembly definitions split the codebase to keep compile times down

## Progression

- **Levels**
  - Are composed of enemy waves
  - A star rating, scored on damage taken against per-level thresholds, gates progression to the
    next one
- **Talents**
  - Are permanent stat upgrades bought with currency
  - Authored per level as flat or percentage bonuses
- **Equipment**
  - Rarity-tiered loot with randomly rolled affixes
  - Equipped to one of several dedicated equipment slots
- **Loot**
  - Resolves as a single weighted roll per kill, so a kill can never grant more than one reward

Talents, equipment and powerups all combine flat and percentage bonuses, with a guaranteed floor so
stacked maluses cannot zero out or invert a stat.

## Combat

- **Waves**
  - Are built from a set of procedural formation templates
  - Are formed of different enemy types, each with their own behaviour and stats
- **Boss fights**
  - Are flagged as their own wave type and announced explicitly on the HUD
  - Boss health is broadcast to the HUD rather than read from the boss
  - Bosses switch between several shooting behaviours
- **Powerups**
  - Are timed or instant pickups applied as temporary bonuses
  - While active, they have dedicated indicators and timers on the HUD

## Tooling

- **Level Generator** editor window for authoring level configs, with a formation-template
  generator and a custom inspector exposing each level's seed
- Custom spaceship inspector displaying live stats during play
- Shortcuts for creating config assets in the selected folder
- Debug progression shortcuts, gated to the Editor and development builds

## Testing

Unity Test Framework with NSubstitute and Zenject.

- **EditMode** covers the managers, state machines, repositories and stat calculations
- **PlayMode** covers the systems that only make sense with a running loop, including async
  UniTask flows
