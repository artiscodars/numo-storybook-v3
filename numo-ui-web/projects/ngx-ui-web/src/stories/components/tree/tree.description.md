# Tree

The `Tree` component from PrimeNG is used to display hierarchical data with various configurable options.

## Usage

The `Tree` component allows you to display and interact with hierarchical data. It supports various customization options such as selection modes, filtering, and lazy loading. Configure the component properties to match your specific use cases and requirements.

## Properties

### `value`
- **Type**: `any`
- **Default**: `null`
- **Description**: An array of tree nodes representing the hierarchical data.

### `selectionMode`
- **Type**: `"multiple" | "checkbox" | "single"`
- **Default**: `null`
- **Description**: Defines the selection mode of the tree. Options include:
  - `"multiple"`: Allows multiple nodes to be selected.
  - `"checkbox"`: Uses checkboxes for selection.
  - `"single"`: Allows only one node to be selected at a time.

### `loadingMode`
- **Type**: `"mask" | "icon"`
- **Default**: `mask`
- **Description**: Defines the display mode for the loading indicator. Options include:
  - `"mask"`: Displays a mask over the tree.
  - `"icon"`: Displays an icon indicating loading.

### `selection`
- **Type**: `any`
- **Default**: `null`
- **Description**: A single tree node instance or an array to refer to the selected nodes.

### `style`
- **Type**: `Object`
- **Default**: `null`
- **Description**: Inline style for the tree component.

### `styleClass`
- **Type**: `string`
- **Default**: `null`
- **Description**: CSS class applied to the tree component.

### `contextMenu`
- **Type**: `any`
- **Default**: `null`
- **Description**: Instance of the context menu to be used with the tree.

### `layout`
- **Type**: `string`
- **Default**: `vertical`
- **Description**: Defines the orientation of the tree. Valid values are:
  - `"vertical"`: Displays the tree vertically.
  - `"horizontal"`: Displays the tree horizontally.

### `draggableScope`
- **Type**: `any`
- **Default**: `null`
- **Description**: Scope of the draggable nodes to match a droppable scope.

### `droppableScope`
- **Type**: `any`
- **Default**: `null`
- **Description**: Scope of the droppable nodes to match a draggable scope.

### `draggableNodes`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Indicates whether the nodes are draggable.

### `droppableNodes`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Indicates whether the nodes are droppable.

### `metaKeySelection`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Defines how multiple items can be selected. When `true`, the meta key needs to be pressed to select or unselect an item. When `false`, selection is toggled individually. On touch-enabled devices, this is turned off automatically.

### `propagateSelectionUp`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether checkbox selections propagate to ancestor nodes.

### `propagateSelectionDown`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Whether checkbox selections propagate to descendant nodes.

### `loading`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Displays a loader to indicate that data is being loaded.

### `loadingIcon`
- **Type**: `string`
- **Default**: `null`
- **Description**: The icon to display while indicating that data is loading.

### `emptyMessage`
- **Type**: `string`
- **Default**: `null`
- **Description**: Text to display when there is no data available.

### `ariaLabel`
- **Type**: `string`
- **Default**: `null`
- **Description**: Accessibility label for the tree component.

### `togglerAriaLabel`
- **Type**: `string`
- **Default**: `null`
- **Description**: Accessibility label for the toggler icon.

### `ariaLabelledBy`
- **Type**: `string`
- **Default**: `null`
- **Description**: Establishes relationships between the component and label(s) where its value should be one or more element IDs.

### `validateDrop`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: When enabled, the drop can be accepted or rejected based on conditions defined in `onNodeDrop`.

### `filter`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: When enabled, displays an input field to filter the tree items.

### `filterBy`
- **Type**: `string`
- **Default**: `label`
- **Description**: Specifies which field(s) to search against when filtering. Can be a comma-separated list of field names.

### `filterMode`
- **Type**: `string`
- **Default**: `lenient`
- **Description**: Mode for filtering. Valid values are:
  - `"lenient"`: Allows partial matching.
  - `"strict"`: Requires exact matches.

### `filterPlaceholder`
- **Type**: `string`
- **Default**: `null`
- **Description**: Placeholder text to show when the filter input is empty.

### `filteredNodes`
- **Type**: `TreeNode<any>[]`
- **Default**: `null`
- **Description**: Values of the tree nodes after filtering.

### `filterLocale`
- **Type**: `string`
- **Default**: `null`
- **Description**: Locale to use for filtering. Defaults to the host environment's current locale.

### `scrollHeight`
- **Type**: `string`
- **Default**: `null`
- **Description**: Height of the scrollable viewport.

### `lazy`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Defines if data is loaded and interacted with in a lazy manner.

### `virtualScroll`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Indicates whether data should be loaded on demand during scroll.

### `virtualScrollItemSize`
- **Type**: `number`
- **Default**: `null`
- **Description**: Height of an item in the list for virtual scrolling.

### `virtualScrollOptions`
- **Type**: `ScrollerOptions`
- **Default**: `null`
- **Description**: Options for using the scroller feature.

### `indentation`
- **Type**: `number`
- **Default**: `1.5`
- **Description**: Indentation factor for spacing nested nodes when virtual scrolling is enabled.

### `_templateMap`
- **Type**: `any`
- **Default**: `null`
- **Description**: Custom templates for the component.

### `trackBy`
- **Type**: `Function`
- **Default**: `...`
- **Description**: Function to optimize node list rendering. The default algorithm checks for object identity.

```html
<p-tree 
    [value]="nodes" 
    [selectionMode]="'single'" 
    [loadingMode]="'mask'"
    [selection]="selectedNode"
    [style]="{'width': '300px', 'height': '400px'}"
    [styleClass]="'my-tree-class'"
    [contextMenu]="contextMenu"
    [layout]="'vertical'"
    [draggableScope]="'treeScope'"
    [droppableScope]="'treeScope'"
    [draggableNodes]="true"
    [droppableNodes]="true"
    [metaKeySelection]="true"
    [propagateSelectionUp]="true"
    [propagateSelectionDown]="true"
    [loading]="isLoading"
    [loadingIcon]="'pi pi-spin pi-spinner'"
    [emptyMessage]="'No nodes available.'"
    [ariaLabel]="'Tree component'"
    [togglerAriaLabel]="'Toggler icon for tree'"
    [ariaLabelledBy]="'tree-label'"
    [validateDrop]="true"
    [filter]="true"
    [filterBy]="'label'"
    [filterMode]="'lenient'"
    [filterPlaceholder]="'Search nodes...'"
    [filteredNodes]="filteredNodes"
    [filterLocale]="'en'"
    [scrollHeight]="'400px'"
    [lazy]="true"
    [virtualScroll]="true"
    [virtualScrollItemSize]="30"
    [virtualScrollOptions]="{ itemSize: 30, maxHeight: '400px' }"
    [indentation]="2"
    [_templateMap]="customTemplates"
    [trackBy]="trackByFunction"
    (onNodeExpand)="loadNodeChildren($event)"
    (onNodeDrop)="handleNodeDrop($event)"
    (onSelectionChange)="handleSelectionChange($event)">
</p-tree>


```