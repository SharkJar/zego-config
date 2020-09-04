# zego nodejs端的config加载器 typescript版本
### 使用方法
```
import { ConfigManage,ConfigService } from 'zego-config'

const config:ConfigService = ConfigManage.craete("单文件路径/或者文件路径数组")

const value = config.get("MYCONFIG")
console.log(value)
```

### 配置文件格式
```
#这里是注释
MYCONFIG=123
MYITEM=12344
```