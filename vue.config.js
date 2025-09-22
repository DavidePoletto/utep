// vue.config.js - VERSIONE CORRETTA SENZA ERRORI
module.exports = {
    // Ottimizzazioni per SEO senza prerendering
    chainWebpack: (config) => {
      // Ottimizza HTML output
      config.plugin('html').tap((args) => {
        args[0].minify = {
          removeComments: false, // Mantieni commenti per SEO
          collapseWhitespace: true,
          removeAttributeQuotes: false,
          collapseBooleanAttributes: false,
          removeScriptTypeAttributes: false,
          minifyCSS: true,
          minifyJS: true
        };
        
        return args;
      });
    },
  
    // CSS ottimizzato SENZA configurazione PostCSS problematica
    css: {
      extract: {
        ignoreOrder: true
      }
      // ❌ RIMOSSA la configurazione postcss che causava errori
      // loaderOptions: {
      //   postcss: {
      //     plugins: [...]
      //   }
      // }
    },
  
    // Ottimizzazioni build
    configureWebpack: (config) => {
      if (process.env.NODE_ENV === 'production') {
        // Ottimizza bundle splitting
        config.optimization = {
          ...config.optimization,
          splitChunks: {
            chunks: 'all',
            cacheGroups: {
              vendor: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
                chunks: 'all'
              },
              common: {
                name: 'common',
                minChunks: 2,
                chunks: 'all',
                enforce: true
              }
            }
          }
        };
      }
    },
  
    // Performance ottimizzazioni
    productionSourceMap: false,
    transpileDependencies: true
  };