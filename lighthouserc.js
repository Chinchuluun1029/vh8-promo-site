module.exports = {
    ci: {
      collect: {
        staticDistDir: './public/',
      },
      upload: {
        target: 'temporary-public-storage',
      },
      assert: {
        assertions: {
          "categories:performance": ["warn", {"minScore": 0.6}],
          "categories:accessibility": ["warn", {"minScore": 0.7}]
        }
      },
    },
  };