/**
 * @flow
 */

export type ConditionalItem<T> = {
  condition: boolean | void,
  item: T,
}

function conditionalSelect<T>(...conditions: Array<ConditionalItem<T>>): Array<T> {
  return conditions.filter(({ condition, item }) => condition).map(({ item }) => item)
}

const selectStyles = (...conditionalStyles: Array<ConditionalStyle>): Array<Style> => {
  const items = conditionalStyles.map(({ condition, style }) => ({ condition, item: style }))
  return conditionalSelect<Style>(...items)
}

export default selectStyles
