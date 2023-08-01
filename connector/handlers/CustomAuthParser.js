import { DataType, Parser } from '@tableau/taco-toolkit/handlers'

export default class CustomAuthParser extends Parser {
  //TODO: Update the columns to match your api result
  parse(fetcherResult, { dataContainer }) {
    const tableName = 'CustomAuthTable'

    const containerBuilder = Parser.createContainerBuilder(dataContainer)
    const { isNew, tableBuilder } = containerBuilder.getTable(tableName)

    if (isNew) {
      tableBuilder.addColumnHeaders([
        {
          id: 'id',
          dataType: DataType.String,
        },
        {
          id: 'title',
          alias: 'title',
          dataType: DataType.String,
        },
      ])
    }

    const rows = fetcherResult.data.map((row) => ({
      id: row.id,
      title: row.title,
    }))

    tableBuilder.addRows(rows)

    return containerBuilder.getDataContainer()
  }
}
