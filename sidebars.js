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
      label: "Visualization",
      collapsed: true,
      link: {
        type: "generated-index",
      },
      items: [
        "matplotlib/basic-plotting",
        "matplotlib/subplot",
        "matplotlib/two-y-axes",
        "matplotlib/histogram",
        "matplotlib/contour-plot",
        "matplotlib/image-plot",
        "matplotlib/function-plot",
        "matplotlib/inset-zoom",
        "matplotlib/interactive-plots",
        "matplotlib/3d-sph",
        "matplotlib/3d-vol",
        "matplotlib/geo-plot",
        "matplotlib/mpl-customizations",
        "matplotlib/custom-colormap",
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
