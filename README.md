### 组件说明


- form:接收form model

- form-item:管理label,rules,对接validator-async,并实现了一些基础数据的默认校验

- form-item-input:通过v-model绑定数据

#### slot
- header
- footer


# elegant-php-vue

[文档地址](https://juejin.im/post/5d7860b0f265da03bc12a3d2)


## 安装依赖
```shell script
yarn install
brew install libtool automake autoconf nasm   # 为gifsicle搭建环境
```

### 运行example
```
yarn run serve
```


### 运行测试用例
```
yarn run test:unit
```

### 使用vue-cli3 打包库
```
yarn run  lib:cli
```

### 使用rollup打包库
```
yarn run  lib
```

### 格式化全部js文件
```
yarn run  lint:prettier
```

### 格式化全部css文件
```
yarn run  lint:css
```
### 运行项目文档
```
yarn run  docs:dev
```

### 打包项目文档
```
yarn run  docs:build
```

### 生成修改日志
```
yarn run  version
```
