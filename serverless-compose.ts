module.exports = {
  services: {
    infrastructure: {
      path: "infrastructure",
    },
    backend: {
      path: "backend",
      params: {
        region: "${infrastructure.region}",
      },
      dependsOn: ["infrastructure"],
    },
  },
};
