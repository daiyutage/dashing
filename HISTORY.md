# HISTORY
https://github.com/stanleyxu2005/dashing

The file only contains the major change history. For full change history, please check the commit log.

## 0.2.6
* Feature (#19): `<form-control>` support radio group.
* Feature (#18): `<line-chart>` allows to have a secondary y-axis.

## 0.2.5
* Feature (#13): Support to render 2-value data as a `<ring-chart>`.
* Improvement: Specify tooltip position for `<remark>`.
* Feature: Added `<form-control>` to build a consistent inpurt form. Supports text/dropdown/numberic inputs with validation.

## 0.2.4
* Improvement (#12): Prior to 0.2.2, found a solution to hide tooltip when chart's selection is empty.

## 0.2.3 (Hotfix to 0.2.2)
* Bugfix : gulp would strip too many blank spaces in 0.2.2. 
* Improvement: Exposed method `toHumanReadableDuration` to util module.

## 0.2.2
* Improvement: If visibleDataPointsNum is specified, the chart will be initialized the empty point positions with placeholders. This change fixes animation flicker while adding data points.
* Feature (#6): Allows to group `<line-chart>` components. (Dashing-deps 0.0.7 is required)
* Improvement (#11): PropepertyTableBuilder is able to change layout direction for a multiple renderers cell.

## 0.2.0
* Feature (#8): Polished data points of a `<line-chart>` by having a semi-transparent border.
* Feature (#4, #5): `<bar-chart>` has more layouts (including rotated chart, bar with negative color).

## 0.1.9
* Improvement: Throusand separator support for chart labels and tooltips.
* Improvement: npm will include release files and github will be responsible for source code only.

## 0.1.8
* Feature: Add timeline support for `<line-chart>`. Previously x-axis can only have string labels.

## 0.1.7
* Improvement: If no initial data is provided, the chart is still able to be created. With a "No Graph Data Available" animation.
* Bugfix: The default sort ordering of `<sortable-table>` was wrong.

## 0.1.6
* Feature: Auto format y-axis. By default it will be formatted in a human readable notation.
* Feature: `<line-chart>` will have minor split lines.

## 0.1.4
* Feature: Provided builder to build and update `<property-table>` and `<sortable-table>`.
* Improvement: `<bar-chart>` will calculate bar width regarding specified data values.
* Improvement: Moved the custom Echarts build to dashing-deps project.

*The older versions are not ducumented well. We start the change log from here.*