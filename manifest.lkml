project_name: "viz-collapsible_tree-marketplace"

constant: VIS_LABEL {
  value: "Collapsible Tree"
  export: override_optional
}

constant: VIS_ID {
  value: "collapsible_tree-marketplace"
  export:  override_optional
}

visualization: {
  id: "@{VIS_ID}"
  url: "https://marketplace-api.looker.com/viz-dist/collapsible_tree.js"
  label: "@{VIS_LABEL}"
}
