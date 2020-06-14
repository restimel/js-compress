// import resolve from '@rollup/plugin-node-resolve';
// import pluginReplace from '@rollup/plugin-replace';
// import VuePlugin from 'rollup-plugin-vue';
// import commonjs from 'rollup-plugin-commonjs' ;

export default [{
    input: 'src/jsCompress.js',
    output: [{
        file: 'dist/jsCompress.common.js',
        exports: 'named',
        format: 'cjs',
    }, {
        file: 'dist/jsCompress.esm.js',
        format: 'esm',
    }],
    context: 'this',
}];
