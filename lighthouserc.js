module.exports = {
    ci: {
      collect: {
        staticDistDir: './public/build/',
      },
      upload: {
        target: 'temporary-public-storage',
      },
      assert: {
        preset: 'lighthouse:recommended',
      },
    },
  };