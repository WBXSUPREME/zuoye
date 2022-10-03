谈谈你对Webpack的理解
1.Webpack是什么？

webpack 是一个静态模块打包器，当 webpack 处理应用程序时，会递归构建一个依赖关系图，其中包含应用程序需要的每个模块，然后将这些模块打包成一个或多个 bundle。

webpack 就像一条生产线,要经过一系列处理流程(loader)后才能将源文件转换成输出结果。 这条生产线上的每个处理流程的职责都是单一的,多个流程之间有存在依赖关系,只有完成当前处理后才能交给下一个流程去处理。
插件就像是一个插入到生产线中的一个功能,在特定的时机对生产线上的资源做处理。 webpack 在运行过程中会广播事件,插件只需要监听它所关心的事件,就能加入到这条生产线中,去改变生产线的运作。

2.可以说说打包过程/构建流程
3.可以说说对前端运行的优化

Webpack的打包过程/打包原理/构建流程？

webpack 的运行流程是一个串行的过程，它的工作流程就是将各个插件串联起来。

命令行执行npx webpack打包命令开始
1.初始化编译参数:从配置文件和shell命令中读取与合并参数
2.开始编译:根据上一步得到的参数初始化Compiler对象，加载所有配置的Plugin，执行对象的 run 方法开始执行编译。
3.确定入口:根据配置中的 entry 找出所有的入口文件
4.编译模块:从入口文件触发，调用所有配置的Loader对模块进行翻译，再找出该模块依赖的模块，然后递归本步骤直到所有入口依赖的文件都进行翻译。
5.完成模块编译:在经过第4步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系图。
6.输出资源：根据依赖关系图，组装成一个个包含多个模块的Chunk，再把每个Chunk转化成一个单独的文件加入到输出列表，根据配置确定输出的路径和文件名，输出。

在以上过程中，Webpack 会在特定的时间点广播出特定的事件，插件在监听到感兴趣的事件后会执行特定的逻辑。

总结

初始化:从配置文件和shell命令中读取与合并参数，根据参数初始化Compiler实例，加载Plugin(注册所有配置的插件)，调用Compiler实例的run方法开始执行编译。
Compiler编译对象掌控者webpack生命周期，不执行具体的任务，只是进行一些调度工作。比如执行模块创建、依赖收集、分块、打包等
调用run之后，创建Compiltation实例，每次构建都会新创建一个Compiltation实例，包含了这次构建的基本信息
Webpack 会在特定的时间点广播出特定的事件，插件在监听到感兴趣的事件后会执行特定的逻辑。

编译:从entry 触发，对每个Module 串行调用对应的 Loader对模块进行翻译，再找出该模块依赖的模块，递归进行编译处理。
从配置文件（ webpack.config.js ）中指定的 entry 入口，开始解析文件构建 AST 语法树

根据依赖关系图，组装成包含多个模块的Chunk，将个Chunk转换成文件输出。
不同entry生成不同chunk，动态导入也会生成自己的chunk

Webpack中loader的作用/ loader是什么？
Loader 是webpack中提供了一种处理多种文件格式的机制，因为webpack只认识JS和JSON，所以Loader相当于翻译官，将其他类型资源进行预处理。
用于对模块的"源代码"进行转换。
loader支持链式调用,**调用的顺序是从右往左。**链中的每个loader会处理之前已处理过的资源，最终变为js代码。
可以通过 loader 的预处理函数，为 JavaScript 生态系统提供更多能力。

常见的loader有哪些？
less-loader:将less文件编译成css文件
开发中，我们常常会使用less预处理器编写css样式，使开发效率提高

css-loader:将css文件变成commonjs模块加载到js中，模块内容是样式字符串
style-loader: 创建style标签，将js中的样式资源插入标签内，并将标签添加到head中生效
ts-loader: 打包编译Typescript文件
Plugin有什么作用？/Plugin是什么
Plugin功能更强大，主要目的就是解决loader 无法实现的事情，比如打包优化和代码压缩等。
Plugin加载后，在webpack构建的某个时间节点就会触发plugin定义的功能，帮助webpack做一些事情。实现对webpack的功能扩展。

常见的Plugin有哪些
html-webpack-plugin 处理html资源，默认会创建一个空的HTML，自动引入打包输出的所有资源（js/css）
mini-css-extract-plugin 打包过后的css在js文件里，该插件可以把css单独抽出来
clean-webpack-plugin 每次打包时候，CleanWebpackPlugin 插件就会自动把上一次打的包删除
Webpack 插件的执行顺序（加载机制）？
Webpack中Loader和Plugin的区别
总说
webpack 就像一条生产线,要经过一系列处理流程(loader)后才能将源文件转换成输出结果。 这条生产线上的每个处理流程的职责都是单一的,多个流程之间有存在依赖关系,只有完成当前处理后才能交给下一个流程去处理。
插件就像是一个插入到生产线中的一个功能,在特定的时机对生产线上的资源做处理。 webpack 在运行过程中会广播事件,插件只需要监听它所关心的事件,就能加入到这条生产线中,去改变生产线的运作。

或者分别使用之前的总结说Loader和Plugin是什么

运行时机
1.loader运行在编译阶段
2.plugins 在整个周期都起作用


使用方式
Loader:1.下载 2.使用
Plugin:1.下载 2.引用 3.使用

Webpack 做过哪些优化手段？有哪些优化手段？
如何利用webpack来优化前端性能？ 问的是生产环境优化
如何提高webpack的构建速度？ 问的是构建速度的优化

tree-shaking 删除没有使用的代码 优化前端性能/提高构建速度
tree-shaking是一种基于 ES Module 规范的 Dead Code Elimination 技术打包，在打包过程中检测工程中没有引用过的模块并进行标记，删除没有引用过的模块，提高构建速度，较少程序运行时间。

使用tree-shaking需要注意什么？
1.默认mode = production ，生产环境默认开启tree-shaking功能。
2.需要是使用 ES6 规范编写模块代码,ES6的模块依赖关系是确定的，和运行时状态无关
3.尽量不写带有副作用的代码。如编写了立即执行函数，在函数里使用了外部变量等。

关于副作用

如何利用webpack来优化前端性能？
代码压缩
按需加载

代码分割 splitChunks - 在optimization配置项中配置
1.可以将node__mudules中代码单独打包成一个chunk输出（比如使用了jqury？）
2.会自动分析多入口chunk中，有没有公共的文件，如果有会打包成单独的一个chunk不会重复打包

使用Dll进行分包
正常情况下node_module会被打包成一个文件
使用dll技术，对可以将那些不常更新的框架和库进行单独打包，生成一个chunk

使用路由懒加载
在代码中所有被 import()函数引用的模块，都将打成一个单独的包，放在 chunk 存储的目录下。在浏览器运行到这一行代码时，就会自动请求这个资源，实现异步加载。

Webpack如何配置压缩代码？压缩了什么？
1.在optimization配置项中来配置该插件作为压缩器进行压缩。
2.在plugins里使用该插件进行压缩

js压缩:利用terser-webpack-plugin
css压缩:利用了optimize-css-assets-webpack-plugin 插件

删除了console、注释、空格、换行、没有使用的css代码等

如何提高webpack的构建速度？
思路1:减少需要构建的文件或代码

HMR(Hot Module Replacement) 模块热替换只重新构建发生变化的模块 – 开发环境中
缩小处理范围:合理利用这两个属性exclude：不需要处理的文件 和 include：需要处理的文件
babel缓存 第二次构建时，会读取之前的缓存，只重新构建变化的文件
使用Dll进行分包 --> 分包方便按需加载
正常情况下node_module会被打包成一个文件
使用dll技术，对可以将那些不常更新的框架和库进行单独打包，生成一个chunk
项目源代码也需要拆分，可以根据路由来划分打包文件 --> 怎么实现路由懒加载？webpack中如何实现组件异步加载？

思路2:多进行进行构建

多进程打包 thread-loader,将其放在费时的loader之前
进程启动和进程通信都有开销，工作时间比较长，才需要多进程打包
————————————————
版权声明：本文为CSDN博主「rananie」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq_41370833/article/details/124783929

