/**
 * api : 一个 GeneratorAPI 实例
 * options: 可以先简单理解为 prompts 问题数组的用户输入 组合成的选项对象
 * rootOptions: 整个 preset.json 对象
 */
module.exports = (api, options, rootOptions) => {
  // options.project 可以访问上面问题数组的第一个对象的值，默认为: 'vue-web'
  //   console.log(`Your choice is ${options.project}`);
  console.log(`Your input is ${options.projectName}`);

  //   // 1.判断控制台用户的输入
  //   if (options.project === "vue-web") {
  //     // render函数把该路径下的 ./template/vue-web1 文件拷贝到默认的vue项目中。
  //     // 如果文件的路径和文件名称相同的则覆盖，否则是叠加
  //     api.render("./template/vue-web1", { InputOptions: { ...options } });
  //   }

  //   if (options.project === "base-web") {
  //     // 2.拷贝文件并传递变量。例如：InputOptions对象中的属性/变量会覆盖掉该./template/base-web2路劲下html,js,json等文件对应的属性/变量
  //     api.render("./template/base-web2", { InputOptions: { ...options } });
  //   }

  //   if (options.project === "pc-web") {
  //     // 3.如果该./template/pc-web3 路径下的内容为空，会使用vue-cli中提供的默认的模板
  //     api.render("./template/pc-web3", { InputOptions: { ...options } });
  //   }

  //   if (options.project === "mob-web") {
  //     // 4.如果该 render 没有执行，会使用 vue-cli 中提供的默认的模板
  //     // api.render('./template/mob-web4', { InputOptions:{ ...options} })
  //   }

  // 删除 vue-cli3 默认目录
  api.render((files) => {
    Object.keys(files)
      .filter((path) => path.startsWith("src/") || path.startsWith("public/"))
      .forEach((path) => delete files[path]);
    console.log(Object.keys(files));
  });

  api.render("./template");

  // 3.修改 `package.json` 里的字段
  api.extendPackage({
    // 4.添加第三库的依赖
    dependencies: {
      // 'normalize.css': '^8.0.1'
      "axios": "^0.18.0",
      "core-js": "^3.6.4",
      "terser-webpack-plugin": "^2.3.5",
      "vue": "^2.6.11",
      "vue-router": "^3.1.5",
      "vuex": "^3.1.2",
    },
    // 4.添加第三库的依赖
    devDependencies: {
      // 'normalize.css': '^8.0.1'
      "@vue/cli-plugin-babel": "~4.2.0",
      "@vue/cli-plugin-eslint": "~4.2.0",
      "@vue/cli-plugin-router": "~4.2.0",
      "@vue/cli-plugin-vuex": "~4.2.0",
      "@vue/cli-service": "~4.2.0",
      "@vue/eslint-config-prettier": "^6.0.0",
      "babel-eslint": "^10.0.3",
      "eslint": "^6.7.2",
      "eslint-plugin-prettier": "^3.1.1",
      "eslint-plugin-vue": "^6.1.2",
      "less": "^3.0.4",
      "less-loader": "^5.0.0",
      "lint-staged": "^9.5.0",
      "prettier": "^1.19.1",
      "vue-template-compiler": "^2.6.11",
      "webpack-bundle-analyzer": "^3.3.2",
      "webpack-cli": "^3.3.2",
      "compression-webpack-plugin": "^2.0.0",
      "add-asset-html-webpack-plugin": "^3.1.3"
    },
    // 5.添加自定义的脚本
    scripts: {
      // 'dev': 'vue-cli-service serve'
      dev: "vue-cli-service serve",
      serve: "vue-cli-service serve",
      build: "vue-cli-service build",
      lint: "vue-cli-service lint",
    },
    config: {},
    browserslist: ["> 1%", "last 2 versions", "not ie <= 8"],
  });
};
