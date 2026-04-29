module.exports = {
  docs: [
    "setup",
    {
      type: "category",
      label: "Basics",
      collapsed: true,
      link: {
        type: "generated-index",
      },
      items: [
        "basics/gs",
        "basics/list-tuple-dict",
        "basics/flow-control",
        "basics/loop",
        "basics/function",
        "basics/global-var",
        "basics/class",
        "basics/file-io",
      ],
    },
    {
      type: "category",
      label: "Algorithms",
      collapsed: true,
      link: {
        type: "generated-index",
      },
      items: [
        "algorithms/sorting",
        "algorithms/hashing",
      ],
    },
    {
      type: "category",
      label: "Visualization",
      collapsed: true,
      link: {
        type: "generated-index",
      },
      items: [
        "visualization/basic-plotting",
        "visualization/subplot",
        "visualization/two-y-axes",
        "visualization/histogram",
        "visualization/contour-plot",
        "visualization/image-plot",
        "visualization/function-plot",
        "visualization/inset-zoom",
        "visualization/interactive-plots",
        "visualization/3d-sph",
        "visualization/3d-vol",
        "visualization/geo-plot",
        "visualization/mpl-customizations",
        "visualization/custom-colormap",
      ],
    },
    {
      type: "category",
      label: "numpy",
      collapsed: true,
      link: {
        type: "generated-index",
      },
      items: [
        "numpy/numpy-basics",
        "numpy/linear-algebra",
      ],
    },
    {
      type: "category",
      label: "scipy",
      collapsed: true,
      link: {
        type: "generated-index",
      },
      items: [
        "scipy/integration",
        "scipy/curve-fitting",
        "scipy/convolution",
      ],
    },
    "pandas",
    "multiprocessing",
    "sql-database",
    {
      type: "category",
      label: "Webapps",
      collapsed: true,
      link: {
        type: "generated-index",
      },
      items: [
        "django/webapp",
        "django/today-app",
        "django/todo-app",
        "django/airline",
        "django/learning-log",
      ],
    },
    "misc",
    "resources",
    "license",
  ],
};
