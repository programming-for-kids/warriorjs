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

1. `Floor` 是个类 (`class`)
2. 类都有 `this` 变量表示当期对象，例如，`this.width` 表示当前楼层的宽度
   ，`this.height` 表示当前楼层的高度
3. 阅读代码的顺序，可以先阅读有哪些接口，也就是实现了哪些功能
4. `get` 方法会返回 Floor 这个对象的一些数据或者状态
5. `is` 方法会返回 Floor 这个对象的一些状态为真或者假。和 `get` 的区别是只返回布
   尔值（真/假）
6. `add` 方法会向 Floor 上添加对象，比如添加单位或者添加战士。和 `get`/`is` 等方
   法不同的是，`add` 方法会改变对象的状态

### Position and Space

### Unit and Warrior
