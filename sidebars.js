module.exports = {
  docs: [
    {
      type: "category",
      label: "Docs",
      items: [
        "setup",
        {
          type: "category",
          label: "Fundamentals",
          collapsed: false,
          items: [
            "fundamentals/basics",
            "fundamentals/list-tuple-dict",
            "fundamentals/flow-control",
            "fundamentals/loop",
            "fundamentals/function",
            "fundamentals/class",
            "fundamentals/file-io",
          ],
        },
        {
          type: "category",
          label: "Plotting",
          collapsed: false,
          items: [
            "matplotlib/basic-plotting",
            "matplotlib/subplot",
            "matplotlib/histogram",
            "matplotlib/contour-plot",
            "matplotlib/image-plot",
            "matplotlib/function-plot",
            "matplotlib/mpl-customizations",
            "matplotlib/geo-plot"
          ],
        },
        {
          type: "category",
          label: "numpy",
          collapsed: false,
          items: [
            "numpy/numpy-basics",
            "numpy/linear-algebra",
          ],
        },
        {
          type: "category",
          label: "scipy",
          collapsed: false,
          items: [
            "scipy/integration",
            "scipy/curve-fitting",
            "scipy/convolution",
          ],
        },
        "pandas",
        {
          type: "category",
          label: "Database",
          collapsed: false,
          items: [
            "database/sql",

          ],
        },
        {
          type: "category",
          label: "Django",
          collapsed: false,
          items: [
            "django/webapp",
            "django/today-app",
            "django/todo-app",
            "django/airline",
            "django/learning-log",
          ],
        },
      ],
    },
  ],
};
