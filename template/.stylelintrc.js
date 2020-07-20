module.exports = {
    extends: ['stylelint-config-airbnb', 'stylelint-config-prettier'],
    plugins: ['stylelint-scss', 'stylelint-order'],
    rules: {
        'media-feature-name-no-vendor-prefix': true,
        'at-rule-no-vendor-prefix': true,
        'selector-no-vendor-prefix': true,
        'property-no-vendor-prefix': true,
        'value-no-vendor-prefix': true,
        // 最多允许嵌套20层，去掉默认的最多2层
        'max-nesting-depth': 20,
        // 颜色值要小写
        'color-hex-case': 'lower',
        // 不能用important
        'declaration-no-important': true
    }
};
