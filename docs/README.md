# Warrior Code Reading

## WarriorJS Core 核心

1. Level
2. Floor
3. Position
4. Space
5. Unit
6. Warrior

### Level

1. `getLevel()`: 读取 level 的信息
2. `runLevel()`: 运行 level 的代码 / 配置
3. `loadLevel()`: 加载 level 的配置
   - 最重要的是初始化 Floor
   - 在 Floor 上添加 Units
   - 在 Floor 上添加 Warrior
   - 初始化 Level 本身的信息
4. `class Level`
   - `play()`: 依次运行每个回合，并判断游戏是否结束（成功/失败）
   - `wasPassed()`: 判断游戏是否成功，战士是否走到楼梯
   - `wasFailed()`: 判断游戏是否失败，战士是否死亡

### Floor
