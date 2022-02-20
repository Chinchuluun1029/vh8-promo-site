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
          "categories:performance": ["warn", {"minScore": 0.8}],
          "categories:accessibility": ["warn", {"minScore": 0.75}],
          "categories:bestPractices": ["warn", {"minScore": 0.75}],
          "categories:seo": ["warn", {"minScore": 0.75}]
        }
      },
    },
  };